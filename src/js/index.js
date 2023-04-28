import { shuffleArray } from "./shuffle.js";
import { urlFetch } from "./url.js";

async function getQuestion() {
    const url = urlFetch
    const response = await fetch(url);
    const questions = await response.json();
    
    answerTheQuestion(questions);
}

 async function answerTheQuestion(questions) {
    const question =  await questions.results[0];
    const alternatives =  await questions.results[0].incorrect_answers;
    const correctAlternative =  await questions.results[0].correct_answer;
    
    alternatives.push(correctAlternative);
   
    shuffleArray(alternatives);
    
    document.querySelector(".panel")
    .innerHTML = `<p class='question'>${question.question}</p>
                        <ul class='ul'>
                            <li>${alternatives[0]}</li>
                            <li>${alternatives[1]}</li>
                            <li>${alternatives[2]}</li>
                            <li>${alternatives[3]}</li>
                        </ul>`
     
    const ul = document.querySelector('ul')                
    ul.addEventListener('click', e =>{

        if (e.target === ul) {
            return
        }

        const isCorrect = correctAlternative === e.target.innerHTML

        if(isCorrect){

            e.target.classList.add("correct")
            setTimeout(() => {
                getQuestion()
            }, 1000); 

            }else {

             e.target.classList.add("incorrect")
             setTimeout(() => {
                getQuestion()
            }, 1000);  
         }
    }) 
}

 getQuestion() 



    










 export function shuffleArray(alternatives) {
    for (let i = alternatives.length - 1; i > 0; i--) {
        const e = Math.floor(Math.random() * (i + 1));
        [alternatives[i], alternatives[e]] = [alternatives[e], alternatives[i]];
    }
    return alternatives;
}
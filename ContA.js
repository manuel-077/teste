function countA(str) {
    let count = 0;
    for (let char of str) {
        if (char.toLowerCase() === 'a') {
            count++;
        }
    }
    return `A letra 'a' aparece ${count} vezes na string.`;
}

let string = "JavaScript é uma linguagem fantástica!"; 
console.log(countA(string));

String.prototype.removeDuplicates = function(){
    const whiteSpaces = /\s+/;
    let words = this.trim().split(whiteSpaces);
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] === words[j]) {
                words.splice(j, 1);
                j--;
            }
        }
    }
    return words.join(" ")
}


// let str = "Giant Spiders? What's next? Giant Snakes?";
// console.log(str);
// // Giant Spiders? What’s next? Giant Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?
// str = ". . . . ? . . . . . . . . . . . ";
// console.log(str);
// // . . . . ? . . . . . . . . . . .
// str = str.removeDuplicates();
// console.log(str);
// // . ?
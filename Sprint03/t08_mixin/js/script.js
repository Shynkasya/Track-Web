let houseMixin = {
    wordReplace(oldWord, newWord){
        let words = this.description.split(" ");
        i = 0
        while(i != words.length && words.indexOf(oldWord, i) != -1){
            i = words.indexOf(oldWord, i)
            words.splice(i, 1, newWord)
            i++;
        }
        this.description = words.join(" ")
    },
    wordInsertAfter(insertWord, newWord){
        let words = this.description.split(" ");
        i = 0
        while(i != words.length && words.indexOf(insertWord, i) != -1){
            i = words.indexOf(insertWord, i)
            i++;
            words.splice(i, 0, newWord)
            i++;
        }
        this.description = words.join(" ")
    },
    wordDelete(deleteWord){
        let words = this.description.split(" ");
        deleteWord = deleteWord.trim()
        i = 0
        while(i != words.length && words.indexOf(deleteWord, i) != -1){
            i = words.indexOf(deleteWord, i)
            words.splice(i, 1)
        }
        this.description = words.join(" ")
    },
    wordEncrypt(){
        str = this.description.split("")
        for(char in str){
            if(str[char].match(/[A-Ma-m]/)){
                str.splice(char, 1, String.fromCharCode(str[char].charCodeAt(0) + 13))
            } else if(str[char].match(/[N-Zn-z]/)){
                str.splice(char, 1, String.fromCharCode(str[char].charCodeAt(0) - 13))
            }
        }
        this.description = str.join("")
    },
    wordDecrypt() {
        this.wordEncrypt();
    }
}

// const house = new houseBuilder('88 Crescent Avenue','Spacious town house with wood flooring, 2-car garage, and a back patio.',    'J. Smith', 110, 5);
// Object.assign(house, houseMixin);
// console.log(house.getDaysToBuild());
// // 220
// console.log(house.description);
// // Spacious town house with wood flooring, 2-car garage, and a back patio.
// house.wordReplace("wood", "tile");
// console.log(house.description);
// // Spacious town house with tile flooring, 2-car garage, and a back patio.
// house.wordDelete("town ");
// console.log(house.description);
// // Spacious house with tile flooring, 2-car garage, and a back patio.
// house.wordInsertAfter ("with", "marble");
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.
// house.wordEncrypt();
// console.log(house.description);
// // Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
// house.wordDecrypt();
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.
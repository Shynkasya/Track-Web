function addWords(obj, wrds){
	const whiteSpaces = /\s+/;
	let string = obj.words.concat(" ", wrds).trim();
	let words = string.split(whiteSpaces)
	for (let i = 0; i < words.length; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (words[i] === words[j]) {
				words.splice(j, 1);
				j--;
			}
		}
	}
	obj.words = words.join(" ")
}

function removeWords(obj, wrds){
	const whiteSpaces = /\s+/;
	let words = obj.words
	words = words.trim().split(whiteSpaces);
    let removeList = wrds.trim().split(whiteSpaces);
	for(let word in removeList){
		while(words.indexOf(removeList[word]) != -1){
			words.splice(words.indexOf(removeList[word]), 1)
		}
	}
	for (let i = 0; i < words.length; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (words[i] === words[j]) {
				words.splice(j, 1);
				j--;
			}
		}
	}
	obj.words = words.join(" ")
}


function changeWords(obj, oldWrds, newWrds) {
	const whiteSpaces = /\s+/;
	let words = obj.words
	words = words.trim().split(whiteSpaces);
	let oldList = oldWrds.trim().split(whiteSpaces);
    let newList = newWrds.trim().split(whiteSpaces);
	let len = newList.length;
	let i
	for(let word in oldList){
		i = 0
		while(i != words.length && words.indexOf(oldList[word], i) != -1){
			i = words.indexOf(oldList[word], i)
			words.splice(i, 1, ...newList)
			i += len
		}
	}
	for (let i = 0; i < words.length; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (words[i] === words[j]) {
				words.splice(j, 1);
				j--;
			}
		}
	}
	obj.words = words.join(" ")
}
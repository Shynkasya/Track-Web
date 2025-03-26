function checkBrackets(brackets){
	if(typeof(brackets) != "string") return -1;
	let bracket_count = 0;
	let credit = 0;
	let flag = false
	let i = 0;
	for(let i = 0; i < brackets.length; i++){
		if(brackets[i] == "(") {
			credit++;
			flag = true;
		}
		if(brackets[i] == ")") {
			if(credit == 0){
				bracket_count++;
			}else{
				credit--;
			}
			flag = true;
		}
	}
	if(!flag) return -1;
	bracket_count += credit;
	return bracket_count;
}
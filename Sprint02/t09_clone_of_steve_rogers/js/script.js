function copyObj(obj){
	if(obj == null || typeof(obj) != 'object'){
		return obj;
	}
	let input = Object.prototype.toString.call(obj) === "[object Array]" ? [] : {};
	for(let key of Object.keys(obj)){
		input[key] = copyObj(obj[key])
	}
	return input;
}
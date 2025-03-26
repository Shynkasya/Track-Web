function validisation_num(num){
	if(num.length == 1){
		let res = "0";
		res = res.concat("", num)
		return res;
	}
	return num;
}
function getFormattedDate(dateObject){
	let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

	let date = dateObject.getDate().toString();
	let month = (dateObject.getMonth() + 1).toString();
	let year = dateObject.getFullYear().toString();
	let hours = dateObject.getHours().toString();
	let minutes = dateObject.getMinutes().toString();
	let day = dayNames[dateObject.getDay() - 1]

	date = validisation_num(date)
	month = validisation_num(month)
	hours = validisation_num(hours)
	minutes = validisation_num(minutes)


	let res = date;
	res = res.concat(".", month);
	res = res.concat(".", year);
	res = res.concat(" ", hours);
	res = res.concat(":", minutes);
	res = res.concat(" ", day);
	return res
}
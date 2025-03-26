function greeting(){
	let name = prompt("Enter your first name")
	let surname = prompt("Enter your last name")
	if (!/^[A-Za-z]+$/.test(name) || !/^[A-Za-z]+$/.test(surname) || name == "" || surname == "") {
		console.log("Wrong input!");
		alert("Wrong input!");
		return;
	}
	name = name[0].toUpperCase()  + name.slice(1);
	surname = surname[0].toUpperCase() + surname.slice(1);
	console.log("Hello, " + name + " " + surname);
	alert("Hello, " + name + " " + surname);
}
greeting()
const validator = {
    get(target, prop, receiver) {
        console.log(`Trying to access the property '${prop}'...`);
        if(!target.hasOwnProperty(prop)){
            return false
        }
        return target[prop];
    },
    set(target, prop, value) {
        if (prop === "age") {
            if(!Number.isInteger(value)){
                throw new TypeError("The age is not an integer")
            }
            if(value < 0 || value > 200){
                throw new RangeError("The age is invalid")
            }
        }
        console.log(`Setting value '${value}' to '${prop}'`);
        target[prop] = value;
    },
}


// let person = new Proxy({}, validator);

// person.age = 100;
// // Setting value '100' to 'age'
// console.log(person.age);
// // Trying to access the property 'age'...
// // 100
// person.gender = "male";
// // Setting value 'male' to 'gender'
// person.age = 'young';
// // Uncaught TypeError: The age is not an integer
// person.age = 300;
// // Uncaught RangeError: The age is invalid

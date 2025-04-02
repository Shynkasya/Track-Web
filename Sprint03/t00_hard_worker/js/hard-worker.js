class HardWorker{
    name
    #age
    #salary
    constructor(name, age, salary) {
        this.name = name;
        this.#age = age;
        this.#salary = salary;
    }
    set age(n){
        if(n >= 1 && n < 100){
            this.#age = n
        }
    }
    set salary(n){
        if(n >= 100 && n < 10000){
            this.#salary = n
        }
    }
    get age(){
        return this.#age
    }
    get salary(){
        return this.#salary;
    }
    toObject() {
        return {
            name: this.name,
            age: this.#age,
            salary: this.salary
        };
    }
}


// /*
//     Task name: Hard worker
// */

// worker = new HardWorker;
// worker.name = 'Bruce';
// console.log(worker.name);
// // Bruce
// worker.age = 50;
// worker.salary = 1500;
// console.log(worker.toObject());
// // Object { name: "Bruce", age: 50, salary: 1500 }
// worker.name = 'Linda';
// worker.age = 140;
// console.log(worker.toObject());
// // Object { name: "Linda", age: 50, salary: 1500 }
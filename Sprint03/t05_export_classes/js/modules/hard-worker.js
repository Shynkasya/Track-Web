export class HardWorker{
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
//export {HardWorker}
class Human{
    constructor(firstName, lastName, gender, age, calories){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
        this.calories = calories
    }
    #interval
    #seconds
    setSleepTime() {
        document.getElementById("display").innerHTML = `I'm sleeping for: ${this.#seconds}`
        this.#seconds--;
        if(this.#seconds < 0){
            clearInterval(this.#interval)
            document.getElementById("display").innerHTML = `I'm awake now`
            const buttons = document.getElementsByTagName("input");
            for (const button of buttons) {
                button.disabled = false;
            }
        }
    }
    sleepFor(){
        let seconds = +prompt("Write number of seconds")
        this.#seconds = seconds;
        document.getElementById("display").style.display = "block"
        const buttons = document.getElementsByTagName("input");
        for (const button of buttons) {
            button.disabled = true;
        }
        this.#interval = setInterval(() => this.setSleepTime(), 1000);
    }
    feed(){
        if(this.calories > 500){
            document.getElementById("display").innerHTML = `I'm not hungry`
            document.getElementById("display").style.display = "block"
            setTimeout(() => {
                document.getElementById("display").style.display = "none"
            }, 3000);
        }else {
            const buttons = document.getElementsByTagName("input");
            for (const button of buttons) {
                button.disabled = true;
            }
            document.getElementById("display").innerHTML = `Nom nom nom`
            document.getElementById("display").style.display = "block"
            setTimeout(() => {
                for (const button of buttons) {
                    button.disabled = false;
                }
                this.calories += 200
                document.getElementById("display").style.display = "none"
                document.getElementById("Calories").innerHTML = `Calories: ${this.calories}`
                if(this.calories < 500) {
                    document.getElementById("display").innerHTML = `I'm still hungry`
                    document.getElementById("display").style.display = "block"
                }
            }, 10000);
        }
    }
}
class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories);
    }

    fly() {
        document.getElementById("display").style.display = "block"
        document.getElementById("display").innerHTML = "I'm flying!";
        const buttons = document.getElementsByTagName("input");
        for (const button of buttons) {
            button.disabled = true;
        }
        setTimeout(() => {
            document.getElementById("display").innerHTML = "";
            document.getElementById("display").style.display = "none"
            for (const button of buttons) {
                button.disabled = false;
            }
        }, 10000);   
    }

    fightWithEvil() {
        document.getElementById("display").style.display = "block"
        document.getElementById("display").innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
        
    }
}
function add_calories(){
    document.getElementById("display").innerHTML = "I'am hungry";
    document.getElementById("display").style.display = "block"
}
human = new Human("Ded", "Dedovich", "female", 12, 200)
function initializing(){
    document.getElementById("First").innerHTML = `First name: ${human.firstName}`
    document.getElementById("Last").innerHTML = `Last name: ${human.lastName}`
    document.getElementById("Gender").innerHTML = `Gender: ${human.gender}`
    document.getElementById("Age").innerHTML = `Age: ${human.age}`
    document.getElementById("Calories").innerHTML = `Calories: ${human.calories}`
    add_calories()
}
initializing();
let intervalId;
function changeCalories() {
  if (!intervalId) {
    intervalId = setInterval(setCalories, 60000);
  }
}

function setCalories() {
    human.calories -= 200;
    if(human.calories < 100) {
        document.getElementById("display").innerHTML = "I'am hungry";
        document.getElementById("display").style.display = "block"
    }
    document.getElementById("Calories").innerHTML = `Calories: ${human.calories}`
}
changeCalories()


function convert_to_superhero(){
    if(human.calories > 500){
        let calories = human.calories
        let hero = new Superhero(human.firstName, human.lastName, human.gender, human.age, calories)
        human = hero
        document.getElementById("buttons").style.gridTemplateColumns = "repeat(4, 1fr)";
        document.getElementById("fly").style.display = "block"
        document.getElementById("fight").style.display = "block"
        document.getElementById("to_hero").style.display = "none"
        document.getElementById("to_human").style.display = "block"
        document.getElementById("img").src = "assets/images/hero.jpg";
    }
    else{
        document.getElementById("display").innerHTML = "To turn superhero need more then 500 calories";
    }
}
function convert_to_human(){
    human = new Human(human.firstName, human.lastName, human.gender, human.age, human.calories)
    document.getElementById("buttons").style.gridTemplateColumns = "repeat(2, 1fr)";
    document.getElementById("fly").style.display = "none"
    document.getElementById("fight").style.display = "none"
    document.getElementById("to_hero").style.display = "block"
    document.getElementById("to_human").style.display = "none"
    document.getElementById("img").src = "assets/images/human.jpg";
}
document.getElementById("sleep").onclick = () => human.sleepFor();
document.getElementById("feed").onclick = () => human.feed();
document.getElementById("fly").onclick = () => human.fly();
document.getElementById("fight").onclick = () => human.fightWithEvil();

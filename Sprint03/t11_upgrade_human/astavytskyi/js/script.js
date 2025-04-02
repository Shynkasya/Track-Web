class Human {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = 0;
        this.isHungry = false;
        this.isSleeping = false;
        
        setTimeout(() => {
            this.isHungry = true;
            this.displayMessage("I'm hungry! Feed me!");
        }, 5000);
        
        this.calorieInterval = setInterval(() => {
            if (this.calories > 0) {
                this.calories = Math.max(0, this.calories - 200);
                this.updatePropertiesDisplay();
                if (this.calories <= 500 && !this.isHungry) {
                    this.isHungry = true;
                    this.displayMessage("I'm getting hungry again!");
                }
            }
        }, 60000);
    }
    
    sleepFor(seconds) {
        if (this.isSleeping) {
            this.displayMessage("I'm already sleeping!", 3000);
            return;
        }

        this.isSleeping = true;
        
        let remainingSeconds = seconds;
        const countdownInterval = setInterval(() => {
            this.displayMessage(`I'm sleeping for ${remainingSeconds} seconds`, 0, true);
            remainingSeconds--;
            
            if (remainingSeconds < 0) {
                clearInterval(countdownInterval);
                this.isSleeping = false;
                this.displayMessage("I'm awake now", 3000);
            }
        }, 1000);
    }
    
    feed() {
        if (this.calories > 500) {
            this.displayMessage("I'm not hungry");
            return;
        }
        
        this.calories += 200;
        this.updatePropertiesDisplay();
        
        let remainingSeconds = 10;
        const countdownInterval = setInterval(() => {
            this.displayMessage(`Nom nom nom... ${remainingSeconds} seconds left...`, 0, true);
            remainingSeconds--;
            
            if (remainingSeconds < 0) {
                clearInterval(countdownInterval);
                
                if (this.calories < 500) {
                    this.displayMessage("I'm still hungry");
                    this.isHungry = true;
                } else {
                    this.isHungry = false;
                    this.displayMessage("I'm full now!");
                }
            }
        }, 1000);
    }
    
    displayProperties() {
        const propertiesList = document.getElementById('properties-list');
        propertiesList.innerHTML = '';

        for (const [key, value] of Object.entries(this)) {
            if (typeof value !== 'function' && !['calorieInterval', 'isHungry', 'isSleeping', 'messageTimer'].includes(key)) {
                const propItem = document.createElement('div');
                propItem.className = 'property-item';
                propItem.textContent = `${key}: ${value}`;
                propertiesList.appendChild(propItem);
            }
        }
    }
    
    displayMethods() {
        const methodsList = document.getElementById('methods-list');
        methodsList.innerHTML = '';
        
        const sleepBtn = document.createElement('button');
        sleepBtn.className = 'method-btn';
        sleepBtn.textContent = 'Sleep';
        sleepBtn.onclick = () => {
            const seconds = prompt('Enter number of seconds to sleep:');
            if (seconds && !isNaN(seconds)) {
                this.sleepFor(parseInt(seconds));
            }
        };
        methodsList.appendChild(sleepBtn);
        
        const feedBtn = document.createElement('button');
        feedBtn.className = 'method-btn';
        feedBtn.textContent = 'Feed';
        feedBtn.onclick = () => this.feed();
        methodsList.appendChild(feedBtn);
    }
    
    updatePropertiesDisplay() {
        this.displayProperties();
    }
    
   displayMessage(message, duration = 3000, persist = false) {
        const messageBox = document.getElementById('message-box');
        messageBox.textContent = message;
        messageBox.style.display = 'block';

        if (this.messageTimer) {
            clearTimeout(this.messageTimer);
        }

        if (!persist && duration) {
            this.messageTimer = setTimeout(() => {
                messageBox.style.display = 'none';
            }, duration);
        }
    }
}

class Superhero extends Human {
    constructor(human) {
        super(human.firstName, human.lastName, human.gender, human.age);

        this.superheroName = `${this.firstName} the Great`;
        this.power = "Super Strength";
        this.costumeColor = "red";
        this.calories = human.calories;
        this.isHungry = false;

        this.calorieInterval = setInterval(() => {
            if (this.calories > 0) {
                this.calories = Math.max(0, this.calories - 200);
                console.log(this.calories);
                this.displayMessage("I'm getting hungry again!");
                this.updatePropertiesDisplay();
            }
        }, 60000);

    }


    fly() {
        if (this.isFlying) {
            this.displayMessage("I'm already flying!", 3000);
            return;
        }

        this.isFlying = true;
        document.getElementById('character-image').classList.add('flying');

        let remainingSeconds = 10;
        const countdownInterval = setInterval(() => {
            this.displayMessage(`I'm flying! ${remainingSeconds} seconds left...`, 0, true);
            remainingSeconds--;
            
            if (remainingSeconds < 0) {
                clearInterval(countdownInterval);
                this.isFlying = false;
                document.getElementById('character-image').classList.remove('flying');
                this.displayMessage("Landed safely!", 3000);
            }
        }, 1000);
    }
    
    fightWithEvil() {
        this.displayMessage("Khhhh-chh... Bang-g-g-g... Evil is defeated!");
        document.getElementById('character-image').style.animation = 'shake 0.5s';
        
        setTimeout(() => {
            document.getElementById('character-image').style.animation = '';
        }, 500);
    }
    
    displayProperties() {
    const propertiesList = document.getElementById('properties-list');
    
    propertiesList.innerHTML = '';

    const superProps = {
        superheroName: this.superheroName,
        power: this.power,
        costumeColor: this.costumeColor,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        age: this.age,
        calories: this.calories
    };

    for (const [key, value] of Object.entries(superProps)) {
        const propItem = document.createElement('div');
        propItem.className = 'property-item';
        propItem.textContent = `${key}: ${value}`;
        propertiesList.appendChild(propItem);
    }
}
    
    displayMethods() {
        const methodsList = document.getElementById('methods-list');
        methodsList.innerHTML = '';
        
        const flyBtn = document.createElement('button');
        flyBtn.className = 'method-btn';
        flyBtn.textContent = 'Fly';
        flyBtn.onclick = () => this.fly();
        methodsList.appendChild(flyBtn);
        
        const fightBtn = document.createElement('button');
        fightBtn.className = 'method-btn';
        fightBtn.textContent = 'fightWithEvil';
        fightBtn.onclick = () => this.fightWithEvil();
        methodsList.appendChild(fightBtn);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const human = new Human("John", "Doe", "male", 30);
    human.displayProperties();
    human.displayMethods();
    
    document.getElementById('transform-btn').addEventListener('click', () => {
        if (human.calories > 500) {
            const superhero = new Superhero(human);
            document.getElementById('title').textContent = "Superhero";
            document.getElementById('character-image').src = "./assets/images/iron-man.png";
            superhero.displayProperties();
            superhero.displayMethods();
            
            const transformBtn = document.getElementById('transform-btn');
            transformBtn.textContent = "Turn back to human";
            transformBtn.onclick = () => {
                location.reload();
            };
            
            superhero.displayMessage(`Transformed into ${superhero.superheroName}!`);
        } else {
            human.displayMessage("Need more than 500 calories to transform!");
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-30px); }
        50% { transform: translateX(30px); }
        75% { transform: translateX(-30px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);
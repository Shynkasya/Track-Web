class Human {
    constructor(firstName, lastName, gender, age, calories){
      this.firstName = firstName;
        document.getElementById("firstName").innerHTML = firstName;
        this.lastName = lastName;
        document.getElementById("lastName").innerHTML = lastName;
        this.gender = gender;
        document.getElementById("gender").innerHTML = gender;
        this.age = age;
        document.getElementById("age").innerHTML = age;
        this.calories = calories;
        document.getElementById("calories").innerHTML = calories;

        this.sleepTime = false;
        this.feedTime = false;
        setInterval(() => this.hungry(), 60000);
    }
  
    sleepFor(sleep_seconds) {
      if(!this.feedTime && !this.sleepTime){
        this.sleepTime = true;
  
        document.querySelector(".container .info").innerHTML = "I'm sleeping";
  
        setTimeout(() => { document.querySelector(".container .info").innerHTML = "I'm awake now";
          this.sleepTime = false;
  
          setTimeout(() => { document.querySelector(".container .info").innerHTML = ""; }, 2000) }, sleep_seconds * 1000);
       }
    }
  
    feed() {
      if(!this.sleepTime && !this.feedTime){
        this.feedTime = true;
        this.calories = +this.calories + 200;
  
        document.getElementById("calories").innerHTML = this.calories;
        document.querySelector(".container .info").innerHTML = "Nom nom nom";
  
        setTimeout(() => { document.querySelector(".container .info").innerHTML = "";
  
          if(this.calories > 0 && this.calories < 500) {
          document.querySelector(".container .info").innerHTML = "I'm still hungry";
          this.feedTime = false;
          } 
        else {
          document.querySelector(".container .info").innerHTML = "I'm not hungry";
          setTimeout(() => {
          document.querySelector(".container .info").innerHTML = "";
          this.feedTime = false;
          }, 2000)
        }
        }, 10000);
        }
    }
    hungry() {
        if(this.calories - 200 > 0) {
        this.calories = +this.calories - 200;
       }
        document.getElementById("calories").innerHTML = this.calories;
    }
  }
  
  class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
      super(firstName, lastName, gender, age, calories);
      this.flyTime = false;
      this.fightTime = false;

    }
  
    fly() {
      if(!this.flyTime && !this.fightTime) {
        this.flyTime = true;
        document.querySelector(".container .info").innerHTML = "I'm flying!";
        setTimeout(() => {
        document.querySelector(".container .info").innerHTML = "";
        this.flyTime = false;
        }, 10000)
      }
    }
  
    fightWithEvil() {
      
      if(!this.flyTime && !this.fightTime){
        this.fightTime = true;
        document.querySelector(".container .info").innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
        setTimeout(() => {
          document.querySelector(".container .info").innerHTML = "";
          this.fightTime = false;
        }, 3000)
        }
    }
  }
  
  const human = new Human("Silly", "Boykisser", "male", 19, 0);
  let superhero;
  
  document.querySelector(".container .buttons .sleep").addEventListener("click", event => {
    human.sleepFor(prompt("Enter number of seconds to sleep"));
  })
  
  document.querySelector(".container .buttons .feed").addEventListener("click", event => {
    human.feed();
  })
    
  document.querySelector(".container .turn").addEventListener("click", event => {
    if(human.calories >= 500) {
      superhero = new Superhero("Combat", "Boykisser", "male", 419, human.calories);
      document.getElementById("image").src = "./assets/images/its_hero.jpg";
    } else {
      document.querySelector(".container .info").innerHTML = "Not enough calories!";
    }
  })
  
  document.querySelector(".container .buttons .fly").addEventListener("click", event => {
    superhero.fly();
  })

  document.querySelector(".container .buttons .fight").addEventListener("click", event => {
    superhero.fightWithEvil();
  })
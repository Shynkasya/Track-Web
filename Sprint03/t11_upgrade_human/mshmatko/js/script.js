class Person {
	firstName;
	lastName;
	gender;
	age;
	calories;

	hungerInterval;
	lastState = "idle";
	state = "idle";

	getPrefix() {
		return "person";
	}

	allowedStatesToActions = ["idle", "hungry"]

	constructor(firstName, lastName, gender, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
		this.calories = 600;
		this.changeState('idle');
		this.updatePropertiesAndActions();
		this.hungerInterval = setInterval(() => this.getHungrier.apply(this), 60000)
	}

	hungryBar = 500;

	GetPropertiesObject() {
		return [
			{ property: "First Name", value: this.firstName },
			{ property: "Last Name", value: this.lastName },
			{ property: "Gender", value: this.gender },
			{ property: "Age", value: this.age },
			{ property: "Calories", value: this.calories },
			{ property: "State", value: this.state },
		]
	}

	GetActions() {
		return [
			{ name: "Sleep", action: () => { if (!this.allowedStatesToActions.includes(this.state)) return; this.sleepFor(1000) } },
			{ name: "Eat", action: () => { if (!this.allowedStatesToActions.includes(this.state)) return; this.feed() } },
			{
				name: "Turn into superhero", action: () => {
					if (!this.allowedStatesToActions.includes(this.state) || this.calories < this.hungryBar)
						return;
					window.personObj = new Superhero("Lady", "Bug", "Unknown", "Unknown", "No", false);
					clearInterval(this.hungerInterval);
				}
			}
		]
	}


	updatePropertiesAndActions() {
		let properties = this.GetPropertiesObject();

		let propertiesHtml =
			properties.map(p => {
				return `<li class="property">
				<span class="propery-name">
					${p.property}:
				</span>
				<span class="property-value">
					${p.value}
				</span>
				</li>`
			}).join("\n");

		let propertiesContainer = document.querySelector("#properties")
		propertiesContainer.innerHTML = propertiesHtml;

		let actions = this.GetActions();

		let actionsContainer = document.querySelector("#actions")

		actionsContainer.innerHTML = "";

		let actionsHtml = actions.forEach(p => {
			let item = document.createElement("li");
			item.classList.add("action");
			let button = document.createElement("button")
			button.addEventListener("click", p.action);
			button.innerHTML = p.name;
			item.appendChild(button);
			actionsContainer.appendChild(item);
		})

	}
	getMessage() {
		let message = document.querySelector("#message");
		return message;
	}
	setMessageVisible(makeVisible) {
		let message = this.getMessage();
		if (makeVisible)
			message.removeAttribute("hidden")
		else
			message.setAttribute("hidden", "")
	}

	setMessageText(text) {
		let message = this.getMessage();
		message.textContent = text;
	}

	getImg() {
		let img = document.querySelector("#image")
		return img;
	}
	setStateImage(state) {
		let img = this.getImg();
		img.setAttribute("src", `./assets/images/${this.getPrefix()}_${state}.png`)
	}

	getStateChanging() {
		return {
			"idle": () => {
				if (this.calories < this.hungryBar) {
					this.changeState("hungry");
					return;
				}
				this.setStateImage("idle");
				this.setMessageVisible(true);
				if (this.lastState == "sleeping") {
					this.setMessageText("I'm awake now")
					setTimeout(() => {
						if (this.state == "idle" && this.calories > this.hungryBar) { this.setMessageText("Let's do something") }
						else if (this.calories < this.hungryBar) {
							this.changeState("hungry");
						}
						this.updatePropertiesAndActions();
					}, 1000);
				}
				else {
					if (this.state == "idle") { this.setMessageText("Let's do something") }
				}
				this.updatePropertiesAndActions();
			},
			"sleeping": () => {
				this.setStateImage("sleeping");
				this.setMessageVisible(true);
				this.setMessageText("I am sleeping")
				this.updatePropertiesAndActions();

			},
			"eating": () => {
				this.setStateImage("eating");
				this.setMessageVisible(true);
				this.setMessageText("Nom nom nom")
				this.updatePropertiesAndActions();
			},
			"hungry": () => {
				this.setStateImage("hungry");
				this.setMessageVisible(true);
				this.setMessageText("I am hungry");
				this.updatePropertiesAndActions();
			}
		}
	}

	sleepFor() {
		let time = prompt("For how much sleep?(seconds)");
		time = +time * 1000;
		this.changeState("sleeping")
		setTimeout(() => {
			this.changeState("idle")
		}, time);
	}

	feed() {
		if (this.calories > this.hungryBar) {
			this.setMessageText("I am not hungry");
			return;
		}
		this.changeState("eating")
		setTimeout(() => {
			this.calories += 200;
			if (this.calories < this.hungryBar) {
				this.changeState("hungry")
				this.setMessageText("I am still hungry");
				return;
			}
			this.changeState("idle")
		}, 10000);
	}

	getHungrier() {
		if (this.calories - 200 < 0) return;
		this.calories -= 200;
		if (this.calories < this.hungryBar) {
			let waitInterval = setInterval(() => {
				if (this.state == "idle") {
					if (this.calories < this.hungryBar) {
						this.changeState("hungry")
						this.updatePropertiesAndActions();
					}
					clearInterval(waitInterval);
					this.updatePropertiesAndActions();
				}
			}, 10);
		}
		this.updatePropertiesAndActions();
	}

	changeState(newState) {
		this.lastState = this.state;
		this.state = newState;
		this.getStateChanging()[newState]();
	}
}

class Superhero extends Person {
	getPrefix() {
		return "superHero";
	}
	canRecognizeSuperCat;
	fightsEvil;

	constructor(firstName, lastName, gender, age, canRecognizeSuperCat, fightsEvil) {
		super(firstName, lastName, gender, age);
		this.canRecognizeSuperCat = canRecognizeSuperCat;
		this.fightsEvil = fightsEvil;
		this.updatePropertiesAndActions();
	}
	getStateChanging() {
		let states = super.getStateChanging();
		states["flying"] = () => {
			this.setStateImage("flying");
			this.setMessageVisible(true);
			this.setMessageText("I am flying");
			this.updatePropertiesAndActions();
		}
		states["fighting"] = () => {
			this.setStateImage("fighting");
			this.setMessageVisible(true);
			this.setMessageText("Khhhh-chh... Bang-g-g-g... Evil is defeated!");
			this.updatePropertiesAndActions();
		}
		states["kissing"] = () => {
			this.setStateImage("kissing");
			this.setMessageVisible(true);
			this.setMessageText("Nom nom nom");
			this.updatePropertiesAndActions();
		}
		return states;
	}

	fly() {
		this.changeState("flying")
		setTimeout(() => {
			this.changeState("idle")
		}, 10000)
	}

	fightWithEvil() {
		this.fightsEvil = true;
		this.changeState("fighting")
		setTimeout(() => {
			this.fightsEvil = false;
			this.changeState("idle")
		}, 1000)
	}

	GetActions() {
		let actions = super.GetActions();
		let turnIndex = actions.findIndex(a => a.name == "Turn into superhero")
		if (turnIndex > -1) {
			actions.splice(turnIndex, 1);
		}
		actions.push(
			{
				name: "Fly", action: () => {
					if (!this.allowedStatesToActions.includes(this.state)) return;
					this.fly()
				}
			}
		)
		actions.push(
			{
				name: "Fight", action: () => {
					if (!this.allowedStatesToActions.includes(this.state)) return;
					this.fightWithEvil()
				}
			}
		)
		actions.push(
			{
				name: "Kiss", action: () => {
					this.changeState("kissing")
					setTimeout(() => {
						this.changeState("idle")
					}, 1000)
				}
			}
		)
		return actions;
	}
	GetPropertiesObject() {
		let properies = super.GetPropertiesObject();
		properies.push({ property: "Can recognize Super Cat", value: this.canRecognizeSuperCat })
		properies.push({ property: "Fights evil", value: this.fightsEvil })

		return properies;
	}


}

window.personObj = new Person("Marinette", "Dupain-Cheng", "Female", 14);

setTimeout(() => {
	window.personObj.getHungrier();
}, 5000)
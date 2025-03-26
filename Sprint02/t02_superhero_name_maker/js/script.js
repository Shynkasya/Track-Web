function animal_func(){
    let regex = RegExp('^[a-zA-Z]{1,20}$');
    let animal = prompt("What animal is the superhero most similar to?");
    if(!regex.test(animal)){
        alert("Invalid animal name! It must be a single word with only letters, and at most 20 characters.");
        return
    }
    return animal;
}

function gender_func(){
    let regex_male = /^male$/i;
    let regex_female = /^female$/i;
    let regex_blank = /^$/;
    let gender;
    gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if(regex_male.test(gender)){
        return 0;
    }else if(regex_female.test(gender)){
        return 1;
    }else if(regex_blank.test(gender)){
        return 2
    }else{
        alert("Invalid gender! It must be male, female or blank");
    }
}
function age_func(){
    let regex = /^[1-9]{1}[0-9]{0,4}$/;
    let age = prompt("How old is the superhero?");
    if(!regex.test(age)){
        alert("Invalid age! It must be length <= 5, only digits, that cannot start with a zero");
        return
    }
    return age;
}


function form(){
    let animal = animal_func()
    if(typeof(animal) == "undefined") return
    let gender = gender_func()
    if(typeof(gender) == "undefined") return
    let age = age_func()
    if(typeof(age) == "undefined") return

    if(age < 18){
        if(gender == 0){
            alert('The superhero name is: ' + animal + "-boy!")
        }else if(gender == 1){
            alert('The superhero name is: ' + animal + "-girl!")
        } else{
            alert('The superhero name is: ' + animal + "-kid!")
        }
    }else{
        if(gender == 0){
            alert('The superhero name is: ' + animal + "-man!")
        }else if(gender == 1){
            alert('The superhero name is: ' + animal + "-woman!")
        } else{
            alert('The superhero name is: ' + animal + "-hero!")
        }
    }
}
form()
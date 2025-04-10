function transformation(){
    if(document.getElementById("hero").innerHTML !== "Hulk"){
        document.getElementById("hero").innerHTML = "Hulk"
        document.getElementById("hero").style.fontSize = "130px"
        document.getElementById("hero").style.letterSpacing = "6px"
        document.getElementById("lab").style.backgroundColor = "#70964b"
    }else{
        document.getElementById("hero").innerHTML = "Bruce Banner"
        document.getElementById("hero").style.fontSize = "60px"
        document.getElementById("hero").style.letterSpacing = "2px"
        document.getElementById("lab").style.backgroundColor = "#ffb300"
    }
}
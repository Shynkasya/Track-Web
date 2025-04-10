let li = document.getElementsByTagName("li")
for(let i = 0; i < li.length; i++){
    if(li[i].getAttribute("class") !== "good" && li[i].getAttribute("class") !== "evil"){
        li[i].setAttribute("class", "unknown")
    }
    if(li[i].getAttribute("data-element") === null){
        li[i].setAttribute("data-element", "none")
    }
    let data = li[i].getAttribute("data-element")
    data = data.split(" ");
    let element_div = document.createElement("div")
    let div
    for(let j = 0; j < data.length; j++){
        let div = document.createElement("div")
        if(data[j] == "fire"){
            div.setAttribute("class", "elem fire")
        }
        if(data[j] == "water"){
            div.setAttribute("class", "elem water")
        }
        if(data[j] == "air"){
            div.setAttribute("class", "elem air")
        }
        if(data[j] == "earth"){
            div.setAttribute("class", "elem earth")
        }
        if(data[j] == "none"){
            let div1 = document.createElement("div")
            div.setAttribute("class", "elem")
            div1.setAttribute("class", "line")
            div.appendChild(div1)
        }
        element_div.appendChild(div)
    }
    li[i].appendChild(element_div)
}
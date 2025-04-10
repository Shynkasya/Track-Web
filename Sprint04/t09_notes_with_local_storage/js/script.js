let i = localStorage.getItem("i")
if(i == undefined) {
    let label = document.createElement("label")
    label.setAttribute("id", "empty")
    label.innerHTML = "[Empty]";
    document.getElementById("output").appendChild(label)
    i = -1;
}
for(let j = 0; j <= i;j++){
    createNote(localStorage.getItem("message" + j))
}

function createNote(note){
    if(document.getElementById("empty") !== null){
        document.getElementById("empty").remove();
    }
    let label = document.createElement("label")
    label.setAttribute("class", "note")
    let string = "-> " + note;
    label.innerHTML = string;
    document.getElementById("output").appendChild(label)
}
function formatate_date(){
    let date = new Date()
    let string = "["
    string += ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear() + ", "
    string += ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + "]"
    return string;
}
function add_to_note(){
    let note = document.getElementById("text").value
    if(note == "") alert(`It's empty. Try to input something in "Text input"`)
    else{
        document.getElementById("text").value = ""
        i++;
        localStorage.setItem("i", i);
        note = note + " " + formatate_date()
        createNote(note);
        localStorage.setItem("message" + i, note);
    }
}
function clear_storage(){
    if(confirm("Are you sure?")){
        localStorage.clear();
        let note_clear = document.getElementsByClassName("note")
        for(let j = note_clear.length - 1; j >= 0; j--) note_clear[j].remove()
        let label = document.createElement("label")
        label.setAttribute("id", "empty")
        label.innerHTML = "[Empty]";
        document.getElementById("output").appendChild(label)
        i = -1;
    }
}

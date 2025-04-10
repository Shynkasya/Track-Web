let i = getCookie("i")
if(i === "undefined") {
    let label = document.createElement("label")
    label.setAttribute("id", "empty")
    label.innerHTML = "[Empty]";
    document.getElementById("output").appendChild(label)
    i = -1;
}
for(let j = 0; j <= i;j++){
    createNote(getCookie("message" + j))
}
function getCookie(name){
    return decodeURIComponent(document.cookie.split("; ").find((row) => row.startsWith(name+"="))?.split("=")[1])
}
function createNote(note){
    if(document.getElementById("empty") !== null){
        document.getElementById("empty").remove();
    }
    let label = document.createElement("label")
    label.setAttribute("class", "note")
    let string = "-> "+note;
    label.innerHTML = string;
    document.getElementById("output").appendChild(label)
}
function add_to_note(){
    let note = document.getElementById("text").value
    if(note == "") alert(`It's empty. Try to input something in "Text input"`)
    else{
        document.getElementById("text").value = ""
        i++;
        const date = new Date();
        date.setDate(date.getDate() + 30);

        document.cookie = "i="+encodeURIComponent(i)
        createNote(note);
        document.cookie = "message" + encodeURIComponent(i) + "="+encodeURIComponent(note) + `;expires=${date.toUTCString()}`
    }
}
function clear_cookies(){
    if(confirm("Are you sure?")){
        for(let j = 0; j <= i;j++){
            document.cookie = "message" + j + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
        }
        document.cookie = 'i=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
        let note_clear = document.getElementsByClassName("note")
        for(let j = note_clear.length - 1; j >= 0; j--) note_clear[j].remove()
        let label = document.createElement("label")
        label.setAttribute("id", "empty")
        label.innerHTML = "[Empty]";
        document.getElementById("output").appendChild(label)
        i = -1;
    }
}
let title = document.getElementsByClassName("film_title");
let clicked = document.getElementsByClassName("is_clicked")
let films = document.getElementsByClassName("film_container")
let j = 0
for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', () => {
        films[j].style.display = "none";
        clicked[j].style.display = "none"
        j = i
        films[i].style.display = "flex";
        clicked[j].style.display = "block"
    });
}
let divs = Array.from(document.getElementsByClassName("block"));
let is_drop = false;

divs.forEach(function (div) {
    let minusX = 0;
    let minusY = 0;

    function listener(e) {
        div.style.left = e.pageX - minusX + "px";
        div.style.top = e.pageY - minusY + "px";
        is_drop = true;
    }

    div.addEventListener('click', function () {
        if (div.classList.contains("unclicked")) {
            div.style.borderStyle = "dashed";
            div.classList.remove("unclicked");
            div.classList.add("clicked");
        } else if (!is_drop) {
            div.style.borderStyle = "none";
            div.classList.remove("clicked");
            div.classList.add("unclicked");
        }
    });

    div.addEventListener('mousedown', function (e) {
        is_drop = false
        if (div.classList.contains("clicked")) {
            minusX = e.clientX - div.getBoundingClientRect().left;
            minusY = e.clientY - div.getBoundingClientRect().top;
            document.addEventListener('mousemove', listener);
        }
    });

    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', listener);
    });
});
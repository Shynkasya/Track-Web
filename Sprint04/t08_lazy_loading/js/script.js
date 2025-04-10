let loaded = 0
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute("data-src");
            if(src){
                img.removeAttribute("data-src")
                img.src = src;
                loaded++;
                document.getElementById("info").innerHTML = loaded + " images loaded from 20"
                if(loaded >= 20){
                    document.getElementById("info").style.backgroundColor = "#8ceb8c"
                    setTimeout(() => {
                        document.getElementById("info").style.display = "none"
                      }, 3000);
                }
            }
        }
    })
})

const img = document.querySelectorAll('img')
img.forEach(i => {
    observer.observe(i)
})
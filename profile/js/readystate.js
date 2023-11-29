document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
        const enter = document.querySelector('#title button')
        enter.textContent = "Let's have some fun"
    } else if (event.target.readyState === "complete") {
        const title = document.querySelector('#title')
        const enter = document.querySelector('#title button')
        const goout = document.querySelector('#map')
        enter.addEventListener('click', function () {
            userInteracting = !0
            title.hidden = true
            goout.style.pointerEvents = 'auto'
            goout.style.userSelect = 'auto'
        })
    }
});
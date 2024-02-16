'use strict'

const now = new Date();
let month = now.getMonth();

async function indexJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    annual(index)
}

function annual(obj) {
    const body = document.body;
    for (let m = 0; m < obj.annual.length; m++) {
        const ul = document.createElement('ul')
        body.appendChild(ul)

        if (m === month) {
            ul.style.fontSize = "150%"
        } else {
            ul.style.fontSize = "100%"
        }

        const p = document.createElement('p')
        p.textContent = obj.annual[m].month;
        ul.appendChild(p)

        for (const event of obj.annual[m].events) {
            const li = document.createElement('li')
            li.innerHTML = `
            <u>${event.date}</u><br>
            <i>${event.venue}</i><br>
            <b>${event.title}</b>
            `;
            ul.appendChild(li)

            if (event.link) {
                li.className = 'link';
                li.addEventListener('click', function () {
                    location.assign(event.link)
                }, false)
            }
        }
    }
}
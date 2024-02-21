'use strict'

const now = new Date();
let thismonth = now.getMonth() + 1;

async function annualJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    annualAll(index)
}

async function eventsJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    eventAll(index)
}

function annualAll(obj) {
    for (const eachMonth of obj.annualAll) {
        const radio = document.createElement('input')
        radio.setAttribute('type', 'radio')
        radio.setAttribute('name', 'month')
        radio.setAttribute('id', eachMonth.en)
        radio.setAttribute('value', eachMonth.en)
        document.querySelector('nav').appendChild(radio)

        const label = document.createElement('label')
        label.setAttribute('for', eachMonth.en)
        label.textContent = eachMonth.month + '月'
        document.querySelector('nav').appendChild(label)

        const article = document.createElement('article')
        article.dataset.id = eachMonth.en;
        document.querySelector('#annual').appendChild(article)

        if (eachMonth.month === thismonth) {
            article.hidden = false;
            radio.setAttribute('checked', false)
        } else {
            article.hidden = true;
        }
    }

    let filter = document.querySelectorAll("nav input")
    let targets = document.querySelectorAll("#annual article")

    for (let i of filter) {
        i.addEventListener('change', () => {
            let thisMonth = document.querySelector("h1 strong")
            let thisEn = document.querySelector("h1 small")
            let thiLabel = document.querySelector(`nav label[for='${i.value}']`)
            for (let ii of targets) {
                if (i.value === ii.dataset.id) {
                    ii.hidden = false;
                    thisMonth.textContent = thiLabel.textContent;
                    thisEn.textContent = ii.dataset.id;
                } else {
                    ii.hidden = true;
                }
            }
        }, false)
    }
}

function eventAll(obj) {
    for (const eachMonth of obj.annualAll) {
        if (eachMonth.events) {
            for (const eachEvent of eachMonth.events) {
                const section = document.createElement('section')
                document.querySelector(`article[data-id="${eachMonth.en}"]`).appendChild(section)

                const p = document.createElement('p')
                section.appendChild(p)
                p.innerHTML = `<u>${eachEvent.date}</u><br>${eachEvent.venue}`;

                const h2 = document.createElement('h2')
                section.appendChild(h2)
                h2.textContent = eachEvent.title;
            }
        }
    }
}
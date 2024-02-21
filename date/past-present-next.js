'use strict'

async function annualJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    annualThis(index);
}

async function eventJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    eventThis(index)
}

function annualThis(obj) {
    for (const eachMonth of obj.annualAll) {
        if (eachMonth.month === thismonth) {
            document.querySelector('#thismonth').textContent = eachMonth.month + '月 ' + eachMonth.en;
        } else if (eachMonth.month === thismonth + 1) {
            document.querySelector('#nextmonth').textContent = eachMonth.month + '月 ' + eachMonth.en;
        } else if (eachMonth.month === thismonth - 1) {
            document.querySelector('#lastmonth').textContent = eachMonth.month + '月 ' + eachMonth.en;
        }
    }
}

function eventThis(obj) {
    for (const eachMonth of obj.annualAll) {
        if (eachMonth.month === thismonth + 1) {
            if (eachMonth.events) {
                for (const thisEvent of eachMonth.events) {
                    if (thisEvent.link) {
                        const h4 = document.createElement('h4')
                        h4.innerHTML = `
                        <small>${thisEvent.date}</small><br>
                        <u>${thisEvent.venue}</u><br>
                        <a href='${directory}${thisEvent.link}'>${thisEvent.title}</a>
                        `;
                        document.querySelector('#next').appendChild(h4)
                    }
                }
            }
        } else if (eachMonth.month === thismonth) {
            if (eachMonth.events) {
                for (const thisEvent of eachMonth.events) {
                    if (thisEvent.link) {
                        const h4 = document.createElement('h4')
                        h4.innerHTML = `
                        <small>${thisEvent.date}</small><br>
                        <u>${thisEvent.venue}</u><br>
                        <a href='${directory}${thisEvent.link}'>${thisEvent.title}</a>
                        `;
                        document.querySelector('#present').appendChild(h4)
                    }
                }
            }
        } else if (eachMonth.month === thismonth - 1) {
            if (eachMonth.events) {
                for (const thisEvent of eachMonth.events) {
                    if (thisEvent.link) {
                        const p = document.createElement('p')
                        p.innerHTML = `
                        <small>${thisEvent.date}</small><br>
                        <u>${thisEvent.venue}</u><br>
                        <a href='${directory}${thisEvent.link}'>${thisEvent.title}</a>
                        `;
                        document.querySelector('#past').appendChild(p)
                    }
                }
            }
        }
    }
}
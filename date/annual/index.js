'use strict'

for (const eachMonth of annual) {
    if (eachMonth.month === thismonth + 1 && eachMonth.events) {
        for (const next of eachMonth.events) {
            if (next.link) {
                const h4 = document.createElement('h4');
                h4.innerHTML = `
                <small>${next.date}</small><br>
                <u>${next.venue}</u><br>
                <a href='${next.link}'>${next.title}</a>
                `;
                document.querySelector('#next').appendChild(h4);
            }
        }
    } else if (eachMonth.month === thismonth && eachMonth.events) {
        for (const present of eachMonth.events) {
            if (present.link) {
                const h4 = document.createElement('h4');
                h4.innerHTML = `
                <small>${present.date}</small><br>
                <u>${present.venue}</u><br>
                <a href='${present.link}'>${present.title}</a>
                `;
                document.querySelector('#present').appendChild(h4);
            }
        }
    } else if (eachMonth.month === thismonth - 1 && eachMonth.events) {
        for (const past of eachMonth.events) {
            if (past.link) {
                const p = document.createElement('p');
                p.innerHTML = `
                <small>${past.date}</small><br>
                <u>${past.venue}</u><br>
                <a href='${past.link}'>${past.title}</a>
                `;
                document.querySelector('#past').appendChild(p);
            }
        }
    }
}
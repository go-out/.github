'use strict'

const annualAll = [
    {
        "month": 1,
        "en": "January"
    },
    {
        "month": 2,
        "en": "February"
    },
    {
        "month": 3,
        "en": "March",
        "events": [
            {
                "title": "春のお彼岸",
                "venue": "自然をたたえ、生物をいつくしむ",
                "date": "春分の日を中日に、前後3日間あわせた7日",
                "link": "#season"
            }
        ]
    },
    {
        "month": 4,
        "en": "April"
    },
    {
        "month": 5,
        "en": "May",
        "events": [
            {
                "title": "端午の節句",
                "venue": "鯉のぼりを掲げ、柏餅やちまきをいただき、菖蒲湯につかって邪気を祓う",
                "date": "毎年五月五日",
                "link": "#"
            }
        ]
    },
    {
        "month": 6,
        "en": "June"
    },
    {
        "month": 7,
        "en": "July"
    },
    {
        "month": 8,
        "en": "August"
    },
    {
        "month": 9,
        "en": "September",
        "events": [
            {
                "title": "秋のお彼岸",
                "venue": "祖先をうやまい、なくなった人々をしのぶ",
                "date": "秋分の日を中日に、前後3日間あわせた7日",
                "link": "#"
            }
        ]
    },
    {
        "month": 10,
        "en": "October"
    },
    {
        "month": 11,
        "en": "November"
    },
    {
        "month": 12,
        "en": "December",
        "events": [
            {
                "title": "冬至の日",
                "venue": "柚子湯に入り、かぼちゃを食べる",
                "date": "一年でもっとも昼が短く、夜が長いころ",
                "link": "#"
            }
        ]
    }
]

for (const eachAll of annualAll) {
    if (eachAll.month === thismonth + 1) {
        if (eachAll.events) {
            for (const next of eachAll.events) {
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
        }

        const strong = document.createElement('strong');
        strong.innerHTML = eachAll.month + '月 ' + eachAll.en;
        document.querySelector('#now').appendChild(strong);
    } else if (eachAll.month === thismonth) {
        if (eachAll.events) {
            for (const present of eachAll.events) {
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
        }

        const strong = document.createElement('strong');
        strong.innerHTML = eachAll.month + '月 ' + eachAll.en + ' & ';
        document.querySelector('#now').appendChild(strong);
    } else if (eachAll.month === thismonth - 1) {
        const h3 = document.createElement('h3');
        h3.innerHTML = '<strong>' + eachAll.month + '月 ' + eachAll.en + '</strong>';
        document.querySelector('#past').appendChild(h3);

        if (eachAll.events) {
            for (const past of eachAll.events) {
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
}
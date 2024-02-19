'use strict'

const annualAll = [
    {
        "month": "January",
        "events": [
            {
                "title": "人日の節句",
                "venue": "毎年一月七日",
                "date": "春の七草の入った「七草粥」を食べ、無病息災を願う",
                "link": "#"
            }
        ]
    },
    {
        "month": "February"
    },
    {
        "month": "March",
        "events": [
            {
                "title": "春のお彼岸",
                "venue": "自然をたたえ、生物をいつくしむ",
                "date": "春分の日を中日に、前後3日間あわせた7日",
                "link": "#"
            }
        ]
    },
    {
        "month": "April"
    },
    {
        "month": "May",
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
        "month": "June"
    },
    {
        "month": "July"
    },
    {
        "month": "August"
    },
    {
        "month": "September",
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
        "month": "October"
    },
    {
        "month": "November"
    },
    {
        "month": "December",
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
    if (eachAll.month === thismonth + 1 && eachAll.events) {
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

        const strong = document.createElement('strong');
        strong.innerHTML = eachAll.month + '月 ' + eachAll.en;
        document.querySelector('#now').appendChild(strong);
    } else if (eachAll.month === thismonth && eachAll.events) {
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

        const strong = document.createElement('strong');
        strong.innerHTML = eachAll.month + '月 ' + eachAll.en + ' & ';
        document.querySelector('#now').appendChild(strong);
    } else if (eachAll.month === thismonth - 1 && eachAll.events) {
        const h3 = document.createElement('h3');
        h3.innerHTML = '<strong>' + eachAll.month + '月 ' + eachAll.en + '</strong>';
        document.querySelector('#past').appendChild(h3);

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
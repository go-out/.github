'use strict'

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    videoAll(index);
    playThis(index);
}

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    }
    return array;
}

function videoAll(obj) {
    const main = document.querySelector('main');

    const playAll = shuffle(obj.video);
    for (let i = 0; i < playAll.length; i++) {
        const video = document.createElement('video');
        video.setAttribute('playsinline', 'true');
        video.style.width = obj.width
        video.style.height = obj.height
        main.appendChild(video);

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            video.muted = true;
            video.setAttribute('muted', 'true');
        }

        if (playAll[i].src) {
            let ii = 0;
            const source = document.createElement('source');
            source.setAttribute("type", "video/mp4");
            source.src = obj.directory + playAll[i].src[ii];
            video.appendChild(source);

            video.addEventListener('ended', () => {
                if (playAll[i].src.length === 0) {
                    ii = 0;
                    source.src = obj.directory + playAll[i].src[ii];
                } else if (ii === playAll[i].src.length - 1) {
                    ii = 0;
                    source.src = obj.directory + playAll[i].src[ii];
                } else if (ii < playAll[i].src.length - 1) {
                    ii++;
                    source.src = obj.directory + playAll[i].src[ii];
                }
                video.load();
                video.play();
            }, false);
        }
    }
}

function playThis(obj) {
    const year = document.querySelector("#year");
    year.textContent = obj.year;
    const month = document.querySelector("#month");
    month.textContent = obj.month;
    const day = document.querySelector("#day");
    day.textContent = obj.day;

    document.title = obj.title;
    const playBtn = document.querySelector("#play");
    playBtn.textContent = document.title;

    const description = document.querySelector("meta[name='description']");
    description.content = obj.description;

    playBtn.addEventListener('click', function () {
        document.body.className = document.body.className === "start" ? "stop" : "start";
        if (document.body.className === "start") {
            playBtn.textContent = document.title
            stop();
        } else if (document.body.className === "stop") {
            playBtn.textContent = description.content
            start();
        }
    });

    function start() {
        const all = document.querySelectorAll('video');
        all.forEach((iii) => {
            iii.play();
        })
    }

    function stop() {
        const all = document.querySelectorAll('video');
        all.forEach((iii) => {
            iii.pause();
        })
    }
}
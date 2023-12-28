'use strict'

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    playThis(index);
    videoAll(index);
}

function playThis(obj) {
    const year = document.querySelector("#year");
    if (obj.year) {
        year.textContent = obj.year;
    } else {
        year.hidden = true;
    }

    const month = document.querySelector("#month");
    if (obj.month) {
        month.textContent = obj.month;
    } else {
        month.hidden = true;
    }

    const day = document.querySelector("#day");
    if (obj.day) {
        day.textContent = obj.day;
    } else {
        day.hidden = true;
    }

    document.title = obj.title;
    const header = document.querySelector("main header");
    const playBtn = document.querySelector("#play");
    playBtn.textContent = document.title;

    const description = document.querySelector("meta[name='description']");
    description.content = obj.description;

    header.addEventListener('click', function () {
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

        if (obj.track) {
            let cnt = 0;
            let trackAll = obj.track;
            let timerId = setInterval(function () {
                cnt++
                for (let i = 0; i < trackAll.length; i++) {
                    if (cnt === trackAll[i].time) {
                        playBtn.textContent = trackAll[i].sub;
                    } else if (cnt === trackAll[trackAll.length - 1].time) {
                        clearInterval(timerId);
                    }
                }
            }, 1000);
        }
    }

    function stop() {
        const all = document.querySelectorAll('video');
        all.forEach((iii) => {
            iii.pause();
        })
    }
}

function videoAll(obj) {
    const main = document.querySelector('main');

    if (obj.video) {
        const playAll = shuffle(obj.video);
        for (let i = 0; i < playAll.length; i++) {
            const video = document.createElement('video');
            video.setAttribute('playsinline', 'true');
            video.setAttribute('poster', obj.directory + playAll[i].poster);
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

        window.onresize = tmResize;
        function tmResize() {
            if (typeof pageResize == "function") {
                pageResize();
            }
        }

        function pageResize() {
            const mediaQueryList = window.matchMedia('screen and (min-width: 1000px)');
            if (mediaQueryList.matches) {
                /* orientation は landscape（現在ビューポートは横長） */
                main.style.gridTemplateColumns = obj.landscape;
            } else {
                /* orientation は landscape ではない（現在ビューポートは縦長） */
                main.style.gridTemplateColumns = obj.portrait;
            }
        }

        pageResize();
    } else {
        const header = document.querySelector("main header");
        header.remove();

        const iframe = document.createElement('iframe');
        iframe.id = "player";
        iframe.src = "https://www.youtube.com/embed/" + obj.youtube
        main.appendChild(iframe);
    }

    if (obj.contrib) {
        const p = document.createElement('p');
        p.textContent = "Video Posted by"
        document.querySelector("footer").appendChild(p);
        for (const contrib of obj.contrib) {
            const a = document.createElement('a');
            a.innerHTML = contrib.name;
            a.href = "https://www.google.com/maps/contrib/" + contrib.id + "/";
            a.setAttribute("target", "_blank")
            p.appendChild(a);
        }
    }

    if (obj.info) {
        for (const info of obj.info) {
            document.querySelector("#info").innerHTML += info + "<br>";
        }
    }
}

function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
    }
    return array;
}
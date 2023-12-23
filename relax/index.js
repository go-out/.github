'use strict'

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    videoAll(index);
    playThis(index);
}

function videoAll(obj) {
    const randomdRaggable = document.querySelector('main fieldset');

    const playAll = obj.play;
    for (let i = 0; i < playAll.length; i++) {

        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'video');
        input.id = playAll[i].id;
        input.value = playAll[i].id;
        randomdRaggable.appendChild(input);

        const label = document.createElement('label');
        label.setAttribute('for', playAll[i].id);
        randomdRaggable.appendChild(label);

        const video = document.createElement('video');
        video.setAttribute('playsinline', 'true');
        label.appendChild(video);

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            video.muted = true;
            video.setAttribute('muted', 'true');
        }

        const canvas = document.querySelector("main canvas");
        let canvasCtx = canvas.getContext('2d');

        function canvasUpdate() {
            canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(canvasUpdate);
        };

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
                canvasUpdate();
                video.load();
                video.play();
            }, false);
        }

        if (i === 0) {
            canvasUpdate();
        }

        video.addEventListener('click', function () {
            canvasUpdate();
        })
    }
}

function playThis(obj) {
    const playBtn = document.querySelector("#play");
    playBtn.textContent = document.title;

    playBtn.addEventListener('click', function () {
        playBtn.className = playBtn.className === "start" ? "stop" : "start";
        if (playBtn.className === "start") {
            playBtn.textContent = "PLAY"
            stop();
        } else if (playBtn.className === "stop") {
            playBtn.textContent = "PAUSE"
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

    window.onresize = tmResize;
    function tmResize() {
        if (typeof pageResize == "function") {
            pageResize();
        }
    }

    function windowScreen() {
        const canvas = document.querySelector("main canvas");
        canvas.width = window.innerHeight / obj.width;
        canvas.height = window.innerHeight / obj.height;
    }

    function pageResize() {
        windowScreen();
    }
    windowScreen();
}

window.addEventListener("load", () => {
    const scrollElement = document.querySelector('main fieldset');
    scrollElement.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
        if (
            (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
            (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
        )
            return;
        e.preventDefault();
        scrollElement.scrollLeft += e.deltaY;
    });
});

'use strict'

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    playThis(index);
    videoAll(index);
}

async function readmeMD(query, url) {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        })
}

function playThis(obj) {
    const video = document.querySelector('#video');
    video.setAttribute('poster', obj.directory + obj.cover);
    const mp4 = document.querySelector('#mp4');
    mp4.src = obj.directory + obj.video[0].src;
    const captions = document.querySelector('#captions');
    captions.src = obj.video[0].track;
    video.load();

    readmeMD("#readme header", "README.md")
}

function videoAll(obj) {
    let n = 0;

    const cover = document.querySelector('#cover');
    const playBtn = document.querySelector('[data-playing]');
    const video = document.querySelector('#video');
    const mp4 = document.querySelector('#mp4');
    const captions = document.querySelector('#captions');

    const chapter = document.querySelector('#readme section');
    const ol = document.createElement('ol');

    chapter.appendChild(ol);
    for (let i = 0; i < obj.video.length; i++) {
        const li = document.createElement('li');
        li.textContent = obj.video[i].title;
        ol.appendChild(li);
        li.addEventListener('click', function () {
            cover.style.opacity = "0";
            playBtn.dataset.playing = 'true';
            playBtn.value = '⏸️ Pause';
            mp4.src = obj.directory + obj.video[i].src;
            captions.src = obj.directory + obj.video[i].track;
            video.muted = false;
            video.load();
            video.play();
            n = i;
        }, false);
    }

    video.addEventListener('ended', () => {
        if (n >= obj.video.length - 1) {
            n = 0;
        } else {
            n++;
        }

        mp4.src = obj.directory + obj.video[n].src;
        captions.src = obj.id + obj.video[n].track;
        video.load();
        video.play();
    }, false);

    playBtn.addEventListener('click', function () {
        if (playBtn.dataset.playing == 'false') {
            cover.style.opacity = "0";
            playBtn.dataset.playing = 'true';
            playBtn.value = '⏸️ Pause';

            video.play();
            video.muted = false;
        } else {
            cover.style.opacity = "0";
            playBtn.dataset.playing = 'false';
            playBtn.value = '▶️ Play';

            video.pause();
            video.muted = true;
        }
    }, false);
}

function changeHidden() {
    const articleAll = document.querySelectorAll('article');
    articleAll.forEach(article => {
        if (article.hidden == false) {
            article.hidden = true;
        } else {
            article.hidden = false;
        }
    })
}
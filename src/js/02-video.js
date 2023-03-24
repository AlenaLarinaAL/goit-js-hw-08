import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const options = {
    width: 640,
    loop: true,
}

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl, options);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const setPlayerTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
}

player.setVolume(0.4);

player.on('timeupdate', throttle(setPlayerTime, 1500));

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
function checkCurrentTime() {
    if (!savedTime) {
        return;
    } else {
        player.setCurrentTime(savedTime);
    }
}

checkCurrentTime();

// localStorage.clear();



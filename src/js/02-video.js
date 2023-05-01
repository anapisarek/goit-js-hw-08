import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const updateTime = throttle(
  timeEl =>
    localStorage.setItem(
      'videoplayer-current-time',
      Math.floor(timeEl.seconds)
    ),
  1000
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.on('timeupdate', updateTime);
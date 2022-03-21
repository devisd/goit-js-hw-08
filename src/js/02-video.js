// импорт throttle из библиотеки lodash (установлен только один NPM пакет, а не вся библиотека)
import throttle from "lodash.throttle";

// инициализация плеера Vimeo
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// колбэк-фукция записи значания времени воспроизведения в локальное хранилище
function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

// запуск плеера с отложенным колбэком в 1 сек.
player.on('timeupdate', throttle(onPlay, 1000));


// сохранение значения из локального хранилища и преобразование этого значения в объект
const savedData = localStorage.getItem('videoplayer-current-time');
const parsetData = JSON.parse(savedData);

// установка воспроизведения видео из распарсеного значения локального хранилища
player.setCurrentTime(parsetData.seconds);


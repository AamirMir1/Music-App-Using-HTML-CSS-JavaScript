let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let audioElement = new Audio('./songs/1.mp3')
let songsItems = Array.from(document.getElementsByClassName('songsItem'))
let gif = document.getElementById('gifLogo')
let songsItemPlay = Array.from(document.getElementsByClassName('songsItemPlay'))
let rightPlayBtn = document.getElementById('rightBtn')
let leftPlayBtn = document.getElementById('leftBtn')
let songNam = document.getElementById('songNam')
let songsIndex = 0;


let songs = [
    { songName: 'lets Do It Again', filePath: './songs/1.mp3', coverPath: './covers/1.jpg' },
    { songName: 'Gimme That', filePath: './songs/2.mp3', coverPath: './covers/2.jpg' },
    { songName: 'Instagram Famous', filePath: './songs/3.mp3', coverPath: './covers/3.jpg' },
    { songName: 'Sanam Re', filePath: './songs/4.mp3', coverPath: './covers/4.jpg' },
    { songName: 'Bombay', filePath: './songs/5.mp3', coverPath: './covers/5.jpg' },
    { songName: 'Dum De De', filePath: './songs/6.mp3', coverPath: './covers/6.jpg' },
    { songName: 'Mai Or Tum', filePath: './songs/7.mp3', coverPath: './covers/7.jpg' },
    { songName: 'Genral', filePath: './songs/8.mp3', coverPath: './covers/8.jpg' },
    { songName: 'Karu Kya Gilaa', filePath: './songs/9.mp3', coverPath: './covers/9.jpg' },
    { songName: 'Bollywood Remix', filePath: './songs/10.mp3', coverPath: './covers/10.jpg' }
]

songsItems.forEach((element, index) => {
    element.getElementsByClassName('songName')[0].innerHTML = songs[index].songName;
    element.getElementsByClassName('coverImg')[0].src = songs[index].coverPath;
});


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.duration <= 0) {
        audioElement.play()
        masterPlay.src = "./images/stopplaybutton.png"
        gif.style.opacity = '1'
    } else {
        audioElement.pause()
        masterPlay.src = "./images/circleplaybutton.png"
        gif.style.opacity = '0'
    }
    makeAllPlays()
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
    if (progress >= 100) {
        songsIndex++
        audioElement.src = `./songs/${songsIndex + 1}.mp3`
        songNam.innerHTML = `Song ${songsIndex + 1}: Artist - Zack Knight`
        audioElement.play()
    }
})

myProgressBar.addEventListener('change', () => {
    let process = myProgressBar.value * audioElement.duration / 100
    audioElement.currentTime = process
})

const makeAllPlays = () => {
    songsItemPlay.forEach((element) => {
        element.classList.remove('stopedBtn')
        element.classList.add('playedBtn')
    })
}
songsItemPlay.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays()
        e.target.classList.remove('playedBtn')
        e.target.classList.add('stopedBtn')
        songsIndex = parseInt(e.target.id)
        if (songsIndex >= 9) {
            songsIndex = 1
        }

        gif.style.opacity = '1'
        masterPlay.src = "./images/stopplaybutton.png"
        // audioElement.play()        
        audioElement.src = `./songs/${songsIndex}.mp3`
        songNam.innerHTML = `Song ${songsIndex + 1}: Artist - Zack Knight`
        audioElement.play()
    })
});

rightPlayBtn.addEventListener('click', () => {
    if (songsIndex >= 9) {
        songsIndex = 0
    } else {
        songsIndex += 1
    }
    audioElement.src = `./songs/${songsIndex + 1}.mp3`
    gif.style.opacity = '1'
    masterPlay.src = "./images/stopplaybutton.png"
    songNam.innerHTML = `Song ${songsIndex + 1}: Artist - Zack Knight`
    makeAllPlays()
    audioElement.play()
})

leftPlayBtn.addEventListener('click', () => {
    if (songsIndex <= 0) {
        songsIndex = 9
    } else {
        songsIndex -= 1
    }
    audioElement.src = `./songs/${songsIndex + 1}.mp3`
    gif.style.opacity = '1'
    masterPlay.src = "./images/stopplaybutton.png"
    songNam.innerHTML = `Song ${songsIndex + 1}: Artist - Zack Knight`
    makeAllPlays()
    audioElement.play()
})
songNam.innerHTML = `Song ${songsIndex + 1}: Artist - Zack Knight`
let songIndex = 0
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById("masterPlay")
let myprogressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let mastersongName = document.getElementById("mastersongPlay")
let songItems = Array.from(document.getElementsByClassName("songItem"))
let songs = [
    { songName: "Meri Jaan", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tera Zikr ", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Jug Jug Jeeve ", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Bande hai hum", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Nadaaniyan", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Hangover", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Jo Tum Mere ho", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Pasoori", filepath: "songs/8.mp3", coverPath: " covers/8.jpg" },
]

songItems.forEach((element, i) => {
     
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//audioElement.play()

// Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity = 0
    }
})

//Listen to Events

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress);

    myprogressBar.value = progress

})

myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressBar.value * audioElement.duration) / 100;
})

 const makeallPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.remove("fa-pause-circle")
            element.classList.add("fa-play-circle")
    })
 }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src = `songs/${songIndex + 1}.mp3`
        audioElement.currentTime = 0
        audioElement.play();
        gif.style.opacity = 1
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        mastersongName.innerText  = songs[songIndex].songName 
    })

})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    mastersongName.innerText  = songs[songIndex].songName 
    audioElement.currentTime = 0
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    mastersongName.innerText  = songs[songIndex].songName 
    audioElement.currentTime = 0
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})
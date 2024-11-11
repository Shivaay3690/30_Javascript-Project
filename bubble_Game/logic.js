var timer = 60;
var score = 0;
var rn;
function makeBubble() {
    var clutter = ''
    for (var i = 1; i <= 133; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector('.pbtm').innerHTML = clutter
    changeColor();
     
}

function changeColor() {
    const hex = '0123456789ABCDEF';
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        bubble.style.backgroundColor = color;
    });
}
function setTimer() {
    var time = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timers').textContent = timer;
        }
        else {
            clearInterval(time)
            document.querySelector('.pbtm').innerHTML = `<h2>Game Over</h2>`
        }
    }, 1000)
}

function getnewHit() {
    rn = Math.floor(Math.random() * 10)
    document.querySelector('#hits').textContent = rn
}

function newScore() {
    score += 10;
    document.querySelector('#myscore').textContent = score
}

document.querySelector('.pbtm').addEventListener('click', function (e) {
    var clicknum = Number(e.target.textContent)
    if (clicknum === rn) {
        newScore();
        makeBubble();
        getnewHit();
        changeColor();
        
        
    }
})
makeBubble()
setTimer()
getnewHit()
changeColor()
// newScore()

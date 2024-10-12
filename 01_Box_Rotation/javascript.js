const box = document.querySelector('#box');
const box1 = document.querySelector('#box1');

const colorMaker = () => {
    let red = Math.floor(Math.random() * 100);
    let green = Math.floor(Math.random() * 100);
    let blue = Math.floor(Math.random() * 100);
    return `rgb(${red},${green},${blue})`;
}

let angle = 0;
const clockwise = () => {
    angle += 180;
    box.style.transform = `rotate(${(angle)}deg)`;
}

let ang = 0;
const antiClockwise = () => {
    ang -= 180;
    box1.style.transform = `rotate(${(ang)}deg)`;
}

setInterval(() => {
    clockwise();
    antiClockwise();    

    box.style.backgroundColor = colorMaker();
    document.querySelector('body').style.backgroundColor = colorMaker();
    box1.style.backgroundColor = colorMaker();
}, 1000);

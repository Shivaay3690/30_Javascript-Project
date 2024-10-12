const box = document.querySelector('.box')
const box1 = document.querySelector('.box1')
const body = document.querySelector('body')

const changeColor = ()=>{
    let red = Math.floor(Math.random()*100)
    let green = Math.floor(Math.random()*100)
    let blue = Math.floor(Math.random()*100)
    let ans = `rgb(${red},${green},${blue})`
    return ans
}
 let angle =0
 const clockWise = ()=>{
    angle += 180
    box.style.transform =   `rotate(${angle}deg)`
 }
 let angle1 =0
 const antiClockWise = ()=>{
    angle1 -= 180
    box1.style.transform =   `rotate(${angle1}deg)`
 }


setInterval(()=>{
    clockWise()
    antiClockWise()
    box.style.backgroundColor = changeColor()
    box1.style.backgroundColor = changeColor()
    body.style.backgroundColor = changeColor()
},1000)
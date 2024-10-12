const box = document.querySelector('.box')
const box2 = document.querySelector('.box2')
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
    box2.style.transform =   `rotate(${angle1}deg)`
 }


setInterval(()=>{
    clockWise()
    antiClockWise()
    box.style.backgroundColor = changeColor()
    box2.style.backgroundColor = changeColor()
    body.style.backgroundColor = changeColor()
},1000)
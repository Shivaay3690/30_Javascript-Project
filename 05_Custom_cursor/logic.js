const div  = document.querySelector('.container')
const crsr = document.querySelector('.cursor')

div.addEventListener("mousemove",function(e){
 crsr.style.left = e.x+"px"    
 crsr.style.top = e.y+"px"    
})
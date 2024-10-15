const image = document.querySelectorAll('.elem')
// const imgIcon = document.querySelector('#elem1 img')

image.forEach(function(val){
   val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity = 1
    
   })
   val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity = 0
   })

   val.addEventListener("mousemove",function(e){
    val.childNodes[3].style.left = e.x+"px"
    val.childNodes[3].style.top = e.y+"px"
   })
    
})











// image1.addEventListener('mousemove',function(e){
//      imgIcon.style.left = e.x+"px"
//      imgIcon.style.top = e.y+"px"
// })
// image1.addEventListener('mouseenter',function(e){
//      imgIcon.style.opacity = 1
// })
// image1.addEventListener('mouseleave',function(e){
//      imgIcon.style.opacity = 1
// })
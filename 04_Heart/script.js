const cardContainer = document.querySelector('.card');
const loveIcon = document.querySelector('i');

cardContainer.addEventListener('dblclick', function(e) {
    loveIcon.style.transform = 'translate(-50%,-50%) scale(1)'
    loveIcon.style.opacity = 0.8

    setTimeout(function(){
        loveIcon.style.opacity =  0
    },1000)

    setTimeout(function(){
        loveIcon.style.transform = 'translate(-50%,-50%) scale(0)'
    },2000)
});
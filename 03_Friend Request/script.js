const btn = document.querySelector('button')
const strng = document.querySelector('#strg')
const cards = document.querySelector('.card')
const image = document.querySelector('img')

let arr = ['#F6C9CA', '#D88982']
cards.style.backgroundColor = `${arr[0]}`

let flg = false;

btn.addEventListener('click', function (e) {
    if (!flg) {
        strng.textContent = 'Friends'
        strng.style.color = 'green'
        btn.textContent = 'Remove'
        btn.style.backgroundColor = 'red'
        btn.style.color = 'white'
        cards.style.backgroundColor = `${arr[1]}`
        image.src = 'https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        flg = true
    } else {
        strng.textContent = 'Strangers'
        strng.style.color = 'red'
        btn.textContent = 'Add Friend'
        btn.style.backgroundColor = 'red'
        btn.style.color = 'white'
        cards.style.backgroundColor = `${arr[0]}`
        image.src = 'https://images.unsplash.com/photo-1527788732326-6134d4738eaa?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        flg = false
        
    }
})

let toastBox = document.querySelector('.toastBox');
let successMsg = "Successfully submitted"
let errorMsg = "Please fix the error"
let invalidMsg = " Invalid input , Check again"


function showToast(msg){
    let  toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg ;
    toastBox.appendChild(toast);

}
// header
let prevScroll = window.pageYOffset

window.onscroll = () =>{
    const currentScrollPos = window.pageYOffset

    if(prevScroll > currentScrollPos){
        document.getElementById('fixed_header').classList.remove('closed')
    } else{
        document.getElementById('fixed_header').classList.add('closed')
    }

    prevScroll = currentScrollPos
}

 // banner
document.addEventListener(window.onscroll, () =>{
    document.getElementByClassName('img_beats').classList.add('start-animation')
})

//joining list
const inputElement = document.getElementById('email')
const errorMess =  document.getElementById('error_mess')

inputElement.addEventListener('keyup', (e) =>{
    if(e.key === 'Enter' && !e.target.value.includes('@')){
        inputElement.classList.add('email-error')
        errorMess.textContent = "Invalid email"
    } else{
        inputElement.classList.remove('email-error')
        errorMess.textContent = ''
    }
})
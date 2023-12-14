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
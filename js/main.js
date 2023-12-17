// header
let prevScroll = window.pageYOffset

window.onscroll = () =>{
    const currentScrollPos = window.pageYOffset

    if(prevScroll > currentScrollPos){
        document.getElementById('fixed_header').classList.remove('closed')
        document.getElementById('logo').classList.remove('minimize')
    } else{
        document.getElementById('fixed_header').classList.add('closed')
        document.getElementById('logo').classList.add('minimize')
    }

    prevScroll = currentScrollPos
}

 // banner
const animatedShaded1 = document.getElementById('shaded1')
const animatedShaded2 = document.getElementById('shaded2')

const animatedBeats1 = document.getElementById('beats1')
const animatedBeats2 = document.getElementById('beats2')

const animatedImgBeats = document.getElementById('img_beats')

const observer = new IntersectionObserver( e =>{
    e.forEach(e =>{

        if(e.isIntersecting){

            animatedShaded1.style.animation = 'shadeAnimation 1.5s forwards'
            animatedShaded2.style.animation = 'shadeAnimation 1.5s forwards'

            animatedBeats1.style.animation = 'fadeAnimation 1.7s forwards'
            animatedBeats2.style.animation = 'fadeAnimation 1.7s forwards'

            animatedImgBeats.style.animation ='imgFadeAnimation 3s forwards'

        } else{

            animatedShaded1.style.animation = ''
            animatedShaded1.style.opacity = 1
            animatedShaded2.style.animation = ''
            animatedShaded2.style.opacity = 1

            animatedBeats1.style.animation = ''
            animatedBeats1.style.opacity = 1
            animatedBeats2.style.animation = ''
            animatedBeats2.style.opacity = 1

            animatedImgBeats.style.animation =''
            animatedImgBeats.style.opacity = 1
            
        }
    })
}, { threshold: 0.5})

observer.observe(animatedShaded1)
observer.observe(animatedShaded2)
observer.observe(animatedBeats1)
observer.observe(animatedBeats2)
observer.observe(animatedImgBeats)

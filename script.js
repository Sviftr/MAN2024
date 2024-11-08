
new Swiper('.slider' , {
    speed: 1800,
    mousewheel: true,
    spaceBetween: 18
})


let btnAvtors = document.querySelector('.btn__avtors')
let modalAvtor = document.querySelector('.avtors__info')
btnAvtors.addEventListener('click' , function(){
    return modalAvtor.classList.add('new')
})
let btnCloseAvtor = document.querySelector('.avtor__closeBtn')
btnCloseAvtor.addEventListener('click' , function(){
    return modalAvtor.classList.remove('new')
})


let btnProject = document.querySelector('.btn__header')
let modalProject = document.querySelector('.project__info')
btnProject.addEventListener('click' , function(){
    return modalProject.classList.add('open')
})
let btnCloseProject = document.querySelector('.project__closeBtn')
btnCloseProject.addEventListener('click' , function(){
    return modalProject.classList.remove('open')
})
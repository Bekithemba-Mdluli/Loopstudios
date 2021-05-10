const btnHamburger = document.querySelector('.header__image')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const items = document.querySelector('.header__items-mobile')


btnHamburger.addEventListener('click', () => {
    console.log('btn clicked')
    if (header.classList.contains('open')) {  //Closes
        header.classList.remove('open')
        btnHamburger.src = "images/icon-close.svg"

        // overlay.classList.toggle('overlay')
        overlay.style.display = "block"
        // items.style.display = "block"


    } else {
        header.classList.add('open')
        btnHamburger.src = "images/icon-hamburger.svg"
        overlay.style.display = "none"
        // items.style.display = "none"

    }
})




// function fnc() {
//     if (window.screenY >= 500) {
//         sectionSwiper.classlist.add('animate__fadeInUp')
//     }
// }


const mainsectionOnce = document.querySelector('.main-galery-item-one');
const mainsectionTwice = document.querySelector('.main-galery-item-three');
const sectionSwiper = document.querySelector('.swiper-galery-cont');
const guesttitlesection = document.querySelector('.top-guest-title-box');
const guestgalerysec = document.querySelector('.top-guest-galery-box');
const formcont = document.querySelector('.form-container');
const newstitle = document.querySelector('.news-title-box');
const newsbox = document.querySelector('.news-galery-box');


window.addEventListener('scroll', (() => {
    // console.log(window.scrollY);

    if (window.scrollY >= 100) {
        mainsectionTwice.classList.add('animate__fadeInRight');
    }
    if (window.scrollY >= 100) {
        mainsectionOnce.classList.add('animate__fadeInLeft');
    }
    if (window.scrollY >= 1260) {
        sectionSwiper.classList.add('animate__fadeInUp');
    }
    if (window.scrollY >= 1750) {
        guesttitlesection.classList.add('animate__fadeInRight');
    }

    if (window.scrollY >= 1900) {
        guestgalerysec.classList.add('animate__fadeInUp');
    }
    if (window.scrollY >= 2250) {
        formcont.classList.add('animate__fadeInLeft');
    }
    if (window.scrollY >= 3572) {
        newstitle.classList.add('animate__fadeInRight');
    }

    if (window.scrollY >= 3700) {
        newsbox.classList.add('animate__fadeInUp');
    }
}))
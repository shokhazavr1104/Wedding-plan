

// function fnc() {
//     if (window.screenY >= 500) {
//         sectionSwiper.classlist.add('animate__fadeInUp')
//     }
// }





// window.addEventListener('scroll', (() => {
//     // console.log(window.scrollY);

//     if (window.scrollY >= 100) {
//         mainsectionTwice.classList.add('animate__fadeInRight');
//     }
//     if (window.scrollY >= 100) {
//         mainsectionOnce.classList.add('animate__fadeInLeft');
//     }
//     if (window.scrollY >= 1260) {
//         sectionSwiper.classList.add('animate__fadeInUp');
//     }
//     if (window.scrollY >= 1750) {
//         guesttitlesection.classList.add('animate__fadeInRight');
//     }

//     if (window.scrollY >= 1900) {
//         guestgalerysec.classList.add('animate__fadeInUp');
//     }
//     if (window.scrollY >= 2250) {
//         formcont.classList.add('animate__fadeInLeft');
//     }
//     if (window.scrollY >= 3572) {
//         newstitle.classList.add('animate__fadeInRight');
//     }

//     if (window.scrollY >= 3700) {
//         newsbox.classList.add('animate__fadeInUp');
//     }
// }))

// // import { Swiper } from './swiper.min.js';


// const callback = (event) => {
//     console.log({ event })
// }



const header = document.getElementById('myHeader')



const observer = new IntersectionObserver((entries, observer) => {
    console.log({ entries })

    entries.map((entry) => {
        if (entry.isIntersecting) {
            header.classList.add("scrolled")
        } else
            header.classList.remove("scrolled")
    })
}, {
    root: null,
    threshold: [0.9]
});




observer.observe(document.querySelector('.mySwiper'))

const mainTitle = document.querySelector('.main-title');
const mainImg = document.querySelector('.main-image-item1');
const mainsectionOnce = document.querySelector('.main-galery-item-one');
const mainsectionTwice = document.querySelector('.main-galery-item-three');
const sectionSwiper = document.querySelector('.swiper-galery-cont');
const guesttitlesection = document.querySelector('.top-guest-title-box');
const guestgalerysec = document.querySelector('.top-guest-galery-box');
const formcont = document.querySelector('.form-container');
const newstitle = document.querySelector('.news-title-box');
const newsbox = document.querySelector('.news-galery-box');


const observeAnimation = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mainsectionOnce.classList.add('animate__fadeInLeft');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimation.observe(mainsectionOnce);

const observeAnimationTwo = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mainsectionTwice.classList.add('animate__fadeInRight');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimationTwo.observe(mainsectionTwice);

const observeAnimationThree = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sectionSwiper.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimationThree.observe(sectionSwiper);

const observeAnimationFour = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            guesttitlesection.classList.add('animate__fadeInRight');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimationFour.observe(guesttitlesection);

const observeAnimationFive = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            guestgalerysec.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimationFive.observe(guestgalerysec);

const observeAnimationSix = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            formcont.classList.add('animate__fadeInLeft');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimationSix.observe(formcont);

const observeAnimationSeven = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            newstitle.classList.add('animate__fadeInRight');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimationSeven.observe(newstitle);

const observeAnimationEight = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            newsbox.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimationEight.observe(newsbox);

const observeAnimationNine = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mainTitle.classList.add('animate__fadeInLeft');
            observer.unobserve(entry.target);
        }

    }
    );
})
observeAnimationNine.observe(mainTitle);

// const observeAnimationTen = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             mainImg.classList.add('animate__fadeIn');
//             observer.unobserve(entry.target);
//         }

//     }
//     );
// })
// observeAnimationTen.observe(mainImg);


//   if (entry.isIntersecting) {

//             mainsectionTwice.classList.add('animate__fadeInRight');
//             observer.unobserve(entry.target);
//         }
//         if (entry.isIntersecting) {

//             sectionSwiper.classList.add('animate__fadeInUp');
//             observer.unobserve(entry.target);
//         }
//         if (entry.isIntersecting) {

//             guesttitlesection.classList.add('animate__fadeInRight');
//             observer.unobserve(entry.target);
//         }
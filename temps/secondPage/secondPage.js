import { Swiper } from './swiper.min.js';


const callback = (event) => {
    console.log({ event })
}



// const header = document.getElementById('myHeader')



// const observer = new IntersectionObserver((entries, observer) => {
//     console.log({ entries })

//     entries.map((entry) => {
//         if (entry.isIntersecting) {
//             header.classList.add("scrolled")
//         } else
//             header.classList.remove("scrolled")
//     })
// }, {
//     root: null,
//     threshold: [0.9]
// });

// observer.observe(document.querySelector('.mySwiper'))

const header = document.getElementById('myHeader');
let lastScrollY = window.scrollY;

function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll < 200) {

        header.classList.remove('fixed', 'hidden');
    } else if (currentScroll >= 300) {

        header.classList.add('fixed');
    }

    if (currentScroll > lastScrollY && currentScroll > 500) {

        header.classList.remove('hidden');
    } else if (currentScroll < lastScrollY && currentScroll > 500) {

        header.classList.add('hidden');
    }

    lastScrollY = currentScroll;
}

window.addEventListener('scroll', handleScroll);



// window.addEventListener('scroll', () => {
//     const header = document.getElementById('myHeader');

//     IntersectionObserver

//     if (window.scrollY > 50) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});





// FIRST SECTION TIMER


const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 215);
countDownDate.setHours(countDownDate.getHours() + 2);
countDownDate.setMinutes(countDownDate.getMinutes() + 1);
countDownDate.setSeconds(countDownDate.getSeconds() + 35);


const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}, 1000);
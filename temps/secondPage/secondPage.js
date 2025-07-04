import { Swiper } from './swiper.min.js';


const callback = (event) => {
    console.log({ event })
}



// HEADER SECTION
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



const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropdown-btn');

dropdownBtn.addEventListener('click', function () {
    dropdown.classList.toggle('active');
});

// Закрытие при клике вне меню
document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});




// SWIPER SECTION
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







// Modal Flex
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openModal(element) {
    const img = element.querySelector("img");
    modalImg.src = img.src;
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
    document.addEventListener("keydown", handleKeyPress);
}

function closeModal() {
    modal.classList.remove("active");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
    document.removeEventListener("keydown", handleKeyPress);
}

function handleKeyPress(e) {
    if (e.key === "Escape") closeModal();
}

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

window.openModal = openModal;
window.closeModal = closeModal;





// BURGER MENU

const navBarIcon = document.querySelector('.navBar_icon');
const navBar = document.querySelector('.nav__bar');

navBarIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
});


const closeBtn = document.querySelector('.close__navBar');

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('active');
});



// DropDown JS

const dropDown = document.querySelector('.drop__container');
const dropTitle = document.querySelector('.drop__title');

(function () {
    let userDivice =
        navigator.userAgentData?.mobile ||
        /Android|iPhone/i.test(navigator.userAgent);

    let dropTitleTextContent = dropDown.children[0].textContent.trim();
    let dropTitleHeight = dropDown.children[0].clientHeight + 'px';
    let dropOffsetHeigh = dropDown.offsetHeight + 'px';
    dropDown.style.setProperty('height', dropTitleHeight);
    dropDown.addEventListener('click', dropParentClicled);

    dropDown.addEventListener('mouseleave', () => {
        dropDown.style.setProperty('height', dropTitleHeight);
    });

    function dropParentClicled() {
        dropDown.style.height = dropOffsetHeigh;
    }

    if (userDivice) {
        dropDown.addEventListener('touchend', mobileChildTouched);
    } else {
        dropDown.addEventListener('click', desctopChildClick);
    }

    function desctopChildClick(event) {
        let childText = event.target.textContent;
        dropTitle.textContent = childText;
    }

    function mobileChildTouched(event) {
        let childText = event.target.textContent.trim();
        dropTitle.textContent = childText;
        if (dropTitleTextContent != childText) {
            dropDown.style.setProperty('height', dropTitleHeight);
        }
        console.log('dssdas')
    }
})();




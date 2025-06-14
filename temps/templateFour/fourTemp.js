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

const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const bookZone = document.querySelector('.book-scroll-zone');

window.addEventListener('scroll', () => {
    const zoneTop = bookZone.offsetTop;
    const zoneHeight = bookZone.offsetHeight;
    const scrollY = window.scrollY;
    const viewportCenter = scrollY + window.innerHeight / 2;
    const progress = (viewportCenter - zoneTop) / zoneHeight;

    if (progress >= 0.35) {
        page2.classList.add('visible');
        page1.classList.remove('always-visible');
    } else {
        page2.classList.remove('visible');
        page1.classList.add('always-visible');
    }

    if (progress >= 0.6) {
        page3.classList.add('visible');
        page2.classList.remove('visible');
    } else {
        page3.classList.remove('visible');
    }
});

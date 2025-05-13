// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 5,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function (swiper) {
            var card = document.querySelectorAll('.swiper-slide');
            card.forEach(item => {
                item.classList.toggle('swiper-slide-active');
            });
            // console.log(card)
        }
    },
});
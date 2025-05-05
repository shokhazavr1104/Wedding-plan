// const scrollEvent = document.querySelector('');


// window.addEventListener('scroll', function () {
//     const header = document.getElementById('myHeader');
//     const scrollPosition = window.scrollY;
//     console.log(scrollPosition);
//     const triggerHeight = window.innerHeight;

//     if (scrollPosition > triggerHeight) {
//         header.classList.add('myHeader');
//     } else {
//         header.classList.remove('myHeader');
//     }
// });


const firstSection = document.querySelector('.first-section');

const divFrSecBlock = document.createElement('div');
divFrSecBlock.innerHTML= "Hello";
divFrSecBlock.classList.add('fr-sec-block');
firstSection.append(divFrSecBlock);

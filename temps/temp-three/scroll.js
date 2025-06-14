const mainTitle = document.querySelector('.main__first__content__title__box');
const timer = document.querySelector('.timer')
const mainImgleftDec = document.querySelector('.main__second__cont__left-img')
const mainImgRighttDec = document.querySelector('.main__second__cont__right-img');
const secondMainOnceItem = document.querySelector('.second-main__content__once__item');
const secondMainTwiceItem = document.querySelector('.second-main__content__third__item');
const secondMainMainItem = document.querySelector('.second-main__content__box')
const storyTitle = document.querySelector('.story__title__content__box');
const newsTitle = document.querySelector('.news__title__contents');
const newsContents = document.querySelector('.news__content__box');


const mainTitleAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mainTitle.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }

    }
    );
})
mainTitleAnimate.observe(mainTitle);
const mainTimerAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            timer.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }

    }
    );
})
mainTimerAnimate.observe(timer);
const mainLeftDecAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mainImgleftDec.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
        }

    }
    );
})
mainLeftDecAnimate.observe(mainImgleftDec);
const mainRightDecAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mainImgRighttDec.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
        }

    }
    );
})
mainRightDecAnimate.observe(mainImgRighttDec);

const secondMainOnceItemAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            secondMainOnceItem.classList.add('animate__fadeInLeft');
            observer.unobserve(entry.target);
        }

    }
    );
})
secondMainOnceItemAnimate.observe(secondMainOnceItem);

const secondMainTwiceItemAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            secondMainTwiceItem.classList.add('animate__fadeInRight');
            observer.unobserve(entry.target);
        }

    }
    );
})
secondMainTwiceItemAnimate.observe(secondMainOnceItem);

const secondMainMainItemAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            secondMainMainItem.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
        }

    }
    );
})
secondMainMainItemAnimate.observe(secondMainMainItem);

const storyTitleAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            storyTitle.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }

    }
    );
})
storyTitleAnimate.observe(storyTitle);

const newsTitleAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            newsTitle.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }

    }
    );
})
newsTitleAnimate.observe(newsTitle);

const newsContentAnimate = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            newsContents.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }

    }
    );
})
newsContentAnimate.observe(newsContents);

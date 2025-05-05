const arvtitleBox = document.querySelector('.arv-second-wrapper-title-box');
const regiterButtonsCont = document.querySelector('.register-buttons');
const registerbtn = document.querySelector('.register-button');

const registerBox = document.querySelector('.form-register');
const registerbtns = document.querySelector('.register-buttons')
function clickToRegister(e) {
    registerbtns.classList.add('register-buttons-disabled');
    arvtitleBox.classList.add('arv-title-box-disabled');
    registerBox.classList.add('registerbtn-active');
}

const formloginBox = document.querySelector('.form-login');

function clickToLogin(e) {
    registerbtns.classList.add('register-buttons-disabled');
    arvtitleBox.classList.add('arv-title-box-disabled')
    formloginBox.classList.add('loginbtn-active');
}
const formbackbtn = document.querySelector('.form-back-btn');

function formBackBtn(e) {
    registerbtns.classList.remove('register-buttons-disabled');
    arvtitleBox.classList.remove('arv-title-box-disabled');
    registerBox.classList.remove('registerbtn-active');
    formloginBox.classList.remove('loginbtn-active');
}
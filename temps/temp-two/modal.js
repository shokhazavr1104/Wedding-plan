const centerModel = document.querySelector('.center__model');
const centerModelContent = document.querySelector('.center__modal-content');


function open(e) {
    centerModel.classList.add('center__model-active')
    centerModelContent.classList.add('center__modal-content-active')
}
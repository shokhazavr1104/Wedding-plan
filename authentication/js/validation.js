// function validate(form) {

//     function removeError(input) {
//         const parent = input.parentNode;

//         if (parent.classList.contains('error')) {
//             parent.querySelector('.error-paragraph').remove();
//             parent.classList.remove('error');
//         }
//     }

//     function createError(input, text) {
//         const parent = input.parentNode;
//         const errorLabel = document.createElement('p');
//         errorLabel.classList.add('error-paragraph');
//         errorLabel.textContent = text;

//         parent.classList.add('error');
//         parent.append(errorLabel)
//     }


//     let result = true;
//     const allInputs = form.querySelectorAll('input');

//     for (const input of allInputs) {
//         removeError(input);




//         if (input.dataset.minLength) {

//             if (input.value.length < input.dataset.minLength) {
//                 removeError(input)

//                 createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
//                 result = false
//             }
//         }

//         if (input.value == "") {
//             console.log("ошибка поля")
//             createError(input, 'Заполните поле')
//             result = false;
//         }


//     }



//     return result
// }

// document.querySelector('.form-register').addEventListener('submit', function (event) {
//     event.preventDefault();
//     if (validate(this) == true) {
//         console.log('accept')
//     }
// })
function validate(form) {
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-paragraph')?.remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('p');
        errorLabel.classList.add('error-paragraph');
        errorLabel.textContent = text;

        parent.classList.add('error');
        parent.append(errorLabel);
    }

    let result = true;
    const allInputs = form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');

    for (const input of allInputs) {
        removeError(input);

        if (input.value === "") {
            createError(input, 'Заполните поле');
            result = false;
            continue;
        }

        if (input.dataset.minLength && input.value.length < input.dataset.minLength) {
            createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`);
            result = false;
        }
    }

    return result;
}







document.querySelector('.form-register').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = {
        fullname: form.fullname.value,
        email: form.email.value,
        password: form.password.value
    };

    fetch('https://100m.uz/api/register', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })





    // if (validate(this)) {
    //     alert('successfully')
    // }
});

// For Login


document.querySelector('.form-login').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validate(this)) {
        alert('successfully')
    }
})
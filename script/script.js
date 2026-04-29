const inputEmail = document.getElementById('email');
const inputPassword1 = document.getElementById('password1');
const inputPassword2 = document.getElementById('password2');
const inputName = document.getElementById('name');

const errorEmail = document.querySelector(".errorEmail");
const errorPassword1 = document.querySelector(".errorPassword");
const errorPassword2 = document.querySelector(".errorPassword2");

function validateForm() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const emailValue = inputEmail.value;
    const passwordValue1 = inputPassword1.value;
    const passwordValue2 = inputPassword2 ? inputPassword2.value : '';
    const nameValue = inputName ? inputName.value : '';

    const formValue = {
        email: emailValue,
        password: passwordValue1,
    };
    
    if (emailRegex.test(formValue.email)) {
        errorEmail.style.display = "none";
    } else {
        errorEmail.style.display = "block";
        return;
    }

    if (passwordValue1.length >= 6) {
        errorPassword1.style.display = "none";
    } else {
        errorPassword1.style.display = "block";
        return;
    }

    if (inputPassword2) {
        if (passwordValue1 == passwordValue2) {
            errorPassword2.style.display = "none";
        } else {
            errorPassword2.style.display = "block";
            return;
        }
    }

    if (nameValue) {
        formValue.name = nameValue;
    }
    
    return formValue;
}

if (inputEmail) {
    inputEmail.addEventListener('input', () => {
        errorEmail.style.display = "none";
    })
}

if (inputPassword1) {
    inputPassword1.addEventListener('input', () => {
        errorPassword1.style.display = "none";
    })
}

if (inputPassword2) {
    inputPassword2.addEventListener('input', () => {
        errorPassword2.style.display = "none";
    })
}
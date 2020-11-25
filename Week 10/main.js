// Get the values
let nameIn = document.getElementById('inputName');
let email = document.getElementById('inputEmail');
let password = document.getElementById('inputPass');
let sendButton = document.getElementById('sendB');
// Get error element
let nameError = document.getElementById('nameErr');
let passError = document.getElementById('passErr');

//pointer by default
sendButton.classList.add('pointerYes');

/*************** */
//name validation
/*************** */
function validateName(nameValue) {
    const str = /\d+/;
    if (str.test(nameValue)) {
        nameIn.classList.remove('valid');
        nameIn.classList.add('invalid');
        nameError.innerHTML = 'Only letters, please';
        return false;

    } else if (nameValue == '') {
        nameIn.classList.remove('valid');
        return true;
    } else {
        nameIn.classList.remove('invalid');
        nameIn.classList.add('valid');
        nameError.innerHTML = '';
        return true;
    }
}

nameIn.addEventListener('keyup', (e) => {
    if (!validateName(e.target.value)) {
        sendButton.classList.remove('pointerYes');
        sendButton.classList.add('pointerNo');
    } else {
        validateName(e.target.value);
        sendButton.classList.remove('pointerNo');
        sendButton.classList.add('pointerYes');
    }
});

/*************** */
//email validation
/*************** */
function validatEmail(emailValue) {
    const str = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (str.test(emailValue)) {
        email.classList.remove('invalid');
        email.classList.add('valid');
        return true;

    } else if (emailValue == '') {
        email.classList.remove('invalid');
        return true;
    } else {
        email.classList.remove('valid');
        email.classList.add('invalid');
        return false;
    }
}

email.addEventListener('keyup', (e) => {
    console.dir(e.target);
    if (!validatEmail(e.target.value)) {
        sendButton.classList.remove('pointerYes');
        sendButton.classList.add('pointerNo');
    } else {
        validatEmail(e.target.value);
        sendButton.classList.remove('pointerNo');
        sendButton.classList.add('pointerYes');
    }
});

/*************** */
/*password validation
/*************** */
function validatePass(passValue) {
    if (passValue.length < 4 && passValue.length > 0) {
        password.classList.remove('valid');
        password.classList.add('invalid');
        passError.innerHTML = 'between 4 and 20 characters, please';
        return false;
    } else if (passValue == "") {
        password.classList.remove('invalid');
        passError.innerHTML = '';
        return false;
    } else {
        password.classList.remove('invalid');
        password.classList.add('valid');
        passError.innerHTML = '';
        return true;
    }
}

password.addEventListener('keyup', (e) => {
    console.dir(e.target);
    if (!validatePass(e.target.value)) {
        sendButton.classList.remove('pointerYes');
        sendButton.classList.add('pointerNo');
    } else {
        validatePass(e.target.value);
        sendButton.classList.remove('pointerNo');
        sendButton.classList.add('pointerYes');
    }
})

//submit form
sendButton.addEventListener('mouseup', () => {
    if (!validateName(nameIn.value) || !validatEmail(email.value)) {
        sendButton.classList.remove('pointerYes');
        sendButton.classList.add('pointerNo');
    }
});
sendButton.addEventListener('click', (e) => {
    if (!validateName(nameIn.value) || !validatEmail(email.value)) {
        e.preventDefault();
    }
});
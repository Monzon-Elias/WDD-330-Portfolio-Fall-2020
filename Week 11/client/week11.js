import {makeRequest} from './authHelpers.js';
import Auth from './auth.js';

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });

    const newAuth = new Auth();
    






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++FORM VALIDATION+++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Get the values
let email = document.getElementById('username');
let password = document.getElementById('password');
let sendButton = document.getElementById('sendB');
//error message
let passError = document.getElementById('passErr');
//pointer by default
sendButton.classList.add('pointerYes');

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
    if (!validatEmail(email.value)) {
        sendButton.classList.remove('pointerYes');
        sendButton.classList.add('pointerNo');
    }
});

sendButton.addEventListener('click', (e) => {
    if (!validatEmail(email.value)) {
        //e.preventDefault();
        newAuth.login(error);
    }
});
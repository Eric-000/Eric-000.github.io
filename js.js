function passEquality() {
    if(password_one.value.length > 0 &&
       password_two.value.length > 0) {
        if(password_one.value === password_two.value) {
            password_one.setCustomValidity('');
            password_two.setCustomValidity('');
            error_div.innerHTML = '';
            return true;
        } else {
            password_one.setCustomValidity('brrr');
            password_two.setCustomValidity('brrr');
            error_div.innerHTML = 'Please fix password errors!';
            return false;
        }
    }
}
function revealPasswords() {
    if(password_one.getAttribute('type') === 'text') { /// what is this if statement here?
        password_one.setAttribute('type', 'password');
        password_two.setAttribute('type', 'password');
        eye.setAttribute('class', 'fas fa-eye-slash');
    } else {
        password_one.setAttribute('type', 'text');
        password_two.setAttribute('type', 'text');
        eye.setAttribute('class', 'fas fa-eye');
    }
}
function validateForm() {
    var errorStr = '';
    if(passEquality() === false) {
        errorStr += '<p>passwords do not match!</p>';
    }
    if (firstname.checkValidity() === false) {
        firstname.setCustomValidity('error');
        errorStr += '<p>Please fix first name!</p>';
    } else {
        firstname.setCustomValidity('');
    }
    if (lastname.checkValidity() === false) {
        firstname.setCustomValidity('error');
        errorStr += '<p>Please fix last name!</p>';
    } else {
        firstname.setCustomValidity('');
    }
    if (email.checkValidity() === false) {
        email.setCustomValidity('error');
        errorStr += '<p>Please fix email!</p>';
    } else {
        email.setCustomValidity('');
    }
    error_div.innerHTML = errorStr;
}
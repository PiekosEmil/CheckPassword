function checkPass() {
    var password = document.getElementById('exampleInputPassword1');
    var confirm = document.getElementById('exampleInputPassword2');
    var message1 = document.getElementById('messageTooShortPassword');
    var message2 = document.getElementById('messageNoSmallLetters');
    var message3 = document.getElementById('messageNoCapitalLetters');
    var message4 = document.getElementById('messageNoSpecialSigns');
    var message5 = document.getElementById('messageDifferentPasswords');

    if (password.value.length < 8) {
        message1.innerHTML = "Za krótkie hasło! Min. 8 znaków!";
    } else {
        message1.innerHTML = "";
    }

    if (!(/[a-z]/.test(password.value))) {
        message2.innerHTML = "Min. jedna mała litera";
    } else {
        message2.innerHTML = "";
    }

    if (!(/[A-Z]/.test(password.value))) {
        message3.innerHTML = "Min. jedna duża litera";
    } else {
        message3.innerHTML = "";
    }

    if (!(/[$&+,:;=?@#|'<>.^*()%!-]/.test(password.value))) {
        message4.innerHTML = "Min. jeden znak specjalny";
    }else {
        message4.innerHTML = "";
    }

    if (password.value !== confirm.value) {
        message5.innerHTML = "Hasła różnią się od siebie!";
    } else {
        message5.innerHTML = "";
    }

    if(password.value === "") {
        message1.innerHTML = "";
        message2.innerHTML = "";
        message3.innerHTML = "";
        message4.innerHTML = "";
    }
}
const copyBtn = document.querySelector('.copy-btn')
const output = document.getElementById('password')
const genBtn = document.getElementById('genpass')

const smallAlpha = 'abcdefghijklmnopqrstuvwxyz';
const capitalAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharac = "!#$%&()*+-/:;<=>?@[]_{|}~"
const alphaNumeric = smallAlpha + capitalAlpha + numbers + specialCharac;

const showPass = (password) => {
    output.value = password;
}

const genpass = () => {
    let passLength = 12;
    let password = '';
    while (passLength) {
        password += alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)];
        passLength--;
    }
    showPass(password);
}

const copyPass = () => {
    output.disabled = false;
    output.select();
    document.execCommand("copy");
    output.disabled = true;
}

genBtn.addEventListener('click', genpass);
copyBtn.addEventListener('click', copyPass);
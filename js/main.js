'use strict';

// Get Values
const passValue = document.querySelector('.password-box input');
const copeBtn = document.querySelector('.password-box #copy-btn');
const passIndicator = document.querySelector('.indicator-box .indicator');
const passLenght = document.querySelector('.pass-lenght-box input');
const passLenghtText = document.querySelector('.pass-lenght-box .pass-lenght-value');
const optins = document.querySelectorAll('.settings div input');
const generateBtn = document.querySelector('.genarate-btn');


const values = {
    uppercase(){
        let uppAlp = '';
        for(let i = 'A'.codePointAt(0); i <= 'Z'.codePointAt(0); i++){
            uppAlp += String.fromCodePoint(+i);
        }
        return uppAlp;
    },

    lowercase(){
        let lowAlp = '';
        for(let i = 'a'.codePointAt(0); i <= 'z'.codePointAt(0); i++){
            lowAlp += String.fromCodePoint(+i);
        }
        return lowAlp;
    },

    number(){ return '0123456789'},
    symbols(){ return '!$%^&*-'},
}


function passwordGenaration() {
    let strongPassworld = '';
    let randomPassword = '';

    let lenght = passLenght.value;

    optins.forEach(optins => {
        if(optins.checked){
            strongPassworld += values[optins.id]();
        }
    });

    for(let i = 0; i < lenght; i++) {
        randomPassword += strongPassworld[Math.floor( Math.random() * strongPassworld.length )];
    }

    console.log(randomPassword);
    passValue.value = randomPassword;
}

copeBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passValue.value);
})


function updateIndicator() {
    passIndicator.id = (passLenght.value <= 8) ? 'weak' :
        (passLenght.value <= 16) ? 'medium' : 'strong';
}


passLenght.addEventListener('input', () => {
    passwordGenaration();
    updateIndicator();
    passLenghtText.textContent = passLenght.value;
})

generateBtn.addEventListener('click', passwordGenaration)

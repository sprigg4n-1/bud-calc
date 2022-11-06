const mainCalcBtn = document.querySelector('#calc-main');
const homeBody = document.querySelector('.home');
const backBtnMainCalc = document.querySelector('#backMainCalc');
const mainCalc = document.querySelector('.calc-main');

const homeBtn = document.querySelectorAll('#home');
const mainCalcNav = document.querySelector('#mainCalcNav')

const inputMainCalc = document.querySelector('.calc-main__input');
const calcMainTitle = document.querySelector('.calc-main__title');
const childredMainTitle = calcMainTitle.querySelectorAll('span');
const calcMainNums = document.querySelectorAll('.calc-main__item-num');

// global action

function mooveLeft() {
    homeBody.classList.add('moove-left');
    mainCalc.classList.remove('moove-right');
};

function mooveLeftBack() {
    homeBody.classList.remove('moove-left');
    mainCalc.classList.add('moove-right');
};
mainCalcBtn.addEventListener('click', () => {
    mooveLeft();
});
backBtnMainCalc.addEventListener('click', () => {
    mooveLeftBack();
});
homeBtn.forEach(item => {
    item.addEventListener('click', () => {
        mooveLeftBack();
    })
});
mainCalcNav.addEventListener('click', () => {
    mooveLeft();
});

// main calc function
inputMainCalc.addEventListener('input', () => {
    calcMainNums.forEach((item, i) => {
        let inputValue = +inputMainCalc.value;
        let formula = childredMainTitle[i].innerHTML * inputValue / 100;
        item.innerHTML = formula.toFixed(2);
    })
});
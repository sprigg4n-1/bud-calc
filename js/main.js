const mainCalcBtn = document.querySelector('#calc-main');
const homeBody = document.querySelector('.home');
const backBtnCalc = document.querySelectorAll('#backCalc');
const mainCalc = document.querySelector('.calc-main');
const createCalcBtn = document.querySelector('#calc-create');
const createBody = document.querySelector('.create');

const homeBtn = document.querySelectorAll('#home');
const mainCalcNav = document.querySelector('#mainCalcNav');
const createCalcNav = document.querySelector('#createCalcNav');

const inputMainCalc = document.querySelector('.calc-main__input');
const calcMainTitle = document.querySelector('.calc-main__title');
const childredMainTitle = calcMainTitle.querySelectorAll('span');
const calcMainNums = document.querySelectorAll('.calc-main__item-num');

// global action
mainCalcBtn.addEventListener('click', () => {
    homeBody.classList.add('moove-left');
    mainCalc.classList.remove('moove-right');
});
backBtnCalc.forEach(item => {
    item.addEventListener('click', () => {
        homeBody.classList.remove('moove-left');
        homeBody.classList.remove('moove-right');
        createBody.classList.add('moove-left');
        mainCalc.classList.add('moove-right');
    });
})
homeBtn.forEach(item => {
    item.addEventListener('click', () => {
        mainCalc.classList.add('moove-right');
        createBody.classList.add('moove-left');
        homeBody.classList.remove('moove-left');
        homeBody.classList.remove('moove-right');
    })
});
mainCalcNav.addEventListener('click', () => {
    homeBody.classList.add('moove-left');
    mainCalc.classList.remove('moove-right');
    createBody.classList.add('moove-left');
});
createCalcBtn.addEventListener('click', () => {
    createBody.classList.remove('moove-left');
    homeBody.classList.add('moove-right');
});
createCalcNav.addEventListener('click', () => {
    createBody.classList.remove('moove-left');
    homeBody.classList.add('moove-right');
    mainCalc.classList.add('moove-right');
});

// main calc function
inputMainCalc.addEventListener('input', () => {
    calcMainNums.forEach((item, i) => {
        let inputValue = +inputMainCalc.value;
        let formula = childredMainTitle[i].innerHTML * inputValue / 100;
        item.innerHTML = formula.toFixed(2);
    })
});
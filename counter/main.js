let count = 0;
let displayNumbers = document.getElementById('display-numbers');
let decreaseBtn = document.getElementById('decrease-btn');
let increaseBtn = document.getElementById('increase-btn');
let resetBtn = document.getElementById('reset-btn')

increaseBtn.addEventListener('click', () => {
    count++;
    displayNumbers.textContent = count;
    if (count > 0) {
        displayNumbers.style.color = 'lightgreen'
    }
});

decreaseBtn.addEventListener('click', () => {
    count--;
    displayNumbers.textContent = count;
    if (count < 0) {
        displayNumbers.style.color = 'red'
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    displayNumbers.textContent = count;
    if (count === 0) {
        displayNumbers.style.color = 'gray'
    }
})
// Get dom objects for calculator buttons and screen

const buttons = document.querySelectorAll(".button")
const output = document.querySelector(".output")
const clear = document.querySelector('#clear')
const dotButton = document.querySelector('#dot')
const dividButton = document.querySelector('#division')
const multButton = document.querySelector('#multiply')
const subButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('.output').value +=button.value;
    });
});

function clearNums(){
    document.querySelector('.output').value = '';
}

dotButton.addEventListener('click', function () {
    output.value += dotButton.value
})

dividButton.addEventListener('click', function () {
    output.value += dividButton.value
})

plusButton.addEventListener('click', function () {
    output.value += plusButton.value
})

multButton.addEventListener('click', function () {
    output.value += multButton.value
})

subButton.addEventListener('click', function () {
    output.value += subButton.value
})

const equalsign = document.querySelector('#equal')

equalsign.addEventListener('click', function () {
   const currentValue = output.value
   output.value = eval(currentValue)
})
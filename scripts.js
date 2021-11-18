const submitInput = (event) => {
    event.preventDefault();
    output.style.display = 'block';
    output.innerHTML = Functions[currentFunc](input.value);
    input.value = '';
}

const tempConvert = (arg) => {
    let answer = `${((arg * (9/5)) + 32)}&deg`;
    return answer;
};

const anotherFunc = () => {
    console.log('this is another function');
}

let button = document.getElementById('submitButton');
let input = document.getElementById('inputBox');
let output = document.getElementById('output');
let currentProblem = document.getElementsByClassName('prob')[0];
let currentFunc = currentProblem.dataset.func;

let Functions = {
    tempConvert
}

button.addEventListener('click', submitInput);
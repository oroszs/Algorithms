const submitInput = (event) => {
    event.preventDefault();
    output.style.display = 'block';
    if(currentFunc === ''){
        output.innerHTML = input.value;
        input.value='';
    } else {
        output.innerHTML = Functions[currentFunc](input.value);
        input.value = '';
    }
}

const tempConvert = (arg) => {
    let answer = `${((arg * (9/5)) + 32)}&deg`;
    return answer;
};

const setDisplay = (ev) => {
    if(el !== ev.target){
        el = ev.target;
        currentFunc = el.dataset.func;
        title.innerHTML = el.innerHTML;
        output.style.display = 'none';
    }
}

const setDefaultDisplay = () => {
    title.innerHTML = 'Select a Problem';
}

let button = document.getElementById('submitButton');
let input = document.getElementById('inputBox');
let output = document.getElementById('output');
let title = document.getElementById('title');
let probHolder = document.getElementById('probList');
let currentFunc = '';
let el = '';

setDefaultDisplay();

let Functions = {
    tempConvert
}

button.addEventListener('click', submitInput);
probHolder.addEventListener('click', setDisplay);
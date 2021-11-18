const submitInput = (event) => {
    ans = '';
    event.preventDefault();
    output.style.display = 'inline-block';
    if(currentFunc === ''){
        output.innerHTML = input.value;
    } else {
        output.innerHTML = Functions[currentFunc](input.value);
    }
    input.value='';
}

const tempConvert = (arg) => {
    ans = `${((arg * (9/5)) + 32)}&deg`;
    return ans;
};

const reverseString = (arg) => {
    for(let x = arg.length -1; x > -1; x--){
        ans += arg[x];
    }
    return ans;
}

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
let ans = '';

setDefaultDisplay();

let Functions = {
    tempConvert,
    reverseString
}

button.addEventListener('click', submitInput);
probHolder.addEventListener('click', setDisplay);
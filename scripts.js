const submitInput = (event) => {
    event.preventDefault();
    output.innerHTML = solve(input.value);
}

const solve = (para) => (para * 2);

let button = document.getElementById('submitButton');
let input = document.getElementById('inputBox');
let output = document.getElementById('output');

button.addEventListener('click', submitInput);
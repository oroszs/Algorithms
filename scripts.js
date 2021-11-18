const submitInput = (event) => {
    event.preventDefault();
    output.style.display = 'block';
    output.innerHTML = solve(input.value);
    input.value = '';
}

const solve = (arg) => {
    let answer = `${((arg * (9/5)) + 32)}&deg`;
    return answer;
};

let button = document.getElementById('submitButton');
let input = document.getElementById('inputBox');
let output = document.getElementById('output');

button.addEventListener('click', submitInput);
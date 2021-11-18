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

const factorialize = (arg) => {
    ans = 1;
    let num = parseInt(arg);
    if(num !== 0) {
        for (let x = 1; x < num + 1; x++){
            console.log(ans + ' ' + x);
            ans *= x;
        }
    }
    return ans;
}

const longestWord = (arg) => {
    ans = 0;
    let words = arg.split(' ');
    words.forEach(word => {
        console.log(word + ' ' + word.length);
        if(word.length > ans){
            ans = word.length;
        }
    });
    return ans;
}

const longestNum = (arg) => {
    let nums = arg.split(',');
    let array = [];
    nums.forEach(num => {
        if(num.indexOf('[') !== -1){
            num = num.split('[');
            num.forEach(x => {
                if(x !== '' && x.indexOf(']') === -1){
                    array.push(x);
                }
            });
        } else {
            array.push(parseInt(num));
        }
    });
    let arrays = array.toString().split(' ');
    let finalArrays = arrays.toString().split(',');
    let subArray = [];
    let finalArray = [];
        for(let i = 0; i < finalArrays.length; i ++){
            if(finalArrays[i] !== ''){
                subArray.push(finalArrays[i]);
            } if(finalArrays[i] === '' || i === finalArrays.length - 1){
                if(subArray.length !== 0){
                    finalArray.push(subArray);
                }
                subArray = [];
            }
        }
        let ansArray = [];
        let highNum = '';
    for(let x = 0; x < finalArray.length; x++){
        for(let y = 0; y < finalArray[x].length; y++){
            if(y === 0){
                highNum = finalArray[x][y];
            }
            console.log(`high: ${highNum}, arr: ${finalArray[x][y]}`);
            if(parseInt(finalArray[x][y]) > parseInt(highNum)){
                highNum = finalArray[x][y];
            }
        }
        ansArray.push(highNum);
        highNum = '';
        console.log('');
    }
    return ansArray;
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
    reverseString,
    factorialize,
    longestWord,
    longestNum
}

button.addEventListener('click', submitInput);
probHolder.addEventListener('click', setDisplay);
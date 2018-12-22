const input = document.querySelector('#input__lb');
const inputKg = document.querySelector('#input__kg');
const inputGrams = document.querySelector('#input__grams');
const converted = document.querySelector('#converted');

document.getElementById('form').addEventListener('submit',(e)=> {
    const newValue = convertLbToKg(input.value);
    inputKg.value = newValue;
    e.preventDefault();
}); 
function convertLbToKg(input = "No input provided"){
    //1lb = 0.453592kg
    let gram = input * 0.453592;
    return gram;
}
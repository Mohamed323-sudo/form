const form = document.querySelector('.myForm');
const result = document.querySelector('.result');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const num1 = form.num1.value
    const num2 = form.num2.value

    const multiply = num1 * num2
    result.innerHTML = multiply
    form.reset();
})

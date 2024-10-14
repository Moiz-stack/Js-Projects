const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#results");
    const bmiResult = document.querySelector("#bmi-result");

    if (height == "" || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please enter a valid height';
    }
    else if (weight == "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please enter a valid weight';
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<h3>Your BMI is ${bmi}</h3>`

        if (bmi < 18.5) {
            bmiResult.innerHTML = `<span> You are Underweight</span>`
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiResult.innerHTML = `<span> You are Normal</span>`
        }
        else {
            bmiResult.innerHTML = `<span> You are Overweight</span>`
        }
    }
})
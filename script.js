// get value input
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const BtnCheck = document.getElementById('btn-check');

// action to check!
BtnCheck.addEventListener('click', (e) => {
    e.preventDefault();

    // get value dari input
    const weight = weightInput.value;
    const height = heightInput.value;

    // validasi input
    const isValidInput = checkInput(weight, height);
    if (isValidInput) {

        // check BMI with function formula
        const BMIresult = formulaBMIcheck(weight, height)

        // select categories if result formula not null
        if (BMIresult !== null) {
            categoriesBMIresult(BMIresult);
        }
    }
})



// validasi value input, is ready?
const checkInput = (w, h) => {

    // Checks if both parameters are filled
    if (!w || !h) {
        console.log('Please provide values for both weight and height.');
        return false;
    }

    // Check whether both parameters are numbers
    if (isNaN(w) || isNaN(h)){
        console.log('Please enter numeric values for weight and height.')
        return false;
    }

   return true;
}

// formula BMI check
const formulaBMIcheck = (w, h) => {

    // Check is we and he are numbers ?
    if (isNaN(w) || isNaN(h) || h <= 0) {
        return null; // Exit the function and return null if it is not a number
    }

    // formula calculation
    const heightInMeter = ((h / 100) ** 2);
    const BMIresult = w / heightInMeter;
    console.log(BMIresult)
    return BMIresult;
}


// BMI result categories
const categoriesBMIresult = (bmi) => {

    // Check if bmi is a number
    if (typeof bmi !== 'number' || isNaN(bmi)) {
        return; // Exit the function if bmi is not a number
    }

    // Categorize based on BMI value
    if (bmi < 18.5) {
        console.log('Underweight');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
         console.log('Normal weight');
    } else if (bmi >= 25 && bmi <= 29.9) {
         console.log('Overweight');
    } else {
         console.log('Obesity');
    }
}


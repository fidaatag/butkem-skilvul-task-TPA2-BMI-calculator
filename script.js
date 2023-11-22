// get DOM
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const BtnCheck = document.getElementById('btn-check');
const BtnReCheck = document.getElementById('btn-re-check');
const failNotif = document.querySelector('.fail-notif');
const BMIres = document.querySelector('.BMI-res');
const BMIcat = document.querySelector('.BMI-cat');
const ImgCat = document.getElementById('img-cat');

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

            BtnCheck.style.display = 'none';  // Hide the Check button 
            BtnReCheck.style.display = 'inline-block'; // Display the Recheck button to refresh
            BtnReCheck.addEventListener('click', refreshPage)
        }
    }
})

// click red btn to refresh
const refreshPage = () => location.reload()


// Clear text content when input fields are clicked
const clearFailNotif = () => failNotif.textContent = '';
weightInput.addEventListener('focus', clearFailNotif);
heightInput.addEventListener('focus', clearFailNotif);


// validasi value input, is ready?
const checkInput = (w, h) => {

    // Checks if both parameters are filled
    if (!w || !h) {
        failNotif.textContent = 'Please provide values for both weight and height.';
        return false;
    }

    // Check whether both parameters are numbers
    if (isNaN(w) || isNaN(h)){
        failNotif.textContent = 'Please enter numeric values for weight and height.';
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

    // Check if BMIresult has decimals
    const hasDecimals = BMIresult % 1 !== 0;

    // Set the text content based on the condition
    if (hasDecimals) {
        BMIres.textContent = BMIresult.toFixed(1); // Display with 2 decimal places
    } else {
        BMIres.textContent = BMIresult.toFixed(0); // Display without decimals
    }
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
        BMIcat.textContent = 'under weight'.toUpperCase();
        ImgCat.src = ('assets/under_weight.svg')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        BMIcat.textContent = 'normal weight'.toUpperCase();
        ImgCat.src = ('assets/normal_weight.svg')
     } else if (bmi >= 25 && bmi <= 29.9) {
        BMIcat.textContent = 'over weight'.toUpperCase();
        ImgCat.src = ('assets/over_weight.svg')
    } else {
        BMIcat.textContent = 'obesity'.toUpperCase();
        ImgCat.src = ('assets/obesity.svg')
    }
}
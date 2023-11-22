# Bootcamp Skilvul FullStack TPA2 - BMI Calculator

This is [technical project assignment (TPA2) - BMI calculator](https://github.com/impactbyte/full-stack-web-assignments/tree/master/TPA-002) from the Skilvul Bootcamp Fullstack of the Innovation Women Program 2023.

## Table of contents

- [Overview](#overview)
  - [Specs](#specs)
  - [Expected result](#expected-result)
  - [Screenshot](#screenshot)
  - [Link](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview


### Specs

1. Create a website application to calculate Body Mass Index (BMI) based on established standards.
2. Users must input their **Weight** in **KG**.
3. Users must input their **Height** in **CM**.
4. The BMI formula for units in **KG** and **CM** is `Weight / (Height/100)^2`.
5. The application should display the BMI status according to the following standards:

- BMI Categories:
  - Underweight = <18.5
  - Normal weight = 18.5 – 24.9
  - Overweight = 25 – 29.9
  - Obesity = BMI of 30 or greater

### Expected Result

- Weight: 60 KG
- Height: 167 CM
  BMI = 60 / (167/100)^2
  BMI = 60 / (2.8)
  BMI = 21.5
  BMI Categories: Normal



### Screenshot

![Design preview for the BMI-Calculator](bmi-check-screenshoot.gif)


### Links

- Live Site URL: [BMI-Check](https://bmi-checkk.netlify.app/)

## My process

### Built with

- Flexbox
- CSS Grid
- Vanilla Javascript


### What I learned

The recap that is recorded here is basic css which I often rarely use.

- Clear text content when input fields are clicked:

```js
const clearFailNotif = () => failNotif.textContent = '';
weightInput.addEventListener('focus', clearFailNotif);
heightInput.addEventListener('focus', clearFailNotif);
```

- Changing images based on conditions with the DOM :
```js
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
```

- Refrash page when invoke function :
```js
const refreshPage = () => location.reload()
```

- Nested event :
```js
BtnCheck.addEventListener('click', (e) => {
    ...
    if (isValidInput) {
        ...
        if (BMIresult !== null) {
            ...

            BtnCheck.style.display = 'none';  
            BtnReCheck.style.display = 'inline-block'; /
            BtnReCheck.addEventListener('click', refreshPage)
        }
    }
})
```


### Continued development

When reloading to clear the form after inspection, all elements are reloaded, including images. This will disrupt website performance if done on a large scale. Using React is one solution, but what if use vanilla JavaScript? It will be more complicated, but there, I will learn a lot of things.


### Useful resources

- [CSS Grid](https://learncssgrid.com/) - the easiest guide to use the grid, there is a picture of each code that will be generated, cool
- [Box Sizing](https://www.apacara.com/example/css/property/box-sizing.html#tab4) -  example of the impact of using box-sizing
- [Beautiful Button](https://getcssscan.com/css-buttons-examples) - provides botton styles complete with CSS


## Author

- Skilvul Profile - [@fidaatag](https://skilvul.com/profile/fidaatag)
- Twitter - [@fidaatag](https://twitter.com/fidaatag)
- Linkedin - [Fidaa Mustaghfiroh](https://www.linkedin.com/in/fidaatag/)


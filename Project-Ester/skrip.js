function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    var gender = document.getElementById('gender').value;
    var bmi;

    if (gender === 'male') {
        bmi = weight / (height * height);
    } else {
        // For female, adjust the BMI formula
        bmi = 1.3 * weight / (height * height);
    }

    var result = document.getElementById('result');

    if (isNaN(bmi)) {
        result.innerHTML = "Please enter valid values for weight and height.";
    } else {
        result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
    }
}
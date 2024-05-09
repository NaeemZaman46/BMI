const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateButton = document.getElementById("calculateButton");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", calculateBMI);

function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = "Please enter valid height and weight";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const bmiCategory = getBMICategory(bmi);
    resultDiv.textContent = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

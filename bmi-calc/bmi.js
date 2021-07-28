document.getElementById("submit").addEventListener("click", calcBMI);

function calcBMI() {

    let cm = parseInt(document.getElementById("cm").value);
    let kg = parseFloat(document.getElementById("kg").value);

    if (cm > 0 && kg > 0) {
        let bmi;
        let newCM = parseFloat(cm / 100);

        bmi = kg / Math.pow(newCM, 2);
        bmi = bmi.toFixed(1);

        if (bmi <= 18.6) {
            document.getElementById("result").style.color = "yellow";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            document.getElementById("result").style.color = "rgb(179, 255, 0)";
        } else {
            document.getElementById("result").style.color = "orange"
        }

        document.getElementById("result").innerHTML = `Your BMI is ${bmi}`;
    }
    else {
        document.getElementById("result").innerHTML = "Please enter valid numbers"
    }

}
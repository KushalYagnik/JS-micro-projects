let currentUnit = 'kg';

function weightConverter(valNum) {
    valNum = (currentUnit === 'kg') ? valNum * 2.2046 : valNum / 2.2046;
    let n = valNum.toFixed(2);
    document.getElementById("outputWgt").innerHTML = n;
}

function reverse() {
    if (currentUnit === 'kg') {
        document.getElementById("h1").innerHTML = "Weight Converter (Lbs to Kg)";
        document.getElementById("unit1").innerHTML = "Lbs";
        document.getElementById("inputWgt").setAttribute("placeholder", "Pounds");
        document.getElementById("unit2").innerHTML = "Kg";
        currentUnit = 'lbs';
    }
    else {
        document.getElementById("h1").innerHTML = "Weight Converter (Kg to Lbs)";
        document.getElementById("unit1").innerHTML = "Kg";
        document.getElementById("inputWgt").setAttribute("placeholder", "Kilograms");
        document.getElementById("unit2").innerHTML = "Lbs";
        currentUnit = 'kg';
    }
    document.getElementById("inputWgt").value = '';
    document.getElementById("outputWgt").innerHTML = '';
}
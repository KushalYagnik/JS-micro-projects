function weightConverter(valNum) {
    valNum = valNum * 2.2046;
    let n = valNum.toFixed(2);
    document.getElementById("outputLbs").innerHTML = n;
}
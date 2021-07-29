function weightConverter(valNum) {
    valNum = valNum * 2.2046;
    let n = valNum.toFixed(0);
    document.getElementById("outputLbs").innerHTML = n;
}
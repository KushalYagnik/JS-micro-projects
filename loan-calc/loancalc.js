function computeLoan() {
    let amount = document.getElementById('amount').value;
    let interest = document.getElementById("interest").value;
    let months = document.getElementById('months').value;

    // console.log(`amount=${amount}, interest=${interest}, months= ${months}`)

    interest = (amount * (interest * 0.01)) / months;
    payment = ((amount / months) + interest).toFixed(2);

    payment = payment.toString().replace(/\B(?=(\d{3}) + (?!\\d))/g, ",");

    // console.log(`AFTER \\n interest=${interest}, payment=${payment}`)

    document.getElementById('payment').innerHTML = "Monthly Payment = $" + payment;
}
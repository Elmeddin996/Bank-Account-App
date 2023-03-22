const loginPage = document.querySelector(".login-page");
const loginBtn = document.querySelector("#login");
const password = document.querySelector("input[type=password]");
const username = document.querySelector("input[type=text]");
const operationPage = document.querySelector(".operation-choose-page");
const withdrawShow = document.querySelector("#withdraw h5");
const balanceShow = document.querySelector("#balance h5");
const depositShow = document.querySelector("#deposit h5");
const paymentShow = document.querySelector("#payment h5");
const withdrawInputPage = document.querySelector(".withdraw-input");
const withdrawInput = document.querySelector(".withdraw-input input");
const depositInputPage = document.querySelector(".deposit-input");
const depositInput = document.querySelector(".deposit-input input");
const paymentInputPage = document.querySelector(".payment-input");
const paymentInput = document.querySelector(".payment-input input");
const withdrawBigBtn = document.querySelector(".withdraw-btn");
const depositBigBtn = document.querySelector(".deposit-btn");
const paymentBigBtn = document.querySelector(".payment-btn");
const withdrawBtn = document.querySelector(".withdraw-input button");
const depositBtn = document.querySelector(".deposit-input button");
const paymentBtn = document.querySelector(".payment-input button");

let userBalance = 5000;
let userWithdraw = "";
let userDeposit = "";
let userPayment = "";
balanceShow.textContent = `${userBalance} Azn`;

//login page start.

username.value = "admin";
password.value = "admin";
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (username.value === "admin" && password.value === "admin") {
        loginPage.style.display = "none"
        operationPage.style.display = "flex"
    } else {

        showAlert("warning", "Wrong Username or Password!!!");
    }
    function showAlert(type, message) {
        const div = document.createElement("div");
        const alert = document.querySelector("#alert")
        div.className = `alert alert-${type}`;
        div.textContent = message;
        alert.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 1500);
    }
})

//login page end.


//operation page start

withdrawBigBtn.addEventListener("click", () => {
    withdrawInputPage.classList.toggle("input-toggle")
})

depositBigBtn.addEventListener("click", () => {
    depositInputPage.classList.toggle("input-toggle")
})

paymentBigBtn.addEventListener("click", () => {
    paymentInputPage.classList.toggle("input-toggle")
})


withdrawBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userBalance >= withdrawInput.value && withdrawInput.value !== "" && withdrawInput.value > 0) {
        userBalance = Number(userBalance) - Number(withdrawInput.value);
        userWithdraw = Number(userWithdraw) + Number(withdrawInput.value);
        withdrawInput.value = ""
        balanceShow.textContent = `${userBalance} Azn`
        withdrawShow.textContent = `${userWithdraw} Azn`
        showAlert("success", "Withdraw is Successful")
    } else {
        showAlert("warning", "Enter the correct amount!!!")
    }

    function showAlert(type, message) {
        const div = document.createElement("div");
        const alert = document.querySelector("#withdraw-alert")
        div.className = `alert alert-${type}`;
        div.textContent = message;
        alert.appendChild(div)

        setTimeout(() => {
            div.remove();
        }, 1500);
    }
})


paymentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userBalance >= paymentInput.value && paymentInput.value !== "" && paymentInput.value > 0) {
        userBalance = Number(userBalance) - Number(paymentInput.value);
        userPayment = Number(userPayment) + Number(paymentInput.value);
        paymentInput.value = ""
        balanceShow.textContent = `${userBalance} Azn`
        paymentShow.textContent = `${userPayment} Azn`
        showAlert("success", "Payment is Successful")
    } else {
        showAlert("warning", "Enter the correct amount!!!")
    }

    function showAlert(type, message) {
        const div = document.createElement("div");
        const alert = document.querySelector("#payment-alert")
        div.className = `alert alert-${type}`;
        div.textContent = message;
        alert.appendChild(div)

        setTimeout(() => {
            div.remove();
        }, 1500);
    }
})


depositBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (depositInput.value !== "" && depositInput.value > 0) {
        userBalance = Number(userBalance) + Number(depositInput.value);
        userDeposit = Number(userDeposit) + Number(depositInput.value);
        depositInput.value = ""
        balanceShow.textContent = `${userBalance} Azn`
        depositShow.textContent = `${userDeposit} Azn`
        showAlert("success", "Deposit is Successful")
    } else {
        showAlert("warning", "Enter the correct amount!!!")
    }

    function showAlert(type, message) {
        const div = document.createElement("div");
        const alert = document.querySelector("#deposit-alert")
        div.className = `alert alert-${type}`;
        div.textContent = message;
        alert.appendChild(div)

        setTimeout(() => {
            div.remove();
        }, 1500);
    }
})

//operation page end


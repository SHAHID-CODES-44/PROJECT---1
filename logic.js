       
// FIRST PAGE / LOGIN PAGE.
document.addEventListener("DOMContentLoaded", () => {
    
    const correctAccountNumber = "123456";
    const correctPassword = "password123";

    const loginButton = document.getElementById("loginbtn");
    const accountInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    loginButton.addEventListener("click", (event) => {
        event.preventDefault();
        const accountNumber = accountInput.value.trim();
        const password = passwordInput.value.trim(); 
        if (accountNumber === "" || password === "") {
            alert("Please enter all details.");
        } else if (accountNumber !== correctAccountNumber || password !== correctPassword) {
            alert("Incorrect account number or password.");
        } else {
            window.location.href = "options.html";
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
    // WITHDRAW PAGE OF HTML
document.addEventListener("DOMContentLoaded", () => {
    let balance = 5000;
    const withdrawInput = document.getElementById("withdraw");
    const withdrawButton = document.getElementById("enter");
    const checkBalanceButton = document.getElementById("check");
    const backButton = document.getElementById("back");

    withdrawButton.addEventListener("click", () => {
        const withdrawAmount = parseFloat(withdrawInput.value.trim());
        
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert("Please enter a valid withdrawal amount.");
        } else if (withdrawAmount > balance) {
            alert("Insufficient balance.");
        } else {
            balance -= withdrawAmount;
            alert(`Withdrawal successful! Remaining balance: ₹${balance}`);
            withdrawInput.value = ""; 
        }
    });

    checkBalanceButton.addEventListener("click", () => {
        alert(`Your current balance is: ₹${balance}`);
    });

    backButton.addEventListener("click", (event) => {
        console.log("Returning to the previous page.");
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // DEPOSIT PAGE.
document.addEventListener("DOMContentLoaded", () => {
    let balance = 5000; 

    const depositInput = document.getElementById("DEPOSIT");
    const depositButton = document.getElementById("enter");
    const checkBalanceButton = document.getElementById("check");
    const backButton = document.getElementById("back");

    depositButton.addEventListener("click", () => {
        const depositAmount = parseFloat(depositInput.value.trim());
        
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert("Please enter a valid deposit amount.");
        } else {
            balance += depositAmount;
            alert(`Deposit successful! New balance: ₹${balance}`);
            depositInput.value = ""; 
        }
    });

    checkBalanceButton.addEventListener("click", () => {
        alert(`Your current balance is: ₹${balance}`);
    });

    backButton.addEventListener("click", (event) => {
        console.log("Returning to the previous page.");
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
    //CHECK BALANCE OPTION.
let balance = 5000; 
document.getElementById("checkit").addEventListener("click", function () {
    let afterDeposit = balance + depositAmount;
    alert("Your current balance is: ₹" + afterDeposit);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
   //EXIT MESSAGE
document.getElementById("exit").addEventListener("click",function() {
    alert("thanks for using our website.")
});


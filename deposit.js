// step 1 - add event listener 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // get the deposit amount from the input field
    // for input field use .value to the value inside the input field.
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // get the deposit the current amount
    // for non-input (element other then input textarea ) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    // add number 
    const currentDepositTotal = previousdepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
// GET BALANCE CURRENT TOTAL
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalbalanceString = totalBalanceElement.innerText
    const previousTotalBalance = parseFloat(previousTotalbalanceString);
// calculate current total balance
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
// set the balance total
    totalBalanceElement.innerText = currentTotalBalance;
    

    // clear the deposit field 
    depositField.value = '';


})
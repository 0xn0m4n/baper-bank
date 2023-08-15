// add event handler with the withdraw button

// 01
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get the withdraw amount from the withdraw field 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawamount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawamount);


    // clear the input field 
    withdrawField.value = '';

    if (isNaN(newWithdrawamount)){
        alert('Please provide valid number');
        return;
    }
    // also make sure convert the input into a number by using parsefloat 
    // get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawtotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawtotalString);
    

    // get the previous balance total
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalbalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalbalanceString);
    


    if (newWithdrawamount > previousTotalBalance){
        alert('Eto tk korbi ki? teka nai ja vag ')
        return;
    }
    // calculate total withdraw amount
    const currentWithdrawtotal = previousWithdrawTotal + newWithdrawamount;
    // set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawtotal;
    // calculate total new balance
    // set the new new total balance
    const newTotalBalance = previousTotalBalance - newWithdrawamount;
    totalBalanceElement.innerText = newTotalBalance;


    

})
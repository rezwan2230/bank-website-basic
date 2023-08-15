

document.getElementById('withdrow-btn').addEventListener('click',function(){
    const withdrawInputField = document.getElementById('withdraw-input')
    const withdrawAmountString = withdrawInputField.value
    const CurrentwithdrawAmount = parseFloat(withdrawAmountString)


    const withdrawTotalElement = document.getElementById('withdraw-balance')
    const withdrawTotalElementString = withdrawTotalElement.innerText
    const previousWithdrawAmount = parseFloat(withdrawTotalElementString)

    const TotalWithdrawAmount = previousWithdrawAmount + CurrentwithdrawAmount


    const totalBalanceElement = document.getElementById('total-balance')
    const previoustotalBalanceString = totalBalanceElement.innerText
    const previousTotalBalance = parseFloat(previoustotalBalanceString)

    //step-6: set the balance total
    if(CurrentwithdrawAmount > previousTotalBalance){
        alert("Insufficient Balance")
    }
    else{
        withdrawTotalElement.innerText = TotalWithdrawAmount
        totalBalanceElement.innerText = previousTotalBalance - CurrentwithdrawAmount
    }
    

    withdrawInputField.value = ''
})
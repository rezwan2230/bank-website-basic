
document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueById('deposite-input')
    const previousDepositAmount = getInputValueById('diposit-balance')
    const currentDepositAmount = previousDepositAmount + newDepositAmount

    setTextElementValueById('diposit-balance', currentDepositAmount)

    const previousBalance = getInputValueById('total-balance')
    const currentBalance = previousBalance + newDepositAmount
    setTextElementValueById('total-balance', currentBalance)
})

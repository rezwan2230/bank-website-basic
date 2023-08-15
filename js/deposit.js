
// Step-1 : add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){

    // Step-2 : get deposit amount from the deposit input field.
    // For input field use .value to get the value inside the input field
    const depositinputField = document.getElementById('deposite-input')
    let newDepositAmountString = depositinputField.value
    let newDepositAmount = parseFloat(newDepositAmountString)

    //step-3: get the current deposit total
    const depositTotalElement = document.getElementById('diposit-balance')
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step-4: add numbers to set the total deposit
    const currentDepositeTotal = previousDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDepositeTotal

    //step-5: get the current balance total
    const totalBalanceElement = document.getElementById('total-balance')
    const totalBalanceString = totalBalanceElement.innerText
    const currentTotalBalance = parseFloat(totalBalanceString)
    //step-6: set the balance total
    totalBalanceElement.innerText = currentTotalBalance + newDepositAmount


    // clear the deposite field
    depositinputField.value = ''
})
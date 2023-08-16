
document.getElementById('withdrow-btn').addEventListener('click', function () {

    const newwithdrowAmount = getInputFieldValueById('withdraw-input')
    const previouswithdrowAmount = getInputValueById('withdraw-balance')
    const currentwithdrowAmount = previouswithdrowAmount + newwithdrowAmount

    const previousAmount = getInputValueById('total-balance')

    if (newwithdrowAmount > previousAmount) {
        alert("Insufficient Balance")
    }
    else {
        setTextElementValueById('withdraw-balance', currentwithdrowAmount)
        const totalBalance = previousAmount - newwithdrowAmount
        setTextElementValueById('total-balance', totalBalance)
    }
})
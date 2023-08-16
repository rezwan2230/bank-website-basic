
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueString = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = ''
    return inputFieldValue
}

function getInputValueById(elementId){
    const element = document.getElementById(elementId)
    const elementValueString = element.innerText
    const elementValue = parseFloat(elementValueString)
    return elementValue
}

function setTextElementValueById(elementId, newValue){
    document.getElementById(elementId).innerText = newValue
}


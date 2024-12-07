

function getInputFieldValueByID(id){
    const inputValue =document.getElementById(id).value
    const inputValueNumber=parseFloat(inputValue)
    return inputValueNumber

}

function getTextFieldValueByID(id){
    const textValue =document.getElementById(id).innerText
    const textNumber=parseFloat(textValue)
    
    return textNumber

}




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



function toggleSectionById (id){
    document.getElementById('home-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

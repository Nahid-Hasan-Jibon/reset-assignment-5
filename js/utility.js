

function getInputFieldValueByID(id){
    const donationValue =document.getElementById(id).value
    const donationValueNumber=parseFloat(donationValue )
    return donationValueNumber

}

function getTextFieldValueByID(id){
    const balanceTextValue =document.getElementById(id).innerText
    const balanceTextNumber=parseFloat(balanceTextValue)
    
    return balanceTextNumber

}



function toggleSectionById (id){
    document.getElementById('home-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
    
}

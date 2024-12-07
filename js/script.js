

document.getElementById('donate-btn').addEventListener('click',function(event){
    event.preventDefault()

    const inputValue = getInputFieldValueByID('input-1')

   

    const currentBalance =getTextFieldValueByID('current-balance')
    const currentDonation =getTextFieldValueByID('current-donation')
    
    if(inputValue>currentBalance||inputValue<0||isNaN(inputValue)){
        alert('Failed to donate money')
    }
    else{

        const updateBalance = currentBalance-inputValue
    document.getElementById('current-balance').innerText=updateBalance.toFixed(2)
    const updateDonationBalance= currentDonation+inputValue
    document.getElementById('current-donation').innerText=updateDonationBalance.toFixed(2)

    document.getElementById('donate-btn').setAttribute("onclick", document.getElementById('my_modal_1').showModal())

    

    }

    

    

})




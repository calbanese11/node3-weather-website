const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// To target by the id you must start the message with a # sign
const messageOne =  document.querySelector('#message-1')
const messageTwo =  document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else{
            messageOne.textContent = data.location
            messageTwo.textContent = 'The weather is ' + data.forecast.summary + ' with a temperature of ' + data.forecast.temperature + ' with a wind speed of ' + data.forecast.windSpeed + '.'

        }
        
    })
    })

})
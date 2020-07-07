console.log('Client side JS file is loaded.')

// fetch('http://puzzle.mead.io/puzzle').then((response) => [
//     // this will run when the data json has arrived and then parsed
//     response.json().then((data) => {
//         console.log(data)
//     })
// ])


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get input value
    const location = search.value

    console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => [
        // this will run when the data json has arrived and then parsed
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            }
            else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    ])
})
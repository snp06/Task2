
const container = document.querySelector('.container')
const unsplashURL = 'https://unsplash.com/s/photos/random'
const rows = 5


function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}

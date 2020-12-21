const themeButton = document.querySelector('.theme')

document.querySelector('#copyright').innerHTML += new Date().getFullYear()

if (window.localStorage.getItem('theme') === 'true') {
    themeButton.classList.toggle('fa-sun')
    themeButton.classList.toggle('fa-moon')
    document.querySelector('devsite-code').classList.toggle('light')
}

themeButton.addEventListener('click', () => {
    themeButton.classList.toggle('fa-sun')
    themeButton.classList.toggle('fa-moon')
    document.querySelector('devsite-code').classList.toggle('light')

    if (window.localStorage.getItem('theme') === 'true') {
        window.localStorage.setItem('theme', 'false')
    } else {
        window.localStorage.setItem('theme', 'true')
    }
})

document.querySelector('#redCloseButton').addEventListener('click', () => {
    self.close()
})

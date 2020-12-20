// window.onload = () => {
//     for (counter of document.querySelectorAll('.counter')) {
//         counter.style.setProperty('--num', counter.getAttribute('data-target'))
//         counter.classList.add('active')
//     }
// }

document.querySelector('#copyright').innerHTML += new Date().getFullYear()

const themeButton = document.querySelector('.theme')

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

window.onload = () => {
    if (window.localStorage.getItem('theme') === 'true') {
        themeButton.classList.toggle('fa-sun')
        themeButton.classList.toggle('fa-moon')
        document.querySelector('devsite-code').classList.toggle('light')
    }
}

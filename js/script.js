const btnHamburger = document.getElementById('btnHamburger')
const overlay = document.querySelector('.overlay');
const fades = document.querySelectorAll('.fade')

btnHamburger.addEventListener('click', () => {
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open')

        fades.forEach(fade => {
            fade.classList.remove('fade-in')
            fade.classList.add('fade-out')
        });
    } else {
        btnHamburger.classList.add('open')

        fades.forEach(fade => {
            fade.classList.add('fade-in')
            fade.classList.remove('fade-out')
        });
    }
})
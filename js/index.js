window.addEventListener('DOMContentLoaded', function() {    
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})

const burger = document.querySelector('.header__burger')

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('header__burger--active')
})

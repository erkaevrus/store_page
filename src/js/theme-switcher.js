const themeSwitcher = document.querySelector('.toggle-switch')

themeSwitcher.addEventListener('change', () => {
  document.querySelector('body').toggleAttribute('dark')
})

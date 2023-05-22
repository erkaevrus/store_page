const buttonUp = {
  el: document.querySelector('.button-up'),
  show() {
    this.el.classList.remove('button-up--hide')
  },

  hide() {
    this.el.classList.add('button-up--hide')
  },

  addEventListener() {
    window.addEventListener('scroll', () => {
      window.scrollY > 400 ? this.show() : this.hide()
    })

    document.querySelector('.button-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  },
}

buttonUp.addEventListener()

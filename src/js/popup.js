import { initCounter } from "./input-counter.js"


function drawPopup() {
  let modalWindow = document.createElement('div')
  modalWindow.classList.add('form-wrapper')
  modalWindow.innerHTML =
      `
      <form class="form" action="" method="post">
        <div class="form__btn-close">
          <span class="ico ico--cross"></span>
        </div>
        <div class="form__color">
          <p class="form__subtitle">Цвет</p>
          <div class="custom-radios">
            <div>
              <input type="radio" id="color-1" name="color" value="color-1" checked>
              <label for="color-1">
                <span>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
              </label>
            </div>
            <div>
              <input type="radio" id="color-2" name="color" value="color-2">
              <label for="color-2">
                <span>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
              </label>
            </div>
            <div>
              <input type="radio" id="color-3" name="color" value="color-3">
              <label for="color-3">
                <span>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
              </label>
            </div>
            <div>
              <input type="radio" id="color-4" name="color" value="color-4">
              <label for="color-4">
                <span>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="form__counter">
          <p class="form__subtitle">Количество</p>
          <div class="custom-counter">
            <button class="decrement" type="button">
              <span class="ico ico--minus"></span>
            </button>
            <input class="custom-input-number" type="number" min="1" value="1"/>
            <button class="increment" type="button">
              <span class="ico ico--plus"></span>
            </button>
          </div>
        </div>
        <div class="form__comment">
          <p class="subtitle">Комментарий</p>
          <textarea class="form__textarea" placeholder="уточните детали заказа" maxlength="2000" cols="20" rows="7"></textarea>
        </div>
        <button class="button" type="button">Купить</button>
      </form>
      `
  document.querySelector('.wrapper').appendChild(modalWindow)
}


function displayPopup() {
  drawPopup()
  initCounter()
  doPurchase()

  setTimeout(function() {
    document.querySelector('.form-wrapper').classList.add('form-wrapper--active')
  }, 200)

  document.querySelector('.overlay').classList.add('overlay--active')
  document.body.classList.add('body--lock')
}


function closePopup() {
  document.querySelector('.form-wrapper').remove()
  document.body.classList.remove('body--lock')
  document.querySelector('.overlay').classList.remove('overlay--active')
}


document.addEventListener('click', function(event) {
  if(event.target.classList.contains('ico--cross')) {
      closePopup()
      return
  }

  if(event.target.parentElement.classList.contains('form-wrapper')) {
      return
  }

  if(event.target.classList.contains('form-wrapper')) {
      closePopup()
  }
})


const btnBuy = document.querySelectorAll('.card__btn-buy')

btnBuy.forEach(btn => {
  btn.addEventListener('click', displayPopup)
})


function doPurchase() {
  const btnPurchase = document.querySelector('.button')
  btnPurchase.addEventListener('click', () => {
    closePopup()
    alert('Спасибо за покупку. В ближайшее время с вами свяжется наш менеджер.')
  })
}

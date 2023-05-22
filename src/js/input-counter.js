export function initCounter() {
  const decrementBtn = document.querySelector('.decrement')
  const incrementBtn = document.querySelector('.increment')
  const inputValue = document.querySelector('.custom-input-number')

  incrementBtn.addEventListener('click', () => {
    let value = Number(inputValue.value)
    if (value > 9) return
    value += 1
    inputValue.value = value
  })

  decrementBtn.addEventListener('click', () => {
    let value = Number(inputValue.value)
    if (value < 2) return
    value -= 1
    inputValue.value = value
  })
}

export function initCounter() {
  const decrementBtn = document.querySelector('.decrement')
  const incrementBtn = document.querySelector('.increment')
  const inputValue = document.querySelector('.custom-input-number')

  incrementBtn.addEventListener('click', function() {
    let value = Number(inputValue.value)
    if (value > 9) return
    value++
    inputValue.value = value
  })

  decrementBtn.addEventListener('click', function() {
    let value = Number(inputValue.value)
    if (value < 2) return
    value--
    inputValue.value = value
  })
}

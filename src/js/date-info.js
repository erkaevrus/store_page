const DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const MONTHS = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
const cardDate = document.querySelectorAll('.card__date')

function setDayInfo() {
  cardDate.forEach(card => {
    let date = new Date(card.dataset.date)
    let message = `${DAYS[date.getDay()]}, ${Math.ceil(date.getDate() / 7)} неделя ${MONTHS[date.getMonth()]} ${date.getFullYear()} года`
    card.textContent = message
  })
}

document.addEventListener("DOMContentLoaded", setDayInfo)

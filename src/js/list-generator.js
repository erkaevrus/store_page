const categories = document.querySelectorAll('.category')
const categoriesContainer = document.querySelector('.categories-list__container')

// ---функция Фишера-Йейтса для тассовки массива---
function shuffleArray(array) {
  const temp = [...array]
  for (let i = temp.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]]
  }
  return temp
}

const categoriesArray = shuffleArray(categories)

categoriesArray.forEach((category) => {
  const item = document.createElement('li')
  const link = document.createElement('a')

  item.classList.add('categories-list__item')
  link.classList.add('categories-list__link')

  link.setAttribute('href', `#${category.id}`)
  link.textContent = category.childNodes[1].childNodes[1].childNodes[1].textContent
  item.appendChild(link)
  categoriesContainer.appendChild(item)
})

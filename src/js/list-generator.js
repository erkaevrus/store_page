const categories = document.querySelectorAll('.category__title')
const categoriesContainer = document.querySelector('.categories-list__container')

//Функция Фишера-Йейтса для тассовки массива
function shuffleArray(array) {
  let temp = [...array]
  for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp
}

const categoriesArray = shuffleArray(categories)

categoriesArray.forEach(category => {
  const item = document.createElement('li')
  const link = document.createElement('a')

  item.classList.add('categories-list__item')
  link.classList.add('categories-list__link')

  link.textContent = category.textContent
  item.appendChild(link)
  categoriesContainer.appendChild(item)
})

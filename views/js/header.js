const showBtn = document.querySelector('#adress-hover')
const hideBtn = document.querySelector('#hide')
const div = document.querySelector('header-content-holder')
showBtn.addEventListener('click', () => {
  div.style.display = 'block'
})
hideBtn.addEventListener('click', () => {
  div.style.display = 'none'
})
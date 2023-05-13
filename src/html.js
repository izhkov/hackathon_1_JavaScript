// Welcome block
export const welcomeMessage = () => {
  const div = document.createElement('div')
  const h1 = document.createElement('h1')

  div.className = 'welcome__block'
  h1.className = 'welcome__title'
  h1.textContent =
    'Добро пожаловать! Для начала работы кликните правой кнопкой мыши!'

  document.body.append(div)
  div.append(h1)

  const timerId = setTimeout(() => {
    div.style.display = 'none'
  }, 8000)

  return div
}

import { ContextMenu } from './menu'
const contextMenu = new ContextMenu('#menu')

// Welcome block
export const welcomeMessage = (text) => {
  const div = document.createElement('div')
  const h1 = document.createElement('h1')

  div.className = 'welcome__block'
  h1.className = 'welcome__title'
  h1.textContent = text

  document.body.append(div)
  div.append(h1)

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })

  const timerId = setTimeout(() => {
    div.style.display = 'none'
    userName()
  }, 4200)

  return div
}

export const welcomeMessage2 = (text) => {
  const div = document.createElement('div')
  const h1 = document.createElement('h1')

  div.className = 'welcome__block2'
  h1.className = 'welcome__title'
  h1.textContent = text

  document.body.append(div)
  div.append(h1)

  const timerId = setTimeout(() => {
    div.style.display = 'none'
  }, 8000)

  return div
}

// Username block
export const userName = () => {
  const userNameBlock = document.createElement('div')
  const innerBlock = document.createElement('div')
  const buttonBlock = document.createElement('div')
  const userNameTitle = document.createElement('p')
  const userNameForm = document.createElement('form')
  const userNameInput = document.createElement('input')
  const userNameSubmit = document.createElement('submit')

  userNameBlock.className = 'username__block'
  innerBlock.className = 'username__innerBlock'
  buttonBlock.className = 'username__buttonBlock'
  userNameTitle.className = 'username__title'
  userNameTitle.textContent = 'Ваше имя'
  userNameInput.className = 'username__input'
  userNameSubmit.className = 'username__submit'
  userNameSubmit.textContent = 'Отправить'

  userNameBlock.append(innerBlock)
  innerBlock.append(userNameTitle)
  innerBlock.append(userNameForm)
  userNameForm.append(userNameInput)
  userNameForm.append(buttonBlock)
  buttonBlock.append(userNameSubmit)

  document.body.append(userNameBlock)

  userNameForm.addEventListener('click', (event) => {
    const { target } = event
    if (userNameInput.value && target.className === 'username__submit') {
      userNameBlock.style.display = 'none'
      contextMenu.open()
      contextMenu.close()
      welcomeMessage2(
        `Привет ${userNameInput.value}. Для начала работы нажми правую кнопку мыши! Там много интересного :)`
      )
      return
    }
  })

  return userNameBlock
}

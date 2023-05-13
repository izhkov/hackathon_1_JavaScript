import './styles.css'
import { ContextMenu } from './menu'
import { welcomeMessage } from './html'
import { TimerModule } from './modules/timer.module'
import { ClicksModule } from './modules/clicks.module'

const contextMenu = new ContextMenu('#menu')
const timerModule = new TimerModule('timer', 'Таймер отсчета')
const clicksModule = new ClicksModule('clicks', 'Аналитика кликов (20 секунд на рисование кружками)')

welcomeMessage()

const modules = []

modules.push(timerModule)
modules.push(clicksModule)
modules.forEach((module) => {
  contextMenu.add(module)
})

contextMenu.open()
contextMenu.close()

document.addEventListener('click', (event) => {
  const { target } = event

  if (target.dataset.type === 'timer') {
    timerModule.trigger()
  }
  if (target.dataset.type === 'clicks') {
    clicksModule.trigger()
  }
})

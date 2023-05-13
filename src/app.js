import './styles.css'
import { ContextMenu } from './menu'
import { welcomeMessage } from './html'
import { TimerModule } from './modules/timer.module'

const contextMenu = new ContextMenu('#menu')
const timerModule = new TimerModule('timer', 'Таймер отсчета')

welcomeMessage()

const modules = []

modules.push(timerModule)
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
})

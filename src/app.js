import './styles.css'
import { ContextMenu } from './menu'
import { welcomeMessage } from './html'
import { TimerModule } from './modules/timer.module'
import { ClicksModule } from './modules/clicks.module'
import { MessagesModule } from './modules/messages.module'
import { ShapeModule } from './modules/shape.module'

const contextMenu = new ContextMenu('#menu')
const timerModule = new TimerModule('timer', 'Таймер отсчета')
const clicksModule = new ClicksModule(
  'clicks',
  'Аналитика кликов (20 секунд на рисование кружками)'
)
const messagesModule = new MessagesModule('messages', 'Кастомное сообщение')
const shapedModule = new ShapeModule('shape', 'Случайная фигура')

welcomeMessage()

const modules = []

modules.push(timerModule, clicksModule, messagesModule, shapedModule)
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
  if (target.dataset.type === 'messages') {
    messagesModule.trigger()
  }
  if (target.dataset.type === 'shape') {
    shapedModule.trigger()
  }
})

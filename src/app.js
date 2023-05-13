import './styles.css'
import { ContextMenu } from './menu'
import { welcomeMessage } from './html'

const contextMenu = new ContextMenu('#menu')
welcomeMessage()

const modules = []

contextMenu.open()
contextMenu.close()

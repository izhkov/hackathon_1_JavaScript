import { Menu } from './core/menu'

export class App {
    #TimerModule
    constructor() {
        this.#TimerModule = new TimerModule;
    } 

    run(){
        const timerBlockHTML = this.#TimerModule.render();
        document.body.append(timerBlockHTML)
    }
}
export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
  }

  open() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      this.el.style.top = `${event.clientY}px`
      this.el.style.left = `${event.clientX}px`
      this.el.classList.add('open')
    })
  }

  add(text) {
    this.el.insertAdjacentHTML('beforeend', text.toHTML())
  }

  close() {
    document.addEventListener('click', (event) => {
      this.el.classList.remove('open')
    })
  }
}

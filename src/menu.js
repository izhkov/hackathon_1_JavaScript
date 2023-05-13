import { Menu } from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
  }

  open() {
    document.addEventListener('contextmenu', (event) => {
      // event.preventDefault()
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

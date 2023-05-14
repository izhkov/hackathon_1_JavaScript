import { Module } from '../core/module'

let i = 0

export class ClockModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.clock = document.createElement('div')
  }
  trigger() {
    this.clock.className = 'clock'
    document.body.append(this.clock)
    setInterval(this.timer, 1000)
    setInterval(this.rotateElem, 1000)
  }

  timer() {
    let time = new Date()
    document.querySelector('.clock').innerHTML = time.toLocaleTimeString()
  }

  rotateElem() {
    i += 3
    document.querySelector('.clock').style.transform = `rotate(${i}deg)`
  }
}

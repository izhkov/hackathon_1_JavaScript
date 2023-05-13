import { Module } from '@/core/module'

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    trigger() {
        document.body.style.background = this.#randomColor()
    }

    // Генерация случайного цвета
    #randomColor() {
        const letters = '0123456789ABCDEF'
        let color = '#'
        while (color.length < 7) {
            color += letters[Math.floor(Math.random() * letters.length)]
        }
        return color
    }

}

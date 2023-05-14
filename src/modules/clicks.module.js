import { Module } from '../core/module'

import { ClicksCircles } from '../controllers/clicksCircles'

export class ClicksModule extends Module {
    constructor(type, text, time = 20000) {
        super(type, text)

        this.singleClickCount = 0
        this.doubleClickCount = 0
        this.prepareTimerCount = 3
        this.timeForAnalytics = time
        this.isTriggered = false
        this.clicksCircles = new ClicksCircles()

        document.addEventListener(
            'click',
            this.#increaseSingleClickCount.bind(this)
        )
        document.addEventListener(
            'dblclick',
            this.#increaseDoubleClickCount.bind(this)
        )
    }

    // Увеличивает счетчик в зависимости от типа клика
    #increaseCount(clickType) {
        switch (clickType) {
            case 'click':
                this.singleClickCount++
                break
            case 'dblclick':
                this.singleClickCount -= 2
                this.doubleClickCount++
                break
        }
    }

    // Вызывает увеличение счетчика для одиночного клика
    #increaseSingleClickCount(event) {
        if (this.isTriggered) {
            this.#increaseCount('click')
            this.clicksCircles.createCircle('click', event.clientX, event.clientY)
        }
    }

    // Вызывает увеличение счетчика для двойного клика
    #increaseDoubleClickCount(event) {
        if (this.isTriggered) {
            this.#increaseCount('dblclick')
            this.clicksCircles.createCircle('dblclick', event.clientX, event.clientY)
        }
    }

    // Генерирует отчет с количеством кликов
    #showAnalytics() {
        alert(
            `Поздравляем!\nВы сделали ${this.singleClickCount} обычных кликов и ${this.doubleClickCount} двойных кликов.`
        )
        this.clicksCircles.removeCircles()
    }


    // Действия при окончании отсчета и вызывает отчет
    #onTimeoutDown() {
        this.isTriggered = false
        this.timerUntilStop = null
        this.#showAnalytics()
    }

    #startAnalytics() {
        this.prepareTimerElement.remove()

        this.isTriggered = true

        this.timerUntilStop = setTimeout(
            this.#onTimeoutDown.bind(this),
            this.timeForAnalytics
        )
    }

    #createPrepareTimer() {
        this.prepareTimerElement = document.createElement('div')
        this.prepareTimerElement.classList.add('clicks-start-timer')

        document.body.appendChild(this.prepareTimerElement)
    }

    #startPrepareTimer() {
        this.prepareTimerElement.textContent = this.prepareTimerCount--

        const timer = setInterval(() => {
            this.prepareTimerElement.textContent = this.prepareTimerCount
                ? this.prepareTimerCount
                : 'Начали'

            if (!this.prepareTimerCount) {
                setTimeout(() => {
                    clearInterval(timer)
                    this.#startAnalytics()
                }, 600)
            }

            this.prepareTimerCount--
        }, 1000)
    }

    // Входная точка основной метод модуля
    trigger() {
        if (this.timerUntilStop) {
            const reset = confirm('Начать подсчет кликов заново?')
            if (reset) {
                clearTimeout(this.timerUntilStop)
            } else {
                return
            }
        }

        this.singleClickCount = 0
        this.doubleClickCount = 0
        this.prepareTimerCount = 3

        this.#createPrepareTimer()
        this.#startPrepareTimer()
    }
}

import { Module } from '../core/module';

export class ClicksModule extends Module {
    constructor(type, text, time = 5000) {
        super(type, text);

        this.singleClickCount = 0;
        this.doubleClickCount = 0;
        this.timeForAnalytics = time;
        this.isTriggered = false;

        document.addEventListener('click', this.#increaseSingleClickCount.bind(this));
        document.addEventListener('dblclick', this.#increaseDoubleClickCount.bind(this));
    }

    // Увеличивает счетчик в зависимости от типа клика
    #increaseCount(clickType) {
        if (this.isTriggered) {
            switch (clickType) {
                case 'click':
                    this.singleClickCount++;
                    break;
                case 'dblclick':
                    this.singleClickCount -= 2;
                    this.doubleClickCount++;
                    break;
            }
        }
    }

    // Вызывает увеличение счетчика для одиночного клика
    #increaseSingleClickCount() {
        this.#increaseCount('click');
    }

    // Вызывает увеличение счетчика для двойного клика
    #increaseDoubleClickCount() {
        this.#increaseCount('dblclick');
    }

    // Генерирует отчет с количеством кликов 
    #showAnalytics() {
        alert(`Поздравляем!\nВы сделали ${this.singleClickCount} обычных кликов и ${this.doubleClickCount} двойных кликов.`);
    }

    // Действия при окончании отсчета и вызывает отчет
    #onTimeoutDown() {
        this.isTriggered = false;
        this.#showAnalytics();
    }

    // Входная точка основной метод модуля
    trigger() {
        if (this.timerUntilStop) {
            const reset = confirm('Начать подсчет кликов заново?');
            if (reset) {
                clearTimeout(this.timerUntilStop);
            } else {
                return;
            }
        }

        this.singleClickCount = 0;
        this.doubleClickCount = 0;

        this.isTriggered = true;

        this.timerUntilStop = setTimeout(this.#onTimeoutDown.bind(this), this.timeForAnalytics);
    }
}


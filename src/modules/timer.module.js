// import {Module} from '../core/module'

export class TimerModule { //extends Module {
    #timerContainer
    #timerTextHTML
    constructor() {
        // super(type);
        this.#timerContainer = document.createElement('div');
        this.#timerTextHTML = document.createElement('h2');
    }

    render() {
        this.#timerContainer.id = 'timer';
        this.#timerTextHTML.className = 'timer-text';
        this.#timerTextHTML.textContent = 'Таймер'

        const timerInput = document.createElement('input');
        timerInput.type = 'number';
        timerInput.id = 'timerInput';
        timerInput.placeholder = 'Введите время (в секундах)';
       
        const startButton = document.createElement('button');
        startButton.id = 'startButton';
        startButton.textContent = 'Старт'

        const timerDisplay = document.createElement('div');
        timerDisplay.id = 'timerDisplay'

        this.#timerContainer.append(this.#timerTextHTML, timerInput, startButton, timerDisplay);
        return this.#timerContainer;
    }
}
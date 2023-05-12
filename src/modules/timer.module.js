// import {Module} from '../core/module'

export class TimerModule { //extends Module {
    #timerContainer
    #timerTextHTML
    #startButton
    #timerInput
    #timerDisplay
    constructor() {
        // super(type);
        this.#timerContainer = document.createElement('div');
        this.#timerTextHTML = document.createElement('h2');
        this.#startButton = document.createElement('button');
        this.#timerInput = document.createElement('input');
        this.#timerDisplay = document.createElement('div');
        this.countdown = null;

        this.#startButton.addEventListener('click', this.startTimer.bind(this));
    }

    render() {
        this.#timerContainer.id = 'timer';
        this.#timerTextHTML.className = 'timer-text';
        this.#timerTextHTML.textContent = 'Таймер'

        this.#timerInput.type = 'number';
        this.#timerInput.id = 'timerInput';
        this.#timerInput.placeholder = 'Введите время (в секундах)';
       
        this.#startButton.id = 'startButton';
        this.#startButton.textContent = 'Старт'

        this.#timerDisplay.id = 'timerDisplay'

        this.#timerContainer.append(this.#timerTextHTML, this.#timerInput, this.#startButton, this.#timerDisplay);
        return this.#timerContainer;
    }

    startTimer() {
        const timeInSeconds = parseInt(this.#timerInput.value);
    
        if (isNaN(timeInSeconds)) {
          this.#timerDisplay.textContent = 'Введите корректное время';
          return;
        }
    
        let seconds = timeInSeconds;
    
        this.countdown = setInterval(() => {
          if (seconds <= 0) {
            clearInterval(this.countdown);
            this.#timerDisplay.textContent = 'Время истекло';
            return;
          }
    
          this.displayTime(seconds);
          seconds--;
        }, 1000);
      }
    
      displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);     
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours > 0 ? this.formatTime(hours) : '';
    // Удаление ведущих нулей для минут
    const formattedMinutes = minutes > 0 ? this.formatTime(minutes) : '';

    // Удаление ведущих нулей для секунд
    const formattedSeconds = this.formatTime(remainingSeconds);

    // Формирование времени для отображения
    let displayTime = '';
    if (formattedHours) {
        displayTime += `${formattedHours}:`;
      }
    if (formattedMinutes) {
      displayTime += `${formattedMinutes}:`;
    }
    displayTime += formattedSeconds;

    this.#timerDisplay.textContent = displayTime;
      }
    
      formatTime(time) {
        return time < 10 ? `0${time}` : time;
      }

}
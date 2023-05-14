import { Module } from '../core/module'

export class TimerModule extends Module {
  constructor(type, text) {

    super(type, text);

    this.timerContainer = document.createElement("div");
    this.timerTextHTML = document.createElement("h2");
    this.startButton = document.createElement("button");
    this.timerInput = document.createElement("input");
    this.timerDisplay = document.createElement("div");
    this.closeButton = document.createElement("button");
    this.audioStart = document.createElement("audio");
    this.audioClose = document.createElement("audio");
    this.audioFinish = document.createElement("audio");
    this.audioError = document.createElement("audio");
    this.audioClock = document.createElement("audio");
    


    this.countdown = null;
    this.timerRunning = false;

    this.startButton.addEventListener("click", () => {
      this.startTimer();
    });
    this.closeButton.addEventListener("click", () => {
      this.audioClose.play()
      this.closeTimer();
    });;

  }

  render() {
    this.timerContainer.id = 'timer'
    this.timerTextHTML.className = 'timer-text'
    this.timerTextHTML.textContent = 'Таймер'

    this.timerInput.type = 'number'
    this.timerInput.id = 'timerInput'
    this.timerInput.placeholder = 'Введите время (в секундах)'

    this.startButton.id = 'startButton'
    this.startButton.textContent = 'Старт'


    this.audioStart.id = 'audio-Start'
    this.audioStart.src = 'src/audio/mlg-airhorn.mp3'

    this.audioFinish.id = 'audio-Finish'
    this.audioFinish.src = 'src/audio/eralash.mp3'

    this.audioError.id = ' this.audioError'
    this.audioError.src = 'src/audio/nepravilno.mp3'

    this.audioClock.id = ' this.audioError'
    this.audioClock.src = 'src/audio/gendal.mp3'

    this.closeButton.id = "close-button"
    
    this.timerDisplay.id = "timerDisplay";

    this.timerContainer.append(
      this.closeButton,
      this.closeButton,
      this.timerTextHTML,
      this.timerInput,
      this.startButton,

      this.timerDisplay,
      this.audioStart,
      this.audioFinish,
      this.audioError,
      this.audioClock
    );
    return this.timerContainer;

  }

  closeTimer() {

    clearInterval(this.countdown);
    this.audioClock.pause();
    this.timerContainer.remove();
  }



  startTimer() {
    const timeInSeconds = parseInt(this.timerInput.value)
    if (isNaN(timeInSeconds)) {

      this.timerDisplay.textContent = "Введите цифру";
      this.audioError.play()
      return;
    } else {
      this.audioStart.play()
    }

    let seconds = timeInSeconds;
    setTimeout(() => {
      this.audioClock.play()
    }, 2000);
    
     
 
    
    this.countdown = setInterval(() => {
      if (seconds <= 0) {
        this.audioClock.pause()
        clearInterval(this.countdown);
        this.timerDisplay.textContent = "Время истекло"
        this.audioFinish.play() 
        setTimeout(() => {

          this.timerContainer.remove();
        }, 1800);
        return;
      }
     
      this.displayTime(seconds);
      seconds--;
    }, 1000);
    this.timerInput.value = "";
    this.timerInput.remove();
    this.startButton.remove();

  }

  displayTime(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    const formattedHours = hours > 0 ? this.formatTime(hours) : ''
    const formattedMinutes = minutes > 0 ? this.formatTime(minutes) : ''
    const formattedSeconds = this.formatTime(remainingSeconds)

    let displayTime = ''
    if (formattedHours) {
      displayTime += `${formattedHours}:`
    }
    if (formattedMinutes) {
      displayTime += `${formattedMinutes}:`
    }
    displayTime += formattedSeconds

    this.timerDisplay.textContent = displayTime
    const randomColor = this.getRandomColor()
    this.timerDisplay.style.color = randomColor
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  formatTime(time) {
    return time < 10 ? `0${time}` : time
  }

trigger() {
  this.audioClose.id = 'audioClose'
  this.audioClose.src = 'src/audio/minecraft.mp3'
  const timerBlockHTML = this.render();
  document.body.append(timerBlockHTML, this.audioClose);
}

}

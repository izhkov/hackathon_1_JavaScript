import {Menu} from './core/menu'
import { TimerModule } from './modules/timer.module'

export class App {
    #TimerModule
    constructor() {
        this.#TimerModule = new TimerModule;
    } 

    run(){
        const timerBlockHTML = this.#TimerModule.render();
        document.body.append(timerBlockHTML);
    }
}
export class ContextMenu extends Menu {

}
import {Module} from '../core/module'

export class MessagesModule extends Module {
    constructor(type, text) {
        super(type, text)
        
        this.content = ['Мы знаем, что любим кого-то таким какой он есть, но не можем знать, полюбили бы мы его, если он был другим.', 'Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть.', 'Не стоит принимать доброту за слабость, грубость за силу, а подлость за умение жить.', 'Никто не ценит того, чего слишком много.', 'Невозможно победить того, кто не сдается.', 'Одна из самых трудных в жизни вещей — хранить в сердце слова, которые нельзя произносить.',];
    }
    //Появление кастомного сообщения
    trigger() {
        let customBlock = document.createElement("div");
        customBlock.className = "custom-block";
        const message = document.createElement("p");
        message.className = "message";
        message.textContent = this.content[Math.floor(Math.random() * this.content.length)];
        customBlock.append(message);
        document.body.append(customBlock);
        setTimeout(() => {customBlock.style.display = 'none'},5000)
    }
}
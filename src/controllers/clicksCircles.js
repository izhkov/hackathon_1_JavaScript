export class ClicksCircles {
    constructor() {
        this.circles = [];
    }

    createCircle(clickType, positionX, positionY) {
        const circle = document.createElement('div');
        circle.classList.add('click-circle');

        switch (clickType) {
            case 'click':
                circle.classList.add('sglclick-circle');
                break;
            case 'dblclick':
                circle.classList.add('dblclick-circle');
                break;
        }
        circle.style.top = positionY - 10 + 'px';
        circle.style.left = positionX - 10 + 'px';

        this.circles.push(circle);
        document.body.appendChild(circle);
    }

    removeCircles() {
        let circle;

        while (circle = this.circles.pop()) {
            circle.remove();
        }
    }



}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var thirtyseconds = 30,
        display = document.querySelector('#time');
    startTimer(thirtyseconds, display);
};
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor(limit = 4) {
        this.front = null;
        this.back = null;
        this.length = 0;
        this.limit = limit;
        this.waitingTime = startTimer;
    }

    isFull = () => this.length === this.limit;

    isEmpty = () => this.length === 0;

    peek = () => this.waitingTime;

    addNode = (size) => {
        const newNode = new Node(size);
        if (this.isEmpty()) this.front = newNode;
        else this.back.next = newNode;

        this.back = newNode;
        this.length++;
        this.waitingTime += size * 0.5;
    };
    enqueue = (size) => {
        if (this.isFull()) {
            console.log(`The line is full. Come back after ${this.waitingTime} minutes`);
        } else {
            let peopleNum = size;
            while (peopleNum > 12) {
                this.addNode(12);
                peopleNum -= 12;
            }
            this.addNode(peopleNum);
        }
    };

    dequeue = () => {
        if (this.isEmpty()) {
            console.log("Queue is empty, no one to ride!");
        } else {
            const removed = this.front;
            if (this.length === 1) {
                this.front = null;
                this.back = null;
            } else {
                this.front = removed.next;
            }
            this.length--;
            this.waitingTime -= removed.size * 0.5;
            return removed.size;
        }
    };
}

const out = new Queue(2);
console.log(out.peek());
out.enqueue(10);
console.log(out.peek());
out.enqueue(12);
console.log(out.peek());
out.enqueue(45);
console.log(out.peek());
out.enqueue(22);
console.log(out.peek());

console.log(out.dequeue());
console.log(out.dequeue());

// sole.log("This many in queue", out.waitingTime * 2);

console.log(out.peek());

// console.log("Back node", out.back.size);
startTimer
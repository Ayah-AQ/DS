
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next

    }
}
class Queue {
    constructor(limit = 12) {
        this.front = null
        this.back = null
        this.size = 0
        this.time = 0
        this.limit = limit
    }

    isFull = () => this.size === this.limit
    isEmpty = () => this.size === 0
    peek = () => {
        if (this.isEmpty()) console.log('Queue is empty!');
        else return this.front.data;
    }


    enqueue(data) {
        if (this.isFull()) {
            console.log(` OOPS! it's full. Come back after ${this.time } minutes`);
        } else {
            const newNode = new Node(data);
            if (this.isEmpty()) {

                this.front = newNode
                this.back = newNode;
                this.time = this.time + data * 0.5;
            } else {

                this.back.next = newNode
                this.back = newNode;

                this.time = this.time + data * 0.5;
            }
            this.size++;
        }

    }


    dequeue(data) {

        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            const removed = this.front;
            if (this.length === 1) {
                this.front = null;
                this.back = null;
            } else {
                this.front = removed.next;
            }
            this.length--;
            this.time -= removed.data * 0.5;
            return removed.data;
        }
    };

}

const q = new Queue(4);
group = [12, 14, 7, 5, 17, 10];
console.log('you nee to wait for: ' + q.time + ' mins');

group.forEach((x) => {

    if (x > 12) {
        console.log(`OOPS! u need to separate only 12 can enter`)
        q.enqueue(12)

        return x = x - 12;
    }
    var timeLeft = 30;
    var elem = document.getElementById('some_div');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }

});


q.dequeue();
console.log('the size of next group in the line: ' + q.peek());
console.log('you need to wait for: ' + q.time + ' mins');

q.dequeue();
console.log('the size of next group in the line: ' + q.peek());
console.log('you need to wait for:' + q.time + ' mins');



console.log(`you need to wait for ${q.peek()} minutes.`);
q.dequeue();
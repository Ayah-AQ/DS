class Node {
    constructor(groupSize, next = null) {
        this.groupSize = groupSize;
        this.next = next;
    }
}

class Queue {
    constructor(limit = 10) {
        this.frontNode = null;
        this.backNode = null;
        this.limit = limit;
        this.size = 0;
        this.waitingTime = 0;
    }

    isEmpty = () => this.size === 0;

    isFull = () => this.size === this.limit;

    peek = () => {
        if (this.isEmpty()) console.log('Empty queue!');
        else return this.frontNode.groupSize;
    };

    enqueue = (groupSize) => {
        if (this.isFull()) console.log("There's no place for you here");
        else {
            const newNode = new Node(groupSize);
            if (this.isEmpty()) {
                // the new node is both the front and back node
                this.frontNode = newNode;
                this.backNode = newNode;
                this.waitingTime = this.waitingTime + groupSize * 0.5;
            } else {
                // link the backnode to the new node then make the newnode the backnode
                this.backNode.nextNode = newNode;
                this.backNode = newNode;
                this.waitingTime = this.waitingTime + groupSize * 0.5;
            }
            this.size++;
        }
    };

    dequeue = () => {
        if (this.isEmpty()) {
            console.log('OOps! Nothing to remove.');
        } else {
            const removedNode = this.frontNode;
            if (this.size === 1) {
                this.frontNode = null;
                this.backNode = null;
                this.waitingTime = 0;
            } else {
                this.frontNode = removedNode.nextNode;
                this.waitingTime = this.waitingTime - this.frontNode.groupSize * 0.5;
            }
            this.size--;
            return removedNode.groupSize;
        }
    };
}

const rideQueue = new Queue(4);

groups = [2, 4, 13, 3, 7, 8];
console.log('waiting time: ' + rideQueue.waitingTime + ' mins');

groups.forEach((group) => {
    if (!rideQueue.isFull()) {
        while (group > 12) {
            rideQueue.enqueue(12);

            group = group - 12;
        }
        rideQueue.enqueue(group);
    }
});

console.log('waiting time: ' + rideQueue.waitingTime + ' mins');

rideQueue.dequeue();
console.log('the next groupSize in the line: ' + rideQueue.peek());
console.log('waiting time: ' + rideQueue.waitingTime + ' mins');
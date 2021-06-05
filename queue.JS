
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
    peek = () =>{
    this.isEmpty()? `No time to wait`
      : `${this.size} groups of people in front of u. You have to wait ${this.time} min`;}


      addnode = (data) => {
        const newNode = new Node(data);
        if (this.isEmpty()) this.front = newNode;
        else this.back.next = newNode;
        this.back = newNode;
        this.size++;
        this.time += data * 0.5;
        console.log(
          `${this.size} groups of people in front of u. You have to wait ${this.time} min`
        );
      };
        enqueue = (data) => {
            if (this.isFull()) {
              console.log("Line is Full");
            } else {
              let peoplenum = data;
              while (peoplenum > 12) {
                this.addnode(12);
                peoplenum -= 12;
              }
              this.addnode(peoplenum);
            }
          };
        
          dequeue = () => {
            if (this.isEmpty()) {
              console.log("Queue is Empty");
            } else {
              const removed = this.front;
              if (this.size === 1) {
                this.front = null;
                this.back = null;
              } else {
                this.front = removed.next;
              }
              this.size--;
              this.time -= removed.data * 0.5;
              return `\nThe front group entered. ${this.size} groups left. You have to wait ${this.time} min`;
            }
          };
        }

        const ride = new Queue(10);

        ride.enqueue(2);
        ride.enqueue(8);
        ride.enqueue(16);
        ride.enqueue(20);
        ride.enqueue(6);
       
        
        console.log(ride.dequeue()); 
        console.log(ride.dequeue()); 



const prompt = require('prompt-sync')({sigint: true});
class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
    addChild(node){
        if(this.children.length < 2){
            this.children.push(node)
            console.log("added a child to",this.data);
        }
        else console.log("not accepted this child");
    }
    haveChild = (data) => {
        for (let i = 0; i < this.children.length; i++) {
            const element = this.children[i];
            if(element.data===node) return i;
        }
        return -1
       };

}
let root = new Node("family");
let inter = prompt("Enter Child full name (type 'done' to exit): ");

while (inter !== "done"){
    let current = root;

    let names = inter.split(" ").reverse();
   names.shift();

for (let name of names){
    if(names === current.name){
    
            
                let parent = current.parrent(name);
                if (parent){ 
                    current.addChild(newnode);
                    current = parent;
                     names.shift()
                } else if (current.haveChild ===-1){ 
            current=current.children[current.haveChild(names)]
            all.shift()
                                       current = newChild;
                }
                else{
                    console.log("parent does not exist");
                    break;
                }

        }

        
    }
   
    console.log("------------------------------------------");
    inter = prompt("Enter Child full name (type 'done' to exit): ");
}
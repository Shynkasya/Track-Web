class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = null;
    }
    add(value){
        let node = new Node(value)
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }
    remove(value){
        if (this.head === null) return false;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }
        if (current.next === null) {
            return false;
        }
        current.next = current.next.next;
        return true;
    }
    contains(value){
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    [Symbol.iterator](){
        let current = this.head
        return {
            next() {
                if (current === null) return {value: undefined, done: true}
                let value = current.value
                current = current.next
                return {
                    done: false,
                    value: value
                };
            }
        }
    }
    clear(){
        this.head = null
    }
    count(){
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
    log(){
        let current = this.head;
        if(current === null) return
        let str = String(current.value)
        current = current.next;
        while (current !== null) {
            str = str.concat(", ", current.value)
            current = current.next;
        }
        console.log(str);
    }
}
function createLinkedList(arr) {
    const list = new LinkedList();
    for(element in arr){
        list.add(arr[element])
    }
    return list;
}


// const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
// ll.log();
// // "100, 1, 2, 3, 100, 4, 5, 100"
// while(ll.remove(100));
// ll.log();
// // "1, 2, 3, 4, 5"
// ll.add(10);
// ll.log();
// // "1, 2, 3, 4, 5, 10"
// console.log(ll.contains(10));
// // "true"
// let sum = 0;
// for (const n of ll) {
//  sum += n;
// }
// console.log(sum);
// // "25"
// ll.clear();
// ll.log();
// // "
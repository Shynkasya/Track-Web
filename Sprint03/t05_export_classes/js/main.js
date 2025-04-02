import {HardWorker} from './modules/hard-worker.js';
const worker = new HardWorker("", 10, 1000);
worker.name = 'Bruce';
console.log(worker.name);
// Bruce
worker.age = 49;
worker.salary = 1500;
console.log(worker.toObject());
// Object { name: "Bruce", age: 49, salary: 1500 }
worker.name = 'Linda';
worker.age = 139;
console.log(worker.toObject());
// Object { name: "Linda", age: 49, salary: 1500 }
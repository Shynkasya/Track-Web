class Timer{
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.timer_id = null;
    }
    start(){
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`)
        this.timer_id = setInterval(() => this.tick(), this.delay)
    }
    tick(){
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`)
        this.stopCount--;
        if(this.stopCount === 0){
            this.stop()
        }
    }
    stop(){
        console.log(`Timer ${this.title} stopped`)
        clearInterval(this.timer_id)
    }
}

function runTimer(id, delay, counter){
    let timer = new Timer(id, delay,counter);
    timer.start();
}




//runTimer("Bleep", 1000, 5);
/*
Console output:
Timer Bleep started (delay=1000, stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/
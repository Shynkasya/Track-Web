function* generator(){
    let res = 1;
    while(true){
        let num = prompt(`Previous result: ${res} Enter a new number:`)
        if(isNaN(num)){
            console.error("Invalid number!");
            yield -1
            break;
        }else{
            res += +num
            if(res >= 10000) res = 1
            yield res
        }
    }
}

var gen = generator();

while(true) {
    if(gen.next().value == -1){
        break
    }
}
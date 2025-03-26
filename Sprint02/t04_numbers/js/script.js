function checkDivision(beginRange = 1, endRange = 100){
    let res
    for(let i = beginRange; i <= endRange; i++){
        res = String(i)
        let flag = false
        if(i % 2 != 0 && i % 3 != 0 && i % 10 != 0){
            res = res.concat(" ", "-")
            console.log(res)
        }else{
            res = res.concat(" ", "is")
            if(i % 2 == 0){
                res = res.concat(" ", "even")
                flag = true
            }
            if(i % 3 == 0){
                if(flag) res = res.concat("", ",")
                res = res.concat(" ", "a multiple of 3")
                flag = true
            }
            
            if(i % 10 == 0){
                if(flag) res = res.concat("", ",")
                res = res.concat(" ", "a multiple of 10")
            }
            console.log(res)
        }
    }
}


let str_num0 = prompt("Enter a begin of range");
let num0
if(str_num0 == "0"){
    num0 = 0;
}else{
    num0 = +str_num0
    if(!num0) num0 = 1;
}
let num = +prompt("Enter an end of range");
if(!num) num = 100;
checkDivision(num0, num)
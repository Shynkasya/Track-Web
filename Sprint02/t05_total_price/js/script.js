function total(addCount = 0, addPrice = 0, currentTotal = 0){
    let res = addCount * addPrice
    if(typeof(currentTotal) != "number"){
        return res;
    }
    res = res + currentTotal
    return parseFloat(res.toFixed(2))
    //return res;
}
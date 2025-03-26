function concat(string1, string2) {
    function concat() {
        func1.count++;
        return string1 + " " + string2;
    };
    let func1 = function() {
        string2 = prompt("Enter the second string:");
        return concat(string1, string2);
    };
    if (typeof(string2) != "undefined") {
        return concat()
    }
	func1.count = 0;
    return func1;
}
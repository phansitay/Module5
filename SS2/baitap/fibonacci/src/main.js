function isFibonacci(number) {
    if (number == 1 || number == 0 || number == 2 || number == 3) {
        return number;
    }
    else {
        return isFibonacci(number - 2) + isFibonacci(number - 1);
    }
}
console.log("tổng : " + isFibonacci(13));

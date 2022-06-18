function fatorialRecursivo(n) {
    if (n<=1) {
        return 1;
    }
    var result = n * fatorialRecursivo(n -1);
    return result;
}

console.log(fatorialRecursivo(10));
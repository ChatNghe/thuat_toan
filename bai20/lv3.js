function ucln(a, b) {
    if (b) {
        return ucln(b, a % b);
    } else {
        return Math.abs(a);
    }
}

console.log(ucln(15,20))

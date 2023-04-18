function power(a, b) {
    // điều kiện dừng đệ quy
    if (b === 0) {
        return 1;
    }
    // gọi lại chính nó
    return a * power(a, b - 1);
}

console.log(power(2,4))
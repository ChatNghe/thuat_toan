let arr = [1, 3, 5, 4, 1, 2, 3, 8, 7]
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr[j] = ''
            }
        }

    }
}
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") newArr.push(arr[i])
}
console.log(newArr.sort())
let a = [...newArr].sort()
let n = 5
let count = 0
for (let i = a.length - 1; i < a.length; i--) {
    count++;
    console.log(a[i])
    if (count === n) break;
}

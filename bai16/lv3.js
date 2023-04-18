let arr = [2 , 1,  2, 1, 3, 4, 2, 5]
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
    if(typeof arr[i] === "number") newArr.push(arr[i])
}
console.log(newArr)
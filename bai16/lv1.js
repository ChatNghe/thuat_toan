let arr = [2, 1,  2, 1, 3, 4,2, 5]

let count = 0
for (let i = 0; i < arr.length; i++) {
    count = 1
    if (typeof arr[i] === "number") {
        console.log(arr[i])
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++
                arr[j] = ''
            }
        }
        console.log(count)
    }

}

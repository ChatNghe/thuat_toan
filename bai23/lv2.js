let arr = [1, 2, 3, 6, 4, 5]

function findMax(arr) {

    if (arr.length === 1) {
        return arr[0];
    } else {
        const max = findMax(arr.slice(1));
        if(arr[0] > max) return arr[0]
        else return max;
    }

}

console.log(findMax(arr))
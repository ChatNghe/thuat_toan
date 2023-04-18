let i = 0
let flag = true
function check(str){
    if(str[i] !== str[str.length-1-i]){
        flag = false
    }
    i++;
    console.log(flag)
    if (flag === false) return 'không đối xứng'
    if (flag === true && i <str.length -1) return check(str)
    if(flag === true && i === str.length -1) return 'đối xứng'
}

console.log(check('13521'))


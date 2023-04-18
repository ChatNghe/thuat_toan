let a = 22
let str = ''
switch (Math.floor(a/10)){
    case 1:
        str += 'Mười'
        break;
    case 2:
        str += 'Hai mươi'
        break;
    case 3:
        str += 'Ba mươi'
        break;
    case 4:
        str += 'Bốn mươi'
        break;
    case 5:
        str += 'Năm mươi'
        break;
    case 6:
        str += 'Sáu mươi'
        break;
    case 7:
        str += 'Bảy mươi'
        break;
    case 8:
        str += 'Tám mươi'
        break;
    case 9:
        str += 'Chín mươi'
        break;
}
switch (a - Math.floor(a/10)*10){
    case 1:
        str += ' một'
        break;
    case 2:
        str += ' hai'
        break;
    case 3:
        str += ' ba'
        break;
    case 4:
        str += ' bốn'
        break;
    case 5:
        str += ' năm'
        break;
    case 6:
        str += ' sáu'
        break;
    case 7:
        str += ' bảy'
        break;
    case 8:
        str += ' tám'
        break;
    case 9:
        str += ' chín'
        break;
}
console.log(str)
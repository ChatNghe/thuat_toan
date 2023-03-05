let a = 121
let str = ''
switch (Math.floor(a/100)){
    case 1:
        str += 'Một trăm '
        break;
    case 2:
        str += 'Hai trăm '
        break;
    case 3:
        str += 'Ba trăm '
        break;
    case 4:
        str += 'Bốn trăm '
        break;
    case 5:
        str += 'Năm trăm '
        break;
    case 6:
        str += 'Sáu trăm '
        break;
    case 7:
        str += 'Bảy trăm '
        break;
    case 8:
        str += 'Tám trăm '
        break;
    case 9:
        str += 'Chín trăm '
        break;
}
switch (Math.floor((a - Math.floor(a/100)*100)/10)){
    case 1:
        str += 'mười'
        break;
    case 2:
        str += 'hai mươi'
        break;
    case 3:
        str += 'ba mươi'
        break;
    case 4:
        str += 'bốn mươi'
        break;
    case 5:
        str += 'năm mươi'
        break;
    case 6:
        str += 'sáu mươi'
        break;
    case 7:
        str += 'bảy mươi'
        break;
    case 8:
        str += 'tám mươi'
        break;
    case 9:
        str += 'chín mươi'
        break;
}
switch (a - Math.floor(a/10)*10){
    case 1:
        str += ' mốt'
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
let n = window.prompt("Nhập số:", 0);
let flag = true;

if (n < 2) {
    flag = false;
} else {
    for (var i = 2; i <= Math.sqrt(n) ; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
}
if(flag === true) 
{
    alert('là số nguyên tố');
} else {
    alert('không là số nguyên tố');
}
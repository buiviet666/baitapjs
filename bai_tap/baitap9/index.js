let num = 1234321;
num = parseInt(num);
let sum9 = 0;
let temp = num;

while (num > 0) {
    sum9 = sum9 * 10 + num % 10;
    num = Math.floor(num / 10);
}

if (sum9 === temp) {
    console.log('Yes');
} else {
    console.log('NO');
}

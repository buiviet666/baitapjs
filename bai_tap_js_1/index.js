
console.log('1-----------------')
// in ra cac so tu 1 den 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('2-----------------')
// viet ra so le

for (let i = 0; i < 10; i++) {
    if (i % 2 == 1)
    console.log(i);
}

console.log('3-----------------')
// viet in ra so chan

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0)
    console.log(i);
}

console.log('4----3333-------------')
// in ra so nguyen to

let reslut = true;
for(let i = 1; i < 10; i++) {
    if (i < 2) {
      console.log(i);
    } else {
      for(let j = 2; j < i; j++) {
        if(i % j == 0) {
          reslut = true;
        } 
        break;
      }
    }
}

console.log('5-----------------')
// tinh tong 1 den n

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i;   // sum = sum + i
}
console.log(sum);

console.log('6-----------------')
// tong binh phuong 1 den n

let summer = 0;
for (let i = 0; i <= 3; i++) {
    summer += i * i; // summer = summer + i*i
}
console.log(summer);


console.log('7-----------------')
// tinh tong cac so le tu khoang 1 den n

let fall = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        fall += i;
    }
    
}
console.log(fall);

console.log('0-----------------')
// kiem tra so nguyen to

/* let number = prompt("nhập số: ", 0)
console.log("Number: ", number);

if (number < 2) {
  console.log(number, "is not prime number: ", 0);
} else {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        count++;
    }
  }
  if (count === 2) {
    console.log(number + "là số nguyên tố");
  } else {
    console.log(number + "không phải là số nguyên tố");
  }
}
*/

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
}
else 
{
    alert('không là số nguyên tố');
}
console.log('9--------------------------');
// kiem tra n co phai so doi xung

while (n > 0) {
    console.log("n % 10", n % 10);
    n = parseInt(n / 10);
}

console.log('10----------------------------------')
//
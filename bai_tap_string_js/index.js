console.log("-------------------------------");
// // BÀI 11 đếm khoảng trắng

// let s = " hello  world";
// function countSpace(s)
// {
//     let count=0;
//     for(let i = 0; i < s.length; i++)
//     {
//         if(s.charAt(i)===' ') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log("countSpace: ", countSpace(s));

console.log("-------------------------------");
// // BÀI 12 remove khoảng trắng ...

// function remove() {
//     let x = window.prompt('Enter a String: ');
//     let s = x.split("");
//     for(let i = 0; i < s.length; i++ )
//     {
//         if( s[i] === " " || s[i] === "\t" || s[i] === "\n") {
//             s[i]="";
//         }
//     }
//     let s2 = s.join("");
//     console.log(s2);    
// }
//     remove();

console.log("-------------------------------");
// // BÀI 13 chương trình đảo

//     let x = window.prompt('Enter a String: ');
// function dao() {
//     let s = x.split("").reverse().join("");
//     console.log(s);
// }
//     dao();

console.log("-------------------------------");
// // BÀI 14 nhập chuỗi s1 vào s2 ....

// function nhapChuoi()
// {
//     var s1 = window.prompt('Enter a String1: ');
//     var s2 = window.prompt('Enter a String2: ');
//     var pos = s1.indexOf(s2);
//     console.log(pos);
// }
// nhapChuoi();

console.log("-------------------------------");
// // BÀI 15 chuẩn hóa họ tên


// function normalizeName() {
//     let x = window.prompt('Enter a String: ');
//     x = x.toLowerCase();
//     for(let i = 0; i < x.length; i++)
//     {
//         if(i == 0 || x[i-1] ==' ')
//         {
//             x = x.slice(0,i) + x[i].toLocaleUpperCase() + x.slice( i + 1 );
//         }
//     }
//     console.log(x);
// }
// normalizeName();

console.log("-------------------------------");
// // BÀI 16 lấy id name

// function layID()
// {
//     let x = window.prompt('Enter a String: ');
//     let s2 = 'https://www.facebook.com/';
//     let n = x.replace(s2, '');
//     console.log(n);
// }
// layID()

console.log("-------------------------------");
// // BÀI 17 lấy min max của 3 số

// function minmax3so()
// {
//     let s1 = window.prompt('nhập số thứ nhất: ');
//     let s2 = window.prompt('nhập số thứ hai: ');
//     let s3 = window.prompt('nhập số thứ ba: ');
//     let x = (s1>s2)?s1:s2;
//     let max = (x>s3)?x:s3;
//     let y =(s1<s2)?s1:s2;
//     let min =(y<s3)?y:s3;
    
//     console.log(min);
//     console.log(max);
// }
// minmax3so();

console.log("---------------------------------");
// // BÀI 18 hàm tìm xâu X tồn tại kề cuối xâu Y

// let s1 = window.prompt('enter a first string: ', );
// let s2 = window.prompt('enter a second string: ');

// function contain(s1, s2) {
//     let s3 = s1.split(" ");
//     console.log(s3.lastIndexOf(s2));
// }
//  contain(s1, s2);
 console.log("---------------------------------");
 // // BÀI 19 tính tổng 1 đến n

//  let n = Number(window.prompt('Enter a number: '));

//     function sum(n) {
//     if (n === 1) return 1;
//     return sum(n - 1) + n;
// }
// console.log(sum(n));
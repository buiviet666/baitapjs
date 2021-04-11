// bai 22 tim so lon nhat, nho nhat va so trung binh

// let array = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
// let max = 1;
// let min = 2;
// let tbc = 0;
// for (let i = 0; i < array.length; i++) 
// {
//     if (array[i] > max) {
//         max = array[i] ; 
//     } if (array[i] < min) {
//         min = array[i];
//     }
//     tbc += array[i];
// }
// console.log("so lon nhat: ", max);
// console.log("so nho nhat: ", min);
// console.log("so trung binh: ", tbc/array.length );

console.log("------------------------------------------");
// bai 23 tim so co tan suat xuat hien nhieu nhat

// let array = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
// let count = 0; // so lan lap lai
// let countMax = 1;
// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         if(array[i] === array[j]) {
//             count++;
//         }
//         if(count > countMax) {
//             countMax = count;
//         }
//     }
//     count = 0;
// }

// console.log(countMax);

console.log("-------------------------------------------");
// bai 24 loc bang b so nguyen to su dung filter

// let array = [1,2,3,2,3,4,6,7];

// function checkSNT(n) {
//     let flag = true;
//     if (n < 2) {
//         flag = true;
//     } else {
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     return flag;
// }
// let soNguyenTo = array.filter(n => {
//     return checkSNT(n);
// }) 
// console.log("in ra so nguyen to: ",soNguyenTo);

console.log("-------------------------------------------");
// bai 25 tao mang a binh phuong

// let array = [1,2,3,2,3,4,6,7];
// console.log("mang binh phuong: ", array.map(number => number * number));

console.log("---------------------------------------------");
//bai 28 hoc sinh ca biet cua lop co ten la "Do"

let studentDo = students.filter(student => {
    return student.lastName.split(' ')[0].indexOf('Do') != -1;    
})
console.log('học sinh có họ Do: ', studentDo);
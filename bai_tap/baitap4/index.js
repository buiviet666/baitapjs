let n = prompt("nhap n: ");
function nameNumber() {
  if (n < 2) {
    console.log("khong co so nguyen to nao");
  } else {
    for(let i = 1; i < 10; i++) {
      if (i < 2) {
        console.log(i);
      } else {
        for ( let j = 2; j < i; j++) {
          if(i % j === 0) {
            count++;
          }
        }
        if (count === 2) {
          console.log(i);
        }
      } 
    }
  }
}
nameNumber();
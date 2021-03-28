function check(n) {
    let t;
    while (n > 0) {
      t = n % 10;
      if(t % 2 == 1) {
        return true;
      }
      n /= 10; 
    }
    return false;
  }
  
  let n8 = 134;
  if (check(n8) === true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
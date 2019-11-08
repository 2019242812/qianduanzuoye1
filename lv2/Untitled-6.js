let  sumto=(n) => {
    if (n == 1) {
      return  n;
    } else {
      return  n+sumto(n-1);
    }
  }
  console.log(sumto(100)); 
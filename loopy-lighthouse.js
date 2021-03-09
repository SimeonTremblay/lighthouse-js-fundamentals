let num = 0;

for (num = 100; num >= 100 && num <= 200; num++) {
  {
    if (num % 3 === 0 && num % 4 === 0) {   //multiple of 3 and 4 goes here
      console.log("LoopyLighthouse");
    } else if (num % 3 === 0) {   //multiple of 3 goes here
      console.log("Loopy");
    } else if (num % 4 === 0) {   //multiple of 4 goes here
      console.log("Lighthouse");
    } else {
      console.log(num);
    }
  }
}

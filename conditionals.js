const raining = false;
const cold = false; 
const tempature = 16;

if (raining) {
  console.log("Dont forget your umbrella");
}

if (tempature < 0) {
  console.log("Make sure you pick out of a scarf!");
} else if (tempature < 15){
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine");
}

console.log("Now you're ready to go outside!");
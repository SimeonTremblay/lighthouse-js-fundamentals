const raining = false;
const cold = false; 
const tempature = 45;

if (raining) {
  console.log("Dont forget your umbrella");
}

if (!raining){
  console.log("Leave your umbrella at home!");
}

if (tempature < 0) {
  console.log("Make sure you pick out of a scarf!");
} else if (tempature < 15){
  console.log("Short sleeves won't cut it!");
} else if  (tempature < -40 || tempature > 40){
  console.log("Maybe going outside isn't such a great idea...");
} else{
  console.log("Short sleeves are fine");
}

console.log("Now you're ready to go outside!");


const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligable");
}
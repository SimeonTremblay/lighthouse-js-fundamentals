const sayHello = function (name) {
  console.log("Hello " + name);
}

sayHello("John");
sayHello("Mary");
sayHello("Will");
sayHello("Joe");



const returnSayHello = function (name){    //only returns the string "Hello John", does not ouput anything
  return "Hello, " + name;
}
const greeting = returnSayHello("Bud");



console.log(greeting); // will output the fucntion now that the assigned variable has been placed in  a console log






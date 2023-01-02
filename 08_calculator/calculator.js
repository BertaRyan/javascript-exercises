const add = function(a,b) {
	return a+b;
 
};

add(2,2)

const subtract = function(x,y) {
	return x-y
  
};



const sum = function(...x) {
  let sum = 0;
  for(let i =0; i<x.length; i++){
    sum = sum + x[i];
  }
  return sum 
};

sum(1,2,3,4,5)

const multiply = function(x,y) {

return x * y

};

multiply(4,5);


const power = function(x) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (n < 0 ){
    return -1;
  } else if (n == 0){
    return 1;
  } else {
    return n * (factorial(n-1))
  }
};

factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

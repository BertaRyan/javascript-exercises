const fibonacci = function(index=1) {
    if (index == ""){
        return 'ERROR';
    } else if (index < 3) {
        return 1;
    }
const sequence = [0, 1, 1]
 
  for(let i = 2; i< index;i++){
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length-2])
    
  }
  return sequence[index]
};



// Do not edit below this line
module.exports = fibonacci;

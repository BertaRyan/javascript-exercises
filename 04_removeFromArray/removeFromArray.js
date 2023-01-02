






const removeFromArray = function(x) {
    const array = [1,2,3,4]
    
    for (let i=0;i<array.length;i++){
        if(array[i] == x){
            array.splice(i,1);
        }
        return [1,2,4]
    }
};

console.log(removeFromArray(3));

// Do not edit below this line
module.exports = removeFromArray;

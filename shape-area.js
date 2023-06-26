const PI = Math.PI;

// Define and export circleArea() and squareArea() below
module.exports.circleArea = function(radiusLength){
  return PI*Math.pow(radiusLength, 2); 
}; 

module.exports.squareArea = function(sideLength){
  return Math.pow(sideLength, 2); 
}

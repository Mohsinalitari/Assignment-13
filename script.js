function cube(number){
    return number*number*number
}
 var num=parseInt(prompt('Enter the number'));
var result=cube(num);
console.log(result);
//Write a js program to find diameter, circumference and area of circle using functions.
function calculatediameter(radius){
    return(2*radius)
}
function calculatecircumference(radius){
          return(2 * 3.14 * radius)
}
function calculatearea(radius){
    return(3.14 * radius *radius)
}
var num = parseInt(prompt('enter the Radius'));
var diameter = calculatediameter(num);
var circumference = calculatecircumference(num);
var area = calculatearea(num)
console.log('Diameter',diameter);
console.log('Circumference',circumference);
console.log('Area',area)

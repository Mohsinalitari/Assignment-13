//Write a js program to find cube of any number using function.
function cube(number){
    return number*number*number
}
 var num=parseInt(prompt('Enter the number'));
var result=cube(num);
console.log(result);
//02 Write a js program to find diameter, circumference and area of circle using functions.
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
//03 Write a js program to find maximum and minimum between two numbers using functions.
function maximum(number,number1){
   return  (number > number1 ? number :number1);
}
//find two number between maximum number
function minimum(number,number1){
    return  (number < number1 ? number :number1);
}
//find two number between Mnimum number

var num = parseInt(prompt('Enter the first number'));
var num1 =parseInt(prompt('Enter the seocnd numbre'));
//input from user
var max= maximum(num,num1);
var min =minimum(num,num1);

console.log('Maximum Number is  ',max);
console.log('Minimum Number is  ',min);
//print data

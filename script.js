//01 Write a js program to find cube of any number using function.
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
//Calculate Even and Odd number
console.log('Maximum Number is  ',max);
console.log('Minimum Number is  ',min);
//print data
//Write a js program to check whether a number is even or odd using functions.
function find_even(num) {
    return num % 2 === 0;  // Check if the remainder is 0 when divided by 2
}

function find_odd(num) {
    return num % 2 !== 0;  // Check if the remainder is not 0 when divided by 2
}

var num = parseInt(prompt('Enter the number'));
var result = find_even(num);
var result1 = find_odd(num);

console.log("Is even:", result);
console.log("Is odd:", result1);
// Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
function Armstrong(number){
     var numberofdigit=number.toString().length   //number of length
      var sum=0;                                  // Expose sum = 0
      temp=number;
      while(temp>0){
      reminder=temp % 10;                          
      sum=sum+Math.pow(reminder,numberofdigit);        
      temp=Math.floor(temp / 10); 
      }
      if (sum === number){
        console.log('is an Armstrong Number')
      }
      else{
        console.log('is not an Armstrong Number')
      }
}

//find Perfect
   function perfect(number){
    var sum=0;
    for(var i=1;i < Math.sqrt(number);i++){
      if(number % i === 0){
        sum=sum+i;
      
      if(i !== 0 && i !== Math.sqrt(number)){
        sum=sum+ (number / i);
      }
      }
    }

    if(sum === number * 2){
      console.log('Perfect number')
    }else{
      console.log('Not a Perfect number')
    }
   }

//find prime
function prime(number){
  for(var i = 2 ; i < number ; i++){
    if(number % i === 0){
      console.log('not a prime number')
      break;
    }
    else{
      console.log('Prime Number')
    }
    }
  
}
//print & call funcation

    var number=parseInt(prompt('Enter the Positive Number'));
    Armstrong(number);
    perfect(number)
    prime(number)

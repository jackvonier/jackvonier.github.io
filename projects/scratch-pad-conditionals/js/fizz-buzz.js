// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    let num = 0;
    let fizz = false;
    let buzz = false;
    let str = "";
for (let i = 0; i >= 100; i++){
        console.log(num);
        if (num % 3 === 0){
            fizz = true;
        }
        if (num % 5 === 0){
            buzz = true;
        }
        if (fizz){
            str = str + "Fizz";
        }
        if (buzz){
            str = str +"Buzz";
        }
        if ((!fizz) && (!buzz)){
            num = i;
        }else{
            num = str;
        }
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
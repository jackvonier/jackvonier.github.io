// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)){
        return true;
    }else{
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) || (value instanceof Date) || (value === null) || (typeof value !== "object")){
        return false;
    }else{
        return true;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    console.log(value);
    
    /* make sure to check:
        
        if (value instanceof Date) {
            return false
        } else if (value === null) {
            return false
        }
        
        first!
        
    */
    
    if (Array.isArray(value)){
        console.log("its an array");
        return true;
    }else if (typeof value === "object"){
        
        console.log('its an object');
        return true;
    }else{
        console.log('its neither');
        return false;
    }
    /////////////////////////////////////
    //ITS OFFICIAL I HATE THIS FUNCTION//
    ////////////////////////////////////
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    /*
    Before you do this you have to check to see if value is a Date, null, or Array 
    like so:
    
    if (Array.isArray) { return 'array'; }
    else if (value instanceof Date) { return 'date'; }
    else if (value === null) { return 'null'; }
    
    */
    
    let str = "";
    str = str + typeof value;
    console.log(str);
    return str;
    //and this one >80
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

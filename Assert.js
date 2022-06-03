//import assert
const assert = require('assert');

//use Assert
let a = 14;
let b = 10;
try {
    assert(a == b);
    console.log("Values are Equal.");
}
catch (error) {
    console.log(`Error :`, error);
}

//Retuen value from asset
try {
    assert(a > b);
    console.log("Condition is True.");
}
catch (error) {
    console.log("Error :", error);
}

//assert.deepStrictEqual - its true when both value and type of the variable are true.
try {
    assert.deepStrictEqual({ a: 5 }, { a: '5' });
    console.log("both are strictly Equal.");
}
catch (error) {
    console.log("Error :", error);
}

//assert.notDeepEqual
try {
    assert.notDeepEqual({ a: '4' }, { b: 4 });
    console.log("Not Equal");
}
catch (error) {
    console.log("Error :", error);
}

//assert.doesNotThrow - It will not throws an error part
try {
    assert.doesNotThrow(() => {
        throw new TypeError("Error is not there");
    }, /csss/, "whoops")
}
catch (error) {
    console.log("Error :", error);
}

//assert.equal - It checks the value is true or not.
try {
    assert.equal(a, b);
    console.log("No error.");
}
catch (error) {
    console.log("Error :", error);
}

//assert.ifError - if parameter value is not define then throws an error.
try {
    assert.ifError(0);
    console.log("No error");
}
catch (error) {
    console.log("Error :", error);
}

//assert.match - check that specific word is matched on string or not.
try {
    assert.match("I am Passed", /Passed/);
    console.log("Matched.");
}
catch (error) {
    console.log("Error :", error);
}


//if you have any query then here is the link of learning site : https://www.geeksforgeeks.org/node-js-assert-complete-reference/?ref=lbp

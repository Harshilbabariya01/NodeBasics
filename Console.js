//import console
const console = require('console');

//console.assert()
//console.assert(value or condition, message);
console.assert(true, 'error msg true');
console.assert(false, 'error msg false');
console.assert(1 !== 1, 'message');

//clear the console
console.clear();

//count to the console
//console.count('a');
console.count('r');
console.count('e');
console.count('r');
console.count();
console.count('r');
console.count('r');
console.count('e');
console.count();
console.count('r');


//reset the count to 0
// console.countReset('a');
console.count('r');
console.count('e');
console.count('r');
console.count();
console.count('r');
console.count('r');
console.count('e');
console.count();
console.count('r');
console.log("Reset the counters");
console.countReset();
console.countReset('e');
console.countReset('r');
console.count('e');
console.count();
console.count('r');

//debug the message
// %d - print given digit at that place
// %s - print given string at that place
console.debug('Hello GitHub');
console.debug('Hello Github : %d', 22);
console.debug("This is a %s", "sample debug message!");
console.debug("Sample debug message" + " with args: %d", 34);
console.debug("Debug message: Warning " + "at function %s: line number %d ", "ff()", 96);

//directory of object
const body = {
    a: 'a',
    b: 'b'
};
console.dir(body);

//set errors
var num = 10;
if (num > 13) {
    console.log('True');
}
else {
    console.error('False');
}

//console.info(data, value) - same as console.debug(data, value)


//If anyone have problem into this part please find reference : https://www.geeksforgeeks.org/node-js-console-complete-reference/
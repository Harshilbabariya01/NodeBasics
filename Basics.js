//set the timeout for 2 sec.
const timeout = setTimeout(() => console.log("Print after 2 seconds"), 2000);
console.log(timeout);

//Encode the value
const encoder = new TextEncoder();
const result1 = encoder.encode("Hello");
console.log(result1);

//Decode the value
const decoder = new TextDecoder();
const result2 = decoder.decode(result1);
console.log(result2);

//URL config
const url = new URL("hello", "https://google.com/");
console.log(url);

//URL searchParams
const myUrl = new URL("https://hello.og/?name=abc");
console.log(myUrl.searchParams.get('name'));
console.log(myUrl.href);
myUrl.searchParams.append('name', 'xyz');
console.log(myUrl.href);

//filepage and directory path for that file
console.log("__dirname : " + __dirname);
console.log("--filename : " + __filename);

//http
//import http
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to this page!');
    res.end();
}).listen(3006);

//functions
const add = function (x, y) {
    return x + y;
};
console.log(add(5, 9));

//import Local Module
// About Local Module: Local Module is created into seperate file and then import it.
const Welcome = require('./GlobalObject.js');
Welcome.sayHello();
console.log(Welcome.currentTime);
console.log(Welcome.companyName);
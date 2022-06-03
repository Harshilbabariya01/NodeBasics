// create an ununitiated buffer
const ubuffer = Buffer.alloc(5);
console.log(ubuffer);

//create buffer from an array
const abuffer = new Buffer([10, 20, 30]);
console.log(abuffer);

//create buffer from the string
const sbuffer = new Buffer("Hello", "ascii"); // second paramter provide encoading machanism
console.log(sbuffer);

//writing on the buffer
var buf = new Buffer(256);
var buffer = buf.write("Hello Users!!!");
console.log("Length of writed input : ", buffer);

//reading from the buffer
var buf = new Buffer("Buffers");
var buffer = buf.toString('ascii'); //buf.toString(encoading machanism, startpoint, endpoint)
console.log("Data from Buffer :", buffer);

//copy one buffer to another
var buffer1 = Buffer.from('Hey');
var buffer2 = Buffer.from('Github User');
console.log("Buffer 2 before :", buffer2.toString());
buffer1.copy(buffer2, 5, 0);
console.log("After Copy :", buffer2.toString()); //GithuHeyser

//check buffer include the word or not
buf = new Buffer('Github Users git.');
console.log(buf.includes('Git', 7));

//compare buffers
const b1 = new Buffer('Git');
const b2 = new Buffer('git');
console.log(b1.compare(b2)); //return 0, 1 or -1 //firstbuffer.compare(secondbuffer, tergetstart, targetend, sourcestart, sourceend);

//sort the buffers
const bf1 = Buffer.from('2');
const bf2 = Buffer.from('5');
const bf3 = Buffer.from('3');
const array = [bf1, bf2, bf3];
console.log("Without Sort :", array);
console.log("With Sort :", array.sort(Buffer.compare));

//create buffer with specified size
//if buffer size is more than data then it will store repeating values
var buf = Buffer.alloc(21, 'filled data', 'ascii');
console.log(buf);

//check for buffer equal or not
var buffer1 = new Buffer('HII');
var buffer2 = new Buffer('Hii');
console.log(buffer1.equals(buffer2)); //return true or false

//create subbuffer from original buffer
var og_b = new Buffer('Github');
console.log("original buffer :", og_b.toString());
var sub_b = og_b.subarray(3, 4);
console.log("sub buffer :", sub_b.toString());
sub_b[0] = 72;
console.log("modified sub buffer :", sub_b.toString());
og_b.copy(sub_b, 3);
console.log("modified original buffer :", og_b.toString());

//read data from buffer
var buffer = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]);
console.log("Data from buffer :", buffer.readIntBE(0, 4).toString(16)); //buffer.readIntBE(start, end) - if start and end is out of range of that buffer than throws an error

//write in buffer
var buffer = new Buffer("Github");
buffer.write('ITHUB', 1)
console.log("Changed buffer :", buffer.toString());

//if anyone have any doubts then here is the reference link : https://www.geeksforgeeks.org/node-js-buffer-complete-reference/
const path = require('path');

//[Base? file name]
// console.log(path.basename(__filename) + "/n"); //path_demo.js

// //[Directory name]
// console.log(path.dirname(__filename) + "/n");
// ///home/ec2-user/environment/reference

// //[file name + extension]
// console.log(path.extname(__filename) + "/n");

//[Create path object]
console.log(path.parse(__filename) + "/n");
//{root: '' dir: '~'}

//[Concatenate]
console.log(path.join(__filename, 'test'));
///home/ec2-user/environment/reference/path_demo.js/test
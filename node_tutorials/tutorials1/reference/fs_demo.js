const fs = require("fs");
const path = require("path");

//[make directory (path, encoding, callback func)]
// fs.mkdir(path.join(__dirname,  '/test'),{},function (err) {
//     if (err) throw err;
//     console.log('Folder created!');
// })

// //[create + write file (file name, what to write, callback )]
// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "I Wrote This!!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");

//     //[append(덧붙이기)] (async 머시기때문에 callback에 넣음)
//     fs.appendFile(
//       path.join(__dirname, "test", "hello.txt"),
//       "It was appended!!",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

//[Read file] (path, encoding, callback)
// fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//[Rename file] (original_path, path that you wanna change, callback)
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "changed.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);

const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100");

//Serialized URL
// console.log(myUrl.href);
// console.log(myUrl.toString()); //string url

//Host (root Domain)
// console.log(myUrl.host);
// console.log(myUrl.hostname); //(does not get port)

//Path name
// console.log(myUrl.pathname);

//Serialized query
// console.log(myUrl.search);

//Params object
// console.log(myUrl.searchParams());

//Add Params
// myUrl.searchParams.append("abc", "123");
// console.log(myUrl.searchParams);

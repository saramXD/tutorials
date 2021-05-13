const http = require("http");

//Create server object
http
  .createServer((request, response) => {
    //Write Response
    response.write("Hello World");
    response.end();
  })
  .listen(8080, () => console.log("server running..."));

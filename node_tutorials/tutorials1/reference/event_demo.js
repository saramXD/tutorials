const EventEmitter = require("events");

//[Create Class] (A(child) extends B(parent) 속성 같은 거 inherit)
class MyEmitter extends EventEmitter {}

//[Init Object]
const myEmitter = new MyEmitter();

//[Event listener]
myEmitter.on("event", () => {
  console.log("Event Emitted!!");
});

// [Init event]
myEmitter.emit("event");

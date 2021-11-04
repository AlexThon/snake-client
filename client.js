const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost" , // IP address here,
    port: 50541 // PORT number here,
  });
  //conn.write("Move: Up");
  // interpret incoming data as text
  conn.setEncoding("utf8");
    
  // conn.on('data', (data) => {
  //   console.log(data);
  // });
  
  conn.on('connect', () => {
    console.log(`Successfully connected...`);
    // conn.write("Name: BU");
  });

  

  
  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
  console.log("Sucessfully recorded...")
};

module.exports = {connect, setupInput, handleUserInput};
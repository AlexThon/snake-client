const net = require("net");
const setupInput = require('setupInput');
const connect = function() {
  const conn = net.createConnection({
    host: "localhost" , // IP address here,
    port: 50541 // PORT number here,
  });
  conn.write("Move: Up");
  // interpret incoming data as text
  conn.setEncoding("utf8");
    
  conn.on('data', (data) => {
    console.log(data);
  });
  
  conn.on('connect', () => {
    console.log(`Successfully connected...`);
    // conn.write("Name: BU");
  });

  return conn;
};


module.exports = {connect, setupInput};
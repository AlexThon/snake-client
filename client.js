const net = require("net");
let name = "ANS ";
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
    
  conn.write("BUL: HEy");
  conn.on('data', (data) => {
    console.log(data);
  });
 
  conn.on('connect', () => {
    console.log(`Successfully connected...`);
  });
  
  return conn;
};

module.exports = connect;
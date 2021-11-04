const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
  
const handleUserInput = function() {
  // your code here
  console.log("Sucessfully recorded...");
};

module.exports = setupInput;
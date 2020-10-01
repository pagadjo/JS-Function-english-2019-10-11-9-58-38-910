function reverseString(message){
  document.write("<b>FUNCTION 1</b><br>");
  var splitMessage = message.split("").reverse().join(" ");
  document.write(splitMessage  + "<br>");
  return splitMessage;
}

reverseString("hello"); // should return 'olleh'
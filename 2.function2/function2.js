function palindrome(message){
  
  var splitMessage = message.split("").reverse().join("");
  if(message == splitMessage){
    document.write("True:  " + message +" is a palindrome");
    document.write("<br>");
  }else{
    document.write("False:  " + message +" is not a palindrome");
    document.write("<br>");
  }
}
document.write("<br><b>FUNCTION 2</b><br>");
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
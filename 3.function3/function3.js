function alphabetSort(message){
  document.write("<br><b>FUNCTION 3</b><br>");
  // wirte your code here
  document.write(message.split("").sort().join(""));
  document.write("<br>");
}
alphabetSort('hello'); // should return 'ehllo'
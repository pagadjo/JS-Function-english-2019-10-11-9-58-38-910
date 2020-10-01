function countWords(message){
  document.write("<br><b>FUNCTION 4</b><br>");
  document.write(message.split(" ").length);
}
countWords('Good morning, I love JavaScript.'); // should return 5
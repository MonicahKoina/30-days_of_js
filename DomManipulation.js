/*
Learning Dom manipulation tactics in javascript
It defines standards for accessing documents
Its seperated in 3 parts,, core DoM, XML DOM, HTML Dom.

@ Getelementbyid  method

*/
// using the id taging method
document.getElementById("demo").innerHTML = "Hello there"; // we have just put an a text on the p tag named demo

// using the tagname method

document.getElementsByTagName("h1")[0].innerHTML = "yow"; // while using the get elements by tag name method , you have to specify the index of the elements .


//getting elements by classname 

document.getElementsByClassName("practice")[0].innerHTML = "just tried it out"; // you have to specify the index 

// the querySelector(all) method
// 
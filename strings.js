
let str = ["html", "css", "JAVASCRIPT", "react", "ANGULAR"];

let str1 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    str1 += str[i].toLowerCase();
  } 
  else {
    str1 += str[i].toUpperCase();
  }
   if (i !== str.length - 1) {
    str1 += ", ";
  }
}
console.log(str1.split());
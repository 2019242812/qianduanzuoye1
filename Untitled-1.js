var arr="hello world";
var str=arr.split('');
str.splice(6,1,"W");
str.splice(0,1,"H");
var arr2 = str.join("");
console.log(arr2)
function solve(content){
let x = document.getElementById("ans").value;
x=x.toString();
content=x+content;
document.getElementById("ans").value=content;
}
function result(content){
let x = document.getElementById("ans").value;
let y= eval(x);
document.getElementById("ans").value=y;
}
function op(a){
let x = document.getElementById("ans").value;
x=x.toString();
a=a.toString();
let y=x+a;
document.getElementById("ans").value=y;
}
function clr(){
let x="";
document.getElementById("ans").value=x;
}
function dele(){
let x = document.getElementById("ans").value;
20
x=x.toString();
let l=(x.length)-1
x=x.slice(0,l);
document.getElementById("ans").value=x;
}
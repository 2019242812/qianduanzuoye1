let button=document.getElementById("button");
let ul=document.getElementById('ul');
button.onclick=function(){
    let li=document.createElement('li');
    let neirong=wenbenkuang.value;
    let span=document.createElement('span');
    ul.appendChild(li)
    li.appendChild(span)
    span.innerHTML=neirong;
    wenbenkuang.value=""
}

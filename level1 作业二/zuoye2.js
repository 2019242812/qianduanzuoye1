let clickLi=document.getElementById('clickLi');
let li=clickLi.getElementsByTagName('li');
clickLi.addEventListener('click',dianji,false)
function dianji(s){
    let x=s.target;
    alert(x.innerHTML);
    console.log(x.innerHTML);
};
let el=document.querySelectorAll('li');
for(let i=0;i<el.length;i=i+2){
    el[i].className='red'
//el[0].className='red';
//el[1].className='green';
//el[2].className='red';
//el[3].className='green';
//el[4].className='red';
//el[5].className='green';
//el[6].className='red';}
}
for(let j=1;j<el.length;j=j+2){
    el[j].className='green'}
//let yanse=document.children('li');
//这里开始
//let yanse=document.getElementsByTagName('li');
//for(let i=0;i<yanse.length-1; i++){
//if(i=1||3||5){
   // el[i].className='red';
   // let conse=yanse[i];
    //conse.style.cssText="color:red;"
    //yanse[i].innerHTML.style.color='red';
//}
//else{
    //el[i].className='green';
    //let conss=yanse[i];
    //conss.style.cssText="color:green;"
    //yanse[i].innerHTML.style.color='green';
//}
//}
//这里结束

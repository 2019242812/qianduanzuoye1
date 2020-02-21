let ajaxs=document.getElementsByClassName("rqhead")[0];
let headmiddles=document.getElementById('headmiddles');
let touxiang=document.getElementById('touxiang');
let xwz=document.getElementsByClassName('mrh')[1];
let shuju=function(data){
  data=data||{};
  data.type=(data.type||"GET").toUpperCase();
  console.log(data.url)
  //data.datatype=data.datatype||"json";
  //let datas=formatParams(data.datas)
  const request= new XMLHttpRequest;
  if(data.type=="GET"){
      request.open('GET',data.url,true)
      request.send(null);
  }else if(data.type=="POST"){
  request.open("post",data.url,true);
   request.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
   request.send(data.data);
}
//setTimeout(function(){
//    if(xhr.readySate!=4){
//        xhr.abort();
 //   }
//},options.timeout)
request.onreadystatechange=function(){
  if(request.readyState==4){
      var status=request.status;
      if(status>=200&&status<300||status==304){
        data.sucess()
      }
      else{
          data.error()
      }
  }

}
//function formatParams(data){
 //   var arr=[];
  //  for(var name in data){
  ///      arr.push(encodeURIComponent(name)+"="+encodeURIComponent(data[name]));
  //  }
  //  arr.push(("v="+Math.random()).replace("."))
//}
}//ajax

let ajax=function({ url,type,data,success,error}){
     
  const formatData = (data) => `?${Object.keys(data).reduce((acc, cur) => `${acc}&${cur}=${data[cur]}`, '').slice(1)}`
  const datas=formatData(data)
  const request=new XMLHttpRequest()
  request.onreadystatechange=function(){
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300 || request.status === 304) {
        success(request)
      } else {
        error(request)
      }
    }
  }
  if(type.toUpperCase()==="GET"){
    request.open("GET",url+datas)
    request.send(null)
  }
if(type.toLocaleLowerCase()==="POST"){
  request.open("POST",url)
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  request.send(datas);
}
}


window.onload=function(){
  var rqs=document.getElementsByClassName('rq');
  for(let i=0;i<rqs.length;i++){
    rqs[i].inde=i
  }
  ajaxs.onclick=function(e){
      var e=e||window.event;
      var target=e.target;
      if(target.className.toLocaleLowerCase()=="rq"){
       //跳转到对应的网页
       console.log(target.inde)
       ajax({
         url:'',
         type:'',
         sucess:{
           //
         }
       })
      }
  }
}




function clickxwz(){
  window.open('xwzs.html')
}

xwz.addEventListener('click',clickxwz,false)


let c=function(){
    shuju({
      url:"",
      type:"",
      sucess:function(){
          //插入内容，更新节点 添加函数
      }
    })
}//调取函数插入页面内容









let obj={
neirong:function(){
for(let i=0;i<50;i++){
    let qqq=document.createElement('div');
    let qqqqq=document.createElement('div');
    let div1=document.createElement('div');
    let qqqq=document.createElement('div');
    let div2=document.createElement('div');
    let div3=document.createElement('div');
    let tou=document.createElement('h1');
    let h2=document.createElement('h2');
    let p=document.createElement('p');
    let zhiding=document.createElement('a');
    let fenxiang=document.createElement('a');
    let img=document.createElement('img');
    div1.appendChild(tou);
   qqqq.appendChild(zhiding);
   qqqq.appendChild(fenxiang);
   div2.appendChild(h2);
   div2.appendChild(p);
   div2.appendChild(qqqq);
   qqqqq.appendChild(div1);
   qqqqq.appendChild(div2);
   div3.appendChild(img);
   qqq.appendChild(qqqqq);
   qqq.appendChild(div3);
   middle.appendChild(qqq);
   qqq.classList.add('qqq');
   qqqqq.classList.add('qqqqq');
   tou.classList.add('tou');
   qqqq.classList.add('qqqq');
   zhiding.classList.add('zhiding');
   fenxiang.classList.add('fenxiang');
   h2.classList.add('h2');
   p.classList.add('p');
   img.classList.add('img');
   tou.innerHTML=`${i}`;
   h2.innerHTML="全国新型肺炎情况怎么样了?"
   p.innerHTML="了解疫情最新进展"
   zhiding.innerHTML="置顶"
   fenxiang.innerHTML="分享"
   img.src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png"
   img.style.width="190px"
   img.style.height="105px"
}
}
}
let middle=document.getElementById('middle');
obj.neirong()
window.onload = function () {
  var btn = document.querySelector('#headmiddle');
  btn.onclick = showOrHidden;
  var content = document.querySelector('#content');
  content.onclick = function (ev) {
      var e = event || ev;
      e.stopPropagation();
  }
  function showOrHidden() {
      var over = document.querySelector('#over');
      over.style.display = over.style.display == 'none' ? 'block' : 'none';
  }
let ass=document.getElementsByClassName('overbuttons')[0];
let click=function(){
    console.log('ssss')
    let url="rebang.html"
     window.location.href=url
    
}
let overs=document.getElementsByClassName('overs')[0];
let clickover=function(){
  console.log('s')
  let names=document.getElementsByClassName('overtext')[0].value;
  let bei=document.getElementsByClassName('overtexts')[0].value;
  ajax({
    url:"",
    type:"get",
    data:{
      username:names,
      password:bei,
    },
    success:function(request){
      const json=JSON.parse(request.responseText);
      //const text
      //在页面插入内容 下面有写到
    }
  })
  click()
}
ass.addEventListener('click',click,false)
overs.addEventListener('click',clickover,false)
}//提问
let clicktw=function(){
  alert('查找')
  let input=document.getElementById('input').value;
  ajax({
    url:""+input,
    type:'get',
    success:function(){
      //
    }
  })
       
}//查找
headmiddles.addEventListener('click',clicktw,false);
function clicktouxiang(){
  window.open("./zhuye.html")
}//点击头像进入个人页面
touxiang.addEventListener('click',clicktouxiang,false)
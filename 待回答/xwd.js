
let middle=document.getElementsByClassName('middlelast')[0];
let touxiang=document.getElementById('touxiang');
let headmiddles=document.getElementById('headmiddles');
function clicktouxiang(){
  window.open("./zhuye.html")
}//点击头像进入个人页面
touxiang.addEventListener('click',clicktouxiang,false)
//同用头像


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




let obj={
    w:function(){
      for(let i=0;i<5;i++){
      let last=document.createElement('div');
      let a=document.createElement('a');
      let neirong=document.createElement('div');
      let hd=document.createElement('button');
      let w=document.createElement('div');
      last.appendChild(a);
      last.appendChild(neirong);
      middle.appendChild(last)
      w.appendChild(hd);
      last.appendChild(w);
      w.classList.add('w');
      neirong.classList.add('neirong');
      a.classList.add('a');
      last.classList.add('last');
      hd.classList.add('hd');
      hd.innerHTML="写回答"
      
      neirong.innerHTML="如何"
      a.innerHTML="阅读全文"
    }
    }
    }//生成内容
    obj.w()







let c=function(){
    shuju({
        url:"",
        type:"",
        sucess:function(){
         touxiang.src=""
         obj.w()
        }
    })
}//调取函数
  window.onload=function(){
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
      let url="xhd.html"
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
      middle.onclick=function(e){
          var e=e||window.event;
          var target=e.target;
          if(target.className.toLocaleLowerCase()=="hd"){
           //跳转到对应的网页
           alert(this.className)
           let url="x.html"
       window.location.href=url
       ajax({
         url:'',
         type:'',
         data:{
           
         },
         sucess:function(){

         }
       })
          }
      }
  }//写回答的按钮
  let clicktw=function(){
    alert('查找')
    let input=document.getElementById('input');
    ajax({
      url:""+input,
      type:'get',
      success:function(){
        //
      }
    })
         
  }//查找
  headmiddles.addEventListener('click',clicktw,false);
  
 
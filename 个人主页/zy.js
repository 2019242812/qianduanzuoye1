let middle=document.getElementById('www');
let pl=document.getElementsByClassName('last3')[0];
let ccc=document.getElementsByClassName('last3');
let headmiddle=document.getElementById('headmiddle');
let headmiddles=document.getElementById('headmiddles');
let imgs=document.getElementsByClassName('imgs')[0];
let img=document.getElementsByClassName("img")[0];
let ajaxs=document.getElementsByClassName('ajax');
let xifile=document.getElementById('xFile').files[0];
let clickajax=function(){
   // shuju({
     //   url:"",
    //    type:"",
    //    sucess:function(){
            //换数据 展示在页面 
            //几个按钮都是一样的
    //    }
  //  })
}
 //发送数据

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




let obj={
    c:function(){
        let list=document.createElement('div')
      let listhead=document.createElement('div');
      let nu=document.createElement('span');
      let times=document.createElement('span');
      listhead.appendChild(nu);
      listhead.appendChild(times);
      let listlast=document.createElement("div");
      let listlastlastmiddle=document.createElement('div');
      let img=document.createElement('img');
      let name=document.createElement('span');
      listlastlastmiddle.appendChild(img);
      listlastlastmiddle.appendChild(name);
      let listlastlast=document.createElement('div');
      let wenzi=document.createElement('div');
      let time=document.createElement('div');
      let buttons=document.createElement('div');
      let lasts1=document.createElement('button');
      let lasts2=document.createElement('button');
      let lasts3=document.createElement('button');
      let lasts4=document.createElement('button');
      buttons.appendChild(lasts1);
      buttons.appendChild(lasts2);
      buttons.appendChild(lasts3);
      buttons.appendChild(lasts4);
      listlastlast.appendChild(wenzi);
      listlastlast.appendChild(time);
      listlastlast.appendChild(buttons);
      listlast.appendChild(listlastlastmiddle);
      listlast.appendChild(listlastlast);
      list.appendChild(listhead);
      list.appendChild(listlast);
      let neirong=document.getElementsByClassName('neirong')[0];
      neirong.appendChild(list);
      list.classList.add('list-item');
      nu.classList.add('nb')
      times.classList.add('times')
      name.classList.add('listname')
      wenzi.classList.add('wenzi')
      time.classList.add('time')
      lasts1.classList.add('lasts1')
      lasts2.classList.add('lasts2')
      lasts3.classList.add('lasts3')
      lasts4.classList.add('lasts4')
      listhead.classList.add('listhead');
      buttons.classList.add('buttons');
      listlastlast.classList.add('listlastlast');
      listlastlastmiddle.classList.add('listlastmiddle')
      listlast.classList.add('listlast')
      nu.innerHTML="发布了想法"
      times.innerHTML="1个月前"
      name.innerHTML="踏进"
      wenzi.innerHTML="我"
      time.innerHTML="发布于2020-01-19"
      lasts1.innerHTML="添加评论"
      lasts2.innerHTML="分享"
      lasts3.innerHTML="收藏"
      lasts4.innerHTML="删除"
      img.src="./777.jpg"
      img.style.width="38px"
      img.style.height="38px"

    },
    d:function(){
      let list=document.createElement('div')
      let listhead=document.createElement('div');
      let nu=document.createElement('span');
      let times=document.createElement('span');
      listhead.appendChild(nu);
      listhead.appendChild(times);
      let listlast=document.createElement("div");
      let h2=document.createElement('h2');
      let listlastlastmiddle=document.createElement('div');
      let img=document.createElement('img');
      let name=document.createElement('span');
      listlastlastmiddle.appendChild(img);
      listlastlastmiddle.appendChild(name);
      let listlastlast=document.createElement('div');
      let wenzi=document.createElement('div');
      let time=document.createElement('div');
      let buttons=document.createElement('div');
      let last1=document.createElement('button');
      let last2=document.createElement('button');
      let last3=document.createElement('button');
      let last4=document.createElement('button');
      let last5=document.createElement('button');
      buttons.appendChild(last1);
      buttons.appendChild(last2);
      buttons.appendChild(last3);
      buttons.appendChild(last4);
      buttons.appendChild(last5);
      listlastlast.appendChild(wenzi);
      listlastlast.appendChild(time);
      listlastlast.appendChild(buttons);
      listlast.appendChild(h2)
      listlast.appendChild(listlastlastmiddle);
      listlast.appendChild(listlastlast);
      list.appendChild(listhead);
      list.appendChild(listlast);
      let neirong=document.getElementsByClassName('neirong')[0];
      neirong.appendChild(list);
      list.classList.add('list-item');
      nu.classList.add('nb')
      times.classList.add('times')
      name.classList.add('listname')
      wenzi.classList.add('wenzi')
      time.classList.add('time')
      last1.classList.add('last1')
      last2.classList.add('last2')
      last3.classList.add('last3')
      last4.classList.add('last4')
      listhead.classList.add('listhead');
      buttons.classList.add('buttons');
      listlastlast.classList.add('listlastlast');
      listlastlastmiddle.classList.add('listlastmiddle')
      listlast.classList.add('listlast')
      last5.classList.add('last5')
      h2.innerHTML="你坚持最近的变美小习惯是什么？"
      nu.innerHTML="赞同了回答"
      times.innerHTML="1个月前"
      name.innerHTML="踏进"
      wenzi.innerHTML="我"
      time.innerHTML="发布于2020-01-19"
      last1.innerHTML="▲赞同"
      last2.innerHTML="▼"
      last3.innerHTML="评论"
      last4.innerHTML="✈分享"
      last5.innerHTML="收藏"
      img.src="./777.jpg"
      img.style.width="38px"
      img.style.height="38px"
    }
}
obj.d()
obj.c()
//展现数据 


let topsss=function(){
  let fi=document.getElementById('xFile');
  fi.click()
}
function upload(){
  const reads=new FileReader();
  reads.readAsDataURL(xifile)
  console.log(reads);
  reads.onload=function(e){

     img.src=this.result;
     img.style.width="148.2px"
     img.style.height="148.2px"
     console.log(img)
     ajax({
       url:"",
       type:"post",
       data:{
         img:this.result,
       },
       sucess:function(){

       }
     })
  }
}//上传图片
//img.addEventListener('click',upload,false)

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
    let url="zhuye.html"
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
      //const json=JSON.parse(request.responseText);
      //const text
      //在页面插入内容 下面有写到
    }
  })
  //click()
}
ass.addEventListener('click',click,false)
overs.addEventListener('click',clickover,false)
}//提问

let clicktw=function(){
  alert('查找')
  let input=document.getElementById('input');
  shuju({
    url:""+input,
    type:'get',
    success:function(){
      //
    }
  })
       
}//查找
headmiddles.addEventListener('click',clicktw,false);
function zl(){
  window.open('zl.html')
}
  
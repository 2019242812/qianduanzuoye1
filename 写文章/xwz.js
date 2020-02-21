let button1=document.getElementsByClassName('button')[0];
let wenzi=document.getElementsByClassName('neirong')[0];
let button2=document.getElementsByClassName('button')[1];
let button3=document.getElementsByClassName('button')[2];
let button=document.getElementsByClassName('button')[3];
let button4=document.getElementsByClassName('button')[4];
let button5=document.getElementsByClassName('button')[5];
 let kuang=document.getElementsByClassName('kuang')[0];
let buttons=document.getElementsByClassName('button')[6];
let xifile=document.getElementById('xFile').files[0];
let buttonn=document.getElementsByClassName('button')[6];
let form=document.getElementsByClassName('form')[0];

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

  

let clickbutton=function(){
  alert('提交')
    //var formdata=new formdata(form);
    ajax({
        url:"",
        type:"post",
        data:{
        img: document.createElement('img').src ,
        head:kuang.value,  
        text:wenzi.innerHTML
        },
        sucess:{
         //
        }
    })
}//发送数据到后台














//添加几个功能



function upload(){
  const reads=new FileReader();
  reads.readAsDataURL(xifile)
  console.log(reads);
  reads.onload=function(e){
      var list=document.getElementsByClassName('middlehead')[0];
      list.removeChild(list.childNodes[1]);
     let img=document.createElement('img');
     list.appendChild(img)
     list.classList.add('change')
     list.classList.remove('middlehead');
     img.src=this.result;
     img.style.width="400px"
     img.style.height="400px"
     console.log(img)
     
  }
}//上传图片
let clickthree1=function(){
    let url=window.prompt(' 请输入图片网址');
    let c= document.execCommand('insertImage',false,url)
    
   alert(c)
    }
let clickthree=function(){
     let w=document.execCommand('underline',false,null)
     alert(w)
    }
let clicktwo=function(){
    document.execCommand('italic',false,null)
    }
let clickone=function(){
document.execCommand('bold',false,null)
var list=document.getElementsByClassName('middlehead')[0];
   list.removeChild(list.childNodes[1])
}
let clickone1=function(){
    let url=window.prompt(' 请输入图片网址');
    document.execCommand('createLink',false,url)
    }
button1.addEventListener('click',clickone,false)
button2.addEventListener('click',clicktwo,false)
button3.addEventListener('click',clickthree,false)
button.addEventListener('click',clickthree1,false)
button4.addEventListener('click',clickone1,false)
button5.addEventListener('click',clickone,false)
//xifile.addEventListener('click',click,false)
buttons.addEventListener('click',clickbutton,false)  

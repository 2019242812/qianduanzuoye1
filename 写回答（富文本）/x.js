let button1=document.getElementsByClassName('button')[0];
//let wenzi=document.getElementsByClassName('neirong')[0];
let button2=document.getElementsByClassName('button')[1];
let button3=document.getElementsByClassName('button')[2];
let button=document.getElementsByClassName('button')[3];
let button4=document.getElementsByClassName('button')[4];
let button5=document.getElementsByClassName('button')[5];
// let kuang=document.getElementsByClassName('kuang')[0];
let buttons=document.getElementsByClassName('button')[6];
let imgss=document.getElementById('touxiang');
let a=document.getElementsByClassName('a')[0];
let neirongs=document.getElementsByClassName('neirong')[0];
let gzz=document.getElementsByClassName("strong")[0];
let llz=document.getElementsByClassName('strong')[1];
let tijiao=document.getElementsByClassName('button')[6];
let middle=document.getElementsByClassName('huida')[0];
let pl=document.getElementsByClassName('last3')[0];
let ccc=document.getElementsByClassName('last3');
let headmiddle=document.getElementById('headmiddle');
let headmiddles=document.getElementById('headmiddles');
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
document.execCommand('bold',false,null);
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
            let url="x.html"
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
        let touxiang=document.getElementById('touxiang');
function clicktouxiang(){
          window.open("./zhuye.html")
        }//点击头像进入个人页面
        touxiang.addEventListener('click',clicktouxiang,false)
        //同用头像  
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
        let clickbutton=function(){
          alert('提交')
            //var formdata=new formdata(form);
            ajax({
                url:"",
                type:"post",
                data:{
                img: document.createElement('img').src ,
                 
                text:wenzi.innerHTML
                },
                sucess:{
                 //
                }
            })
        }//发送数据到后台
        buttons.addEventListener('click',clickbutton,false)        
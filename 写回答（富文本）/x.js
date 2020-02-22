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
let neiron=document.getElementById("cs");
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
          
               
        }//查找
        headmiddles.addEventListener('click',clicktw,false);     
        let clickbutton=function(){
          alert('提交')
            //var formdata=new formdata(form);
            let ccc=document.createElement('div');
            let huida=document.getElementsByClassName('huida')[0];
            let s=neiron.innerHTML
            console.log(s)
            let value=s
            ccc.innerHTML=`
            <div class="hditem">
            <div class="hditemhead">
        <img src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png" width="38px" height="38px" class="hdimg">
        <div class="hdname">777</div>
            </div>
            <div class="hdtext">${value}</div>
            <div class="hdtime">发布于2020-2-01</div>
            <div class="hdbutton">
                <button class="last1">赞同</button>
                <button class="last2">▼</button>
                <button class="last3">评论</button>
            </div>
            </div>
            `
            huida.appendChild(ccc)
            zns(1)
        }//发送数据到后台
        buttons.addEventListener('click',clickbutton,false) 
        let zns =function(h){
          
          function s(s,n){
            for(let i=s;i<n;i++){
                let pl=document.getElementsByClassName('last3')[i];
                let dz=document.getElementsByClassName('last1')[i];
                let cai=document.getElementsByClassName('last2')[i];
                let lb=document.getElementsByClassName('plq');
               let pls= function(){
                 //
                  let div=document.createElement('div');
                  pl.removeEventListener('click',pls,false)
                  let www=document.getElementsByClassName('hditem')[i];
                  let plqhead=document.createElement('div');
                  let plqmiddle=document.createElement('div');
                  let plq=document.createElement('div');
                  let topleft=document.createElement('div');
                  let plqmiddles=document.createElement('ul');
                  let plqmiddleli=document.createElement('li');
                  let tx=document.createElement('div');
                  let imgs=document.createElement('img');
                  let name=document.createElement('div');
                  let wenzis=document.createElement('div');
                  let xxxx=document.createElement('div');
                  let plqlast=document.createElement('div');
                  let plqlastLeft=document.createElement('div');
                  let plqlastRight=document.createElement('button');
                  let dzs=document.createElement('a');
                  let cais=document.createElement('a');
                  let hf=document.createElement('a');
                  let hr=document.createElement('hr');
                  tx.appendChild(imgs);
                  tx.appendChild(name);
                  div.appendChild(tx);
                  div.appendChild(wenzis);
                  div.appendChild(xxxx);
                  plqmiddleli.appendChild(div)
                  plqmiddles.appendChild(plqmiddleli);
                  plqmiddle.appendChild(plqmiddles);
                  plqhead.appendChild(topleft);
                  plq.appendChild(plqhead);
                  plq.appendChild(plqmiddle);
                  www.insertBefore(plq,www.childNodes[8]);
                  plqlast.appendChild(plqlastLeft);
                  plqlast.appendChild(plqlastRight);
                  plq.appendChild(plqlast);
                  xxxx.appendChild(cais);
                  xxxx.appendChild(dzs);
                  xxxx.appendChild(hf);
                  xxxx.appendChild(hr);
                  div.classList.add('div');
                  plq.classList.add("plq");
                  plqhead.classList.add('plqhead');
                  topleft.classList.add('topleft');
                  plqmiddle.classList.add('plqmiddle');
                  plqmiddles.classList.add('plqmiddles');
                  plqmiddleli.classList.add('plqmiddleli');
                  tx.classList.add('tx');
                  imgs.classList.add('imgs');
                  name.classList.add('name');
                  wenzis.classList.add('wenzis');
                  xxxx.classList.add('xxxx');
                  plqlast.classList.add('plqlast');
                  plqlastLeft.classList.add('plqlastLeft');
                  plqlastRight.classList.add('plqLastRight');
                  dzs.classList.add('dz');
                  cais.classList.add('cai'); 
                  hf.classList.add('hf');
                  dzs.classList.add("dz"+i);
                  cais.classList.add("cai"+i); 
                  hf.classList.add('hf');
                  hf.classList.add("hf"+i);
                  plqmiddleli.classList.add("plqmiddleli"+i)
                  topleft.innerHTML="2条评论"
                  imgs.src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png"
                  name.innerHTML='废了来'
                  wenzis.innerHTML="wwwwwwwww"
                  dzs.innerHTML="100点赞"
                  cais.innerHTML="踩"
                  hf.innerHTML="回复"
                  plqlastLeft.contentEditable=true;
                  plqlastLeft.innerHTML="发布"
                  plqlastRight.innerHTML="发布"
                  pl.innerHTML="收起评论" 
                  let huifu=function(){
                    www.removeChild(plq)
                    pl.innerHTML="评论"
                    pl.addEventListener('click',pls,false)
                  }
                  let clace=function(){
                    
                    for(let q=0;q<2;q++){
                        
                    }
                  }
                  if(lb.length!=0){
                    for(let j=0;j<lb.length;j++){
                      let zan=document.getElementsByClassName('cai')[j];
                      let cai=document.getElementsByClassName('dz')[j];
                      let fabu=document.getElementsByClassName('plqLastRight')[j];
                      let hf=document.getElementsByClassName('hf')[j];
                      let clickdzs=function(){
                        zan.removeEventListener('click',clickdzs,false);
                        //点赞数加一；发送请求让数据库关于这个的点赞加一；
                        zan.innerHTML="已踩"
                        zan.classList.add('shengs')
                        if(cai.classList[2]=="shengs"){
                          cai.innerHTML="101赞"
                        }
                        //ajax({
                        // ajax({
                        //   url:'',
                         //  type:"post",
                         //    data:{
                           //    type:"ture"
                          //   },
                          //   success:function(){
                          //    zan.innerHTML="赞"
                          //    zan.classList.add('sheng')
                          //   }
                         //})
                           
                            //在页面插入内容 下面有写到
                          
                       // })//新
                        let huifu=function(){
                         //点赞数减一；发送请求让数据库关于这个的点赞减一；
                         zan.innerHTML="踩"
                        
                        // ajax({
                         // ajax({
                         //   url:'',
                         //   type:"post",
                         //     data:{
                          //      type:"false"
                          //    },
                          //    success:function(){
                          //     zan.innerHTML="点"
                               zan.classList.remove('shengs')
                          //    }
                         // })
                        //})//新
                         zan.addEventListener('click',clickdzs,false);
                        }
                         zan.addEventListener('click',huifu,false);
                      }//点赞
                      let clickcai=function(){
                        cai.removeEventListener('click',clickcai,false);
                        //点赞数加一；发送请求让数据库关于这个的点赞加一；
                        cai.innerHTML="101点赞"
                        cai.classList.add('shengs')
                        if(dz.classList[2]=="shengs"){
                          zan.innerHTML="踩"
                        }
                        //ajax({
                        // ajax({
                         //  url:"",
                         //  type:"post",
                         //  data:{
                         //    type:'false'
                          // },
                          // success:function(){
                          //  cai.innerHTML="101点赞"
                          //  cai.classList.add('sheng')
                         //  }
                        // })
                        //})//新
                        let huifu=function(){
                         //点赞数减一；发送请求让数据库关于这个的点赞减一；
                         cai.innerHTML="100点赞"
                         cai.classList.remove('shengs');
                         //ajax({
                        // ajax({
                        //   url:'',
                        //   type:"post",
                        //   data:{
                         //    type:'ture'
                        //   }
                        // })
                          
                        //})//新
                         cai.addEventListener('click',clickcai,false);
                        }
                        cai.addEventListener('click',huifu,false);
                      }//踩
                        cai.addEventListener('click',clickcai,false)
                        zan.addEventListener('click',clickdzs,false)
                        function clickhf(){
                          let value=document.getElementsByClassName('plqlastLeft')[j].innerHTML
                         // ajax({
                        //   ajax({
                         //    url:"",
                         //    type:"post",
                          //   data:{
                          //     text:value
                         //    },
                         //    success:function(){
                               //下面的
                         //   }
                         //  })
                          //})//新
                          //发送数据到后台 再渲染到页面；
                          let plqlastLeftson=plqlastLeft.innerHTML;
                          console.log(j)
                          let plqmiddlelison=document.createElement('li');
                  let txson=document.createElement('div');
                  let imgsson=document.createElement('img');
                  let nameson=document.createElement('div');
                  let wenzisson=document.createElement('div');
                  let xxxxson=document.createElement('div');
                  let dzsson=document.createElement('a');
                  let caisson=document.createElement('a');
                  let hfson=document.createElement('a');
                  let hr=document.createElement('hr');
                  plqmiddlelison.appendChild(txson);
                  plqmiddlelison.appendChild(wenzisson);
                  plqmiddlelison.appendChild(xxxxson);
                  xxxxson.appendChild(caisson);
                  xxxxson.appendChild(dzsson);
                  xxxxson.appendChild(hfson)
                  xxxxson.appendChild(hr)
                  txson.appendChild(imgsson);
                  txson.appendChild(nameson);
                  div.appendChild(plqmiddlelison);
                  plqmiddlelison.classList.add('plqmiddlelison');
                  txson.classList.add('tx');
                  imgsson.classList.add('imgs');
                  nameson.classList.add('name');
                  wenzisson.classList.add('wenzis');
                  xxxxson.classList.add('xxxx');
                  imgsson.src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png"
                  nameson.innerHTML='废了来回复废了'
                  wenzisson.innerHTML=plqlastLeftson
                  dzsson.innerHTML="100点赞"
                  caisson.innerHTML="踩"
                  //hfson.innerHTML="回复"
                  plqlastLeftson="1"
                          alert('ccc')
                    }//写评论
                        let ddd=function(){
                          fabu.innerHTML="回复"
                          hf.innerHTML="取消回复"
                          fabu.removeEventListener('click',clickfb,false);
                          fabu.addEventListener('click',clickhf,false);
                          hf.removeEventListener('click',ddd,false)
                          let huifu=function(){
                            fabu.innerHTML="发布"
                            hf.innerHTML="回复"
                            fabu.removeEventListener('click',clickhf,false)
                            fabu.addEventListener('click',clickfb,false)
                            //hf.addEventListener
                            hf.removeEventListener('click',huifu,false)
                            hf.addEventListener('click',ddd,false)
                          }
                          hf.addEventListener('click',huifu,false)
                        }
                        
                        
                        let clickfb=function(){
                          let value=document.getElementsByClassName('plqlastLeft')[j].innerHTML
                          // ajax({
                         //   ajax({
                          //    url:"",
                          //    type:"post",
                           //   data:{
                           //     text:value
                          //    },
                          //    success:function(){
                                //下面的
                          //   }
                          //  })
                           //})//新
                           //发送数据到后台 再渲染到页面；
                           let plqlastLeftson=plqlastLeft.innerHTML;
                           console.log(j)
                           let plqmiddlelison=document.createElement('li');
                   let txson=document.createElement('div');
                   let imgsson=document.createElement('img');
                   let nameson=document.createElement('div');
                   let wenzisson=document.createElement('div');
                   let xxxxson=document.createElement('div');
                   let dzsson=document.createElement('a');
                   let caisson=document.createElement('a');
                   let hfson=document.createElement('a');
                   let hr=document.createElement('hr');
                   plqmiddlelison.appendChild(txson);
                   plqmiddlelison.appendChild(wenzisson);
                   plqmiddlelison.appendChild(xxxxson);
                   xxxxson.appendChild(caisson);
                   xxxxson.appendChild(dzsson);
                   xxxxson.appendChild(hfson)
                   xxxxson.appendChild(hr)
                   txson.appendChild(imgsson);
                   txson.appendChild(nameson);
                   plqmiddleli.appendChild(plqmiddlelison);
                   plqmiddlelison.classList.add('plqmiddleli');
                   txson.classList.add('tx');
                   imgsson.classList.add('imgs');
                   nameson.classList.add('name');
                   wenzisson.classList.add('wenzis');
                   xxxxson.classList.add('xxxx');
                   dzsson.classList.add("dz");
                   caisson.classList.add('cai');
                   hfson.classList.add('hf');
                   imgsson.src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png"
                   nameson.innerHTML='废了'
                   wenzisson.innerHTML=plqlastLeftson
                   dzsson.innerHTML="100点赞"
                   caisson.innerHTML="踩"
                   hfson.innerHTML="回复"
                   plqlastLeftson="1"
                           alert('ccc')
                           
                        }
                      
                        hf.addEventListener('click',ddd,false)
                        fabu.addEventListener('click',clickfb,false)
                    }}
                    //生成按钮
                  
                  pl.addEventListener('click',huifu,false)
                }//生成评论区
                pl.addEventListener('click',pls,false)
              
                let clickcai=function(){
                  console.log('ssssss')
                    cai.removeEventListener('click',clickcai,false);
                    cai.classList.add('sheng');
                    if(dz.classList[1]=="sheng"){
                    dz.classList.remove('sheng')
                    }
                  //  ajax({
                  //    url:"",
                   //   type:"post",
                   //   data:{
                   //     type:"ture"
                   //   },
                    //  success:function(request){
                    //    const json=JSON.parse(request.responseText);
                       
                        //在页面插入内容 下面有写到
                    //  }
                  //  })//新
                    let huifu=function(){
                  //    ajax({
                  //      url:"",
                  //      type:"post",
                  //      data:{
                   //       type:"false"
                   //     },
                   //     success:function(request){
                    //      const json=JSON.parse(request.responseText);
                         
                          //在页面插入内容 下面有写到
                    //    }
                   //   })//新
                      cai.classList.remove('sheng')
                      cai.addEventListener('click',clickcai,false)
                    }
                      cai.addEventListener('click',huifu,false)
                  }//不赞同
                  let clickdz=function(){
                    console.log('sss')
                 //   ajax({
                 //     url:"",
                  //    type:"post",
                   //   data:{
                    //    type:"ture"
                    //  },
                    //  success:function(request){
                    //    const json=JSON.parse(request.responseText);
                       
                        //在页面插入内容 下面有写到
                   //   }
                  //  })//新
                      dz.removeEventListener('click',clickdz,false);
                      dz.classList.add('sheng');
                      if(cai.classList[1]=="sheng"){
                        cai.classList.remove('sheng')
                      }
                     // dz.classList.remove('last1')
                      let huifu=function(){
                       // ajax({
                        //  url:"",
                        //  type:"post",
                        //  data:{
                         //   type:"false"
                         // },
                         // success:function(request){
                         //   const json=JSON.parse(request.responseText);
                           
                            //在页面插入内容 下面有写到
                        //  }
                       // })//新
                        dz.classList.remove('sheng')
                        dz.addEventListener('click',clickdz,false)
                      }
                        dz.addEventListener('click',huifu,false)
                    }//赞同
                  
                  dz.addEventListener('click',clickdz,false);
                  cai.addEventListener('click',clickcai,false);
                  pl.addEventListener('click',pls,false);
                }
              }//评论区的一切
          s(h,ccc.length)


        } 
        zns(0)
let middle=document.getElementsByClassName('middle')[0];
let pl=document.getElementsByClassName('last3')[0];
let ccc=document.getElementsByClassName('last3');
let headmiddle=document.getElementById('headmiddle');
let headmiddles=document.getElementById('headmiddles');
let imgs=document.getElementsByClassName('imgs')[0];
let invite=document.getElementsByClassName('inviteright')[0];
let xwz=document.getElementsByClassName('mrh')[1];
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
function clickxwz(){
  window.open('xwzs.html')
}
function clickxhd(){
  window.open('xhd.html')
}//跳转写文章
//let shuju=function(data){
  //data=data||{};
 // data.type=(data.type||"GET").toUpperCase();
 // console.log(data.url)
  //data.datatype=data.datatype||"json";
  //let datas=formatParams(data.datas)
 // let request=new XMLHttpRequest;
 // if(data.type=="GET"){
  //    request.open('GET',data.url,true)
 //     request.send(null);
 // }else if(data.type=="POST"){
 // request.open("post",data.url,true);
 //  request.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
 //  request.send(data.data);
//}
//setTimeout(function(){
//    if(xhr.readySate!=4){
//        xhr.abort();
 //   }
//},options.timeout)
//request.onreadystatechange=function(){
 // if(request.readyState==4){
  //    var status=request.status;
  //    if(status>=200&&status<300||status==304){
   //     data.success()
    //  }
    //  else{
   //       data.error()
   //   }
 // }

//}
//function formatParams(data){
 //   var arr=[];
  //  for(var name in data){
  ///      arr.push(encodeURIComponent(name)+"="+encodeURIComponent(data[name]));
  //  }
  //  arr.push(("v="+Math.random()).replace("."))
//}
//}//ajax




//
let obj={
    w:function(){
      for(let i=0;i<5;i++){
      let www=document.createElement('div');
      let first=document.createElement('h2');
      let sp=document.createElement('div');
      let ccc=document.createElement('video');
      let sourse=document.createElement('sourse');
      let wenzi=document.createElement('div');
      let span=document.createElement('span');
      let gengduo=document.createElement('button');
      let anniu=document.createElement('div');
      let last1=document.createElement('button');
      let last2=document.createElement('button');
      let last3=document.createElement('button');
      let last4=document.createElement('button');
      let last5=document.createElement('button');
      let last6=document.createElement('button');
      let boder=document.createElement('div');
      anniu.appendChild(last1);
      anniu.appendChild(last2);
      anniu.appendChild(last3);
      anniu.appendChild(last4);
      anniu.appendChild(last5);
      anniu.appendChild(last6);
      wenzi.appendChild(span);
      wenzi.appendChild(gengduo);
      ccc.appendChild(sourse);
      sp.appendChild(ccc);
      www.appendChild(first);
      www.appendChild(sp);
      www.appendChild(wenzi);
      www.appendChild(anniu);
      www.appendChild(boder);
      middle.appendChild(www);
      www.classList.add('www');
      first.classList.add('first');
      sp.classList.add('sp');
      ccc.classList.add('ccc');
      wenzi.classList.add('wenzi');
      gengduo.classList.add('gengduo');
      anniu.classList.add('anniu');
      last1.classList.add('last1');
      last2.classList.add('last2');
      last3.classList.add('last3');
      last4.classList.add('last4');
      last5.classList.add('last5');
      last6.classList.add('last6');
      boder.classList.add('boder');
      span.classList.add('ws');
      first.innerHTML="你手机里有什么逗比的?"
      ccc.style.width="190px"
      ccc.style.height="105px"
      span.innerHTML="北极光： 「带血盛放的樱花」羽生结弦 2014年世界花样滑冰大奖赛上海站，日本花滑选手羽生结弦在自由滑赛前热身中，与中国选手闫涵不慎相撞，身体多处受伤，侧卧在冰面上一度不能动身。 经过紧急处理，他黑发红衣"
      gengduo.innerHTML="阅读全文"
      last1.innerHTML="▲赞同"
      last2.innerHTML="▼"
      last3.innerHTML="评论"
      last4.innerHTML="✈分享"
      last5.innerHTML="★ 收藏"
      last6.innerHTML='♥ 喜欢'
      console.log(last6.innerHTML)
    }
    }
    }
    obj.w()
    //生成内容
    function s(s,n){
      for(let i=s;i<n;i++){
          let pl=document.getElementsByClassName('last3')[i];
          let dz=document.getElementsByClassName('last1')[i];
          let cai=document.getElementsByClassName('last2')[i];
          let lb=document.getElementsByClassName('plq');
          let css=document.getElementsByClassName('wenzi')[i];
          let cs=document.getElementsByClassName('gengduo')[i];
          let ws=document.getElementsByClassName('ws')[i];
          let sc=document.getElementsByClassName('last5')[i]
         let pls= function(){
           //
            let div=document.createElement('div');
            pl.removeEventListener('click',pls,false)
            let www=document.getElementsByClassName('www')[i];
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
                    cai.innerHTML="100赞"
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
                   // alert('ccc')
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
                    // alert('ccc')
                     
                  }
                
                  hf.addEventListener('click',ddd,false)
                  fabu.addEventListener('click',clickfb,false)
              }}
              //生成按钮
            
            pl.addEventListener('click',huifu,false)
          }//生成评论区
          pl.addEventListener('click',pls,false)
          let clicksc=function(){
            sc.removeEventListener('click',clicksc,false)
             console.log('huifu')
          //  shuju({
           //   url:"",
           //   type:"post",
           //   data:{
           //     type:"ture"
            //  },
            //  success:function(request){
            //    const json=JSON.parse(request.responseText);
               
                //在页面插入内容 下面有写到
           //   }
          //  })//新
    
           let huifu= function(){
             console.log('HF')
            // alert('sss')
           //  ajax({
           //   url:"",
           //   type:"post",
           //   data:{
           //     type:"false"
           //   },
           //   success:function(request){
           //     const json=JSON.parse(request.responseText);
               
                //在页面插入内容 下面有写到
            //  }
           // })//新
            sc.addEventListener('click',huifu,false)
          }//收藏
        }
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
            sc.addEventListener('click',clicksc,false)
            dz.addEventListener('click',clickdz,false);
            cai.addEventListener('click',clickcai,false);
            pl.addEventListener('click',pls,false);
          }
        }//评论区的一切
    s(0,ccc.length)

  //
  let clicktw=function(){
    alert('查找')
    let input=document.getElementById('input');
   // ajax({
    //  url:""+input,
    //  type:'get',
    //  success:function(){
        //
    //  }
   // })
         
  }//查找
  headmiddles.addEventListener('click',clicktw,false);
  let input=document.getElementById('input');
  let surch=document.getElementById('headmiddles');
  //
  let touxiang=document.getElementById('touxiang');
  function clicktouxiang(){
    window.open("./zhuye.html")
  }//点击头像进入个人页面
  touxiang.addEventListener('click',clicktouxiang,false)
  //同用头像
  
  
  let wenben=document.getElementsByClassName('wenben')[0];
  window.onload=function(){
    middle.onclick=function(e){
        var e=e||window.event;
        var target=e.target;
        if(target.className.toLocaleLowerCase()=="gengduo"){
         //跳转到对应的网页
         alert(this.className)
         
        }
    }
  }//加载更多
  
  
  window.onscroll=function(){
   var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
   
    //this.console.log("滚动距离"+scrollTop)
    if(document.documentElement.scrollHeight<=window.screen.height+document.documentElement.scrollTop){
      //this.console.log('www')
      var n=ccc.length;
      obj.w()
      this.s(n,n+5)
      
    }
  }//下滑
  
  
  
  
  
  
  
  
  
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
      let url="tuijian.html"
       window.location.href=url
      
  }
  let overs=document.getElementsByClassName('overs')[0];
  let clickover=function(){
    console.log('s')
    let names=document.getElementsByClassName('overtext')[0].value;
    let bei=document.getElementsByClassName('overtexts')[0].value;
    //ajax({
    //  url:"",
    //  type:"get",
    //  data:{
    //    username:names,
     //   password:bei,
     // },
     // success:function(request){
      //  const json=JSON.parse(request.responseText);
        //const text
        //在页面插入内容 下面有写到
     // }
    //})
    click()
  }
  ass.addEventListener('click',click,false)
  overs.addEventListener('click',clickover,false)
  }//提问



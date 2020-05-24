let headH=document.getElementsByClassName("headH-text")[0];
 let tem=document.getElementsByClassName("tem")[0];
 let wea=document.getElementsByClassName("wea")[0];
 let nowleftwea1=document.getElementsByClassName("nowleftwea")[0];
 let nowleftwea2=document.getElementsByClassName("nowleftwea")[1];
 let nowrighttem1=document.getElementsByClassName("nowrighttem")[0];
 let nowrighttem2=document.getElementsByClassName("nowrighttem")[1];
 let header=document.getElementById("header");
 let datahead=document.getElementsByClassName("datahead")[0];
 let datafoot=document.getElementsByClassName("datafoot")[0];
 let nowrightimg1=document.getElementsByClassName("nowrightimg")[0];
 let nowrightimg2=document.getElementsByClassName("nowrightimg")[1];
 let TimeImg=document.getElementsByClassName("TimeImg");
 let sometwo=document.getElementsByClassName("sometwo")[0];
 let somethree=document.getElementsByClassName("somethree")[0];
 let iseight=document.getElementsByClassName("eight")[0];
 let textsomes1=document.getElementsByClassName("textsome1")[0];
 let textsomes2=document.getElementsByClassName("textsome2")[0];
 let inputs=document.getElementsByClassName("inputs")[0];
 let Some=document.getElementById("Some");
 let footer=document.getElementsByClassName('footer')[0];
 let nones=document.getElementsByClassName("none")[0];
 let daysen1=document.getElementsByClassName("daysen1");
 let daysen2=document.getElementsByClassName("daysen2");
 let daysen3=document.getElementsByClassName("daysen3");
 let daysen4=document.getElementsByClassName("daysen4");
 let daysen5=document.getElementsByClassName("daysen5");
 let daysen6=document.getElementsByClassName("daysen6");
 const ajax = ({  url,success } = {}) => {
  
  const req = new XMLHttpRequest()

  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status >= 200 && req.status < 300 || req.status === 304) {
        success(req)
      } else {
        alert("false");
      }
    }
  }

  
    req.open('GET', url,true )
    req.send()
}//调用
ajax({
  url: 'https://www.tianqiapi.com/free/day?appid=91194827&appsecret=Y6oaPCjX&city',
  success:function(req){
    const json = JSON.parse(req.responseText)
         headH.innerHTML=json.city;
          wea.innerHTML=json.wea;
         tem.innerHTML=json.tem;
          nowleftwea1.innerHTML=json.wea;
          nowrighttem1.innerHTML=`${json.tem_day}/${json.tem_night}`;
          datahead.innerHTML=json.air;
          datafoot.innerHTML="优"
          //imgs(json.wea_img)
          let a=judege(json.wea_img);
          header.className=a;
          // Timeimg(json)
          console.log(json)
          sometwo.innerHTML=json.air;
          air(json.air)
        }

})
ajax({
  url:"https://www.tianqiapi.com/free/week?appid=91194827&appsecret=Y6oaPCjX",
  success:function(req){
    const json=JSON.parse(req.responseText)
    console.log(json)
    nowleftwea1.innerHTML=json.data[0].wea;
    nowleftwea2.innerHTML=json.data[1].wea;
    nowrighttem1.innerHTML=`${json.data[0].tem_day}/${json.data[0].tem_night}`
    nowrighttem2.innerHTML=`${json.data[1].tem_day}/${json.data[1].tem_night}`
    nowrightimg1.classList.add( judege(json.data[0].wea_img)+"1")
    nowrightimg2.classList.add( judege(json.data[1].wea_img)+"1")
    Timeimg(json);
    // let a=json.data[0].date.replace("2020-","");
    // alert(a)
    days(json,daysen2);
    imgs1(daysen3,json);
    imgs11(daysen4,json)
  }})
  function judege(req){
    let i;
     switch (req)
     {
       case "qing":
         i="qing";
         break;
         case "bingbao":
         i="bingbao";
         break;
         case "lei":
         i="lei";
         break;
         case "shachen":
         i="shachen";
         break;
         case "wu":
         i="wu";
         break;
         case "xue":
         i="xue";
         break;
         case "yin":
         i="yin";
         break;
         case "yu":
          i="yu";
          break;
          case "yun":
         i="yun";
         break;
     }
     return i;
  }
  var btn=document.getElementsByClassName("somedata")[0];
　　let modal=document.getElementById("fiexd");
　　var close=document.getElementsByClassName("close")[0];
　　//点击按钮，弹出弹框
　　
　　//点击叉号，关闭弹窗
　　function close(){
　　modal.style.display="none";
    //iseight.style.display="none";
　　}
　　//点击其他地方窗口隐藏
　　window.onclick=function(e){
　　if(e.target==modal){
　　modal.style.display="none";
　　}
　　}
ajax({
  url:"https://free-api.heweather.net/s6/weather/lifestyle?location=CN101010100&key=7c165f5a8e224d68a6916d6602e40a35",
  success:function(req){
const  json=JSON.parse(req.responseText);
console.log(json)
init(json)
let Some=document.getElementById("Some");
 Some.addEventListener('click',function eights(event,s=json){
  let a=event.target.id.replace("c","");
   iseight.style.display="block"
  //eight(a,s);
   alert(a);
 })
  }
})
function init(req){
  let i=0
  for(i=0;i<8;i++){
  let someistext=document.getElementsByClassName('someistext1')[i];
   someistext.innerHTML=req.HeWeather6[0].lifestyle[i].brf;
   
  }
 }
 function eights(event,s){
  let a=event.target.id.replace("c","");
   alert(event.target.id.replace("c",""));
   
 }
 Some.addEventListener('click',function eights(event){
  let a=event.target.id.replace("c","");
   alert(a);
   
 })
 function Timeimg(req){
  let b=TimeImg.length;
  for(i=0;i<b;i++){
    TimeImg[i].classList.add(judege(req.data[0].wea_img)+"1")
  }
}
function air(req){
  if(req>50){
   somethree.innerHTML="优"
   datafoot.innerHTML="优"
  }else{
    somethree.innerHTML="差"
    datafoot.innerHTML="差"
  }
 }
 function closes(){
  iseight.style.display="none";
}



let objss=document.getElementsByClassName("textsome2")[0].children;
// ajax({
//   url: 'https://www.tianqiapi.com/free/day?appid=91194827&appsecret=Y6oaPCjX&city=北京',
//   success:function(req){
//     const json = JSON.parse(req.responseText)
//          headH.innerHTML=json.city;
//           wea.innerHTML=json.wea;
//          tem.innerHTML=json.tem;
//           nowleftwea1.innerHTML=json.wea;
//           nowrighttem1.innerHTML=`${json.tem_day}/${json.tem_night}`;
//           datahead.innerHTML=json.air;
//           datafoot.innerHTML="优"
//           //imgs(json.wea_img)
//           let a=judege(json.wea_img);
//           header.className=a;
//           // Timeimg(json)
//           console.log(json)
//           sometwo.innerHTML=json.air;
//           air(json.air)
//           console.log(json)
//         }

// })
textsomes1.addEventListener('click',function finding(event){
  let a=event.target.innerHTML;
  console.log(a);
  nones.style.display="none";
  footer.style.display="block";
  ajax({
    url: 'https://www.tianqiapi.com/free/day?appid=91194827&appsecret=Y6oaPCjX&city='+a,
    success:function(req){
      const json = JSON.parse(req.responseText)
           headH.innerHTML=json.city;
            wea.innerHTML=json.wea;
           tem.innerHTML=json.tem;
            nowleftwea1.innerHTML=json.wea;
            nowrighttem1.innerHTML=`${json.tem_day}/${json.tem_night}`;
            datahead.innerHTML=json.air;
            datafoot.innerHTML="优"
            //imgs(json.wea_img)
            let a=judege(json.wea_img);
            header.className=a;
            // Timeimg(json)
            console.log(json)
            sometwo.innerHTML=json.air;
            air(json.air)
            console.log(json)
          }
  
  })
  ajax({
    url:"https://www.tianqiapi.com/free/week?appid=91194827&appsecret=Y6oaPCjX&city="+a,
    success:function(req){
      const json=JSON.parse(req.responseText)
      console.log(json)
      nowleftwea1.innerHTML=json.data[0].wea;
      nowleftwea2.innerHTML=json.data[1].wea;
      nowrighttem1.innerHTML=`${json.data[0].tem_day}/${json.data[0].tem_night}`
      nowrighttem2.innerHTML=`${json.data[1].tem_day}/${json.data[1].tem_night}`
      nowrightimg1.classList.add( judege(json.data[0].wea_img)+"1")
      nowrightimg2.classList.add( judege(json.data[1].wea_img)+"1")
      Timeimg(json);
      // let a=json.data[0].date.replace("2020-","");
      // alert(a)
      days(json,daysen2);
      imgs1(daysen3,json);
      imgs11(daysen4,json)
    }})
    ajax({
      url:"https://free-api.heweather.net/s6/weather/lifestyle?location=CN101010100&key=7c165f5a8e224d68a6916d6602e40a35",
      success:function(req){
    const  json=JSON.parse(req.responseText);
    console.log(json)
    init(json)
    let Some=document.getElementById("Some");
     Some.addEventListener('click',function eights(event,s=json){
      let a=event.target.id.replace("c","");
       iseight.style.display="block"
      //eight(a,s);
       alert(a);
     })
      }
    })
 })
 textsomes2.addEventListener('click',function finding(event){
  let a=event.target.innerHTML;
  console.log(a);
  nones.style.display="none";
  footer.style.display="block";
  ajax({
    url: 'https://www.tianqiapi.com/free/day?appid=91194827&appsecret=Y6oaPCjX&city='+a,
    success:function(req){
      const json = JSON.parse(req.responseText)
           headH.innerHTML=json.city;
            wea.innerHTML=json.wea;
           tem.innerHTML=json.tem;
            nowleftwea1.innerHTML=json.wea;
            nowrighttem1.innerHTML=`${json.tem_day}/${json.tem_night}`;
            datahead.innerHTML=json.air;
            datafoot.innerHTML="优"
            //imgs(json.wea_img)
            let a=judege(json.wea_img);
            header.className=a;
            // Timeimg(json)
            console.log(json)
            sometwo.innerHTML=json.air;
            air(json.air)
            console.log(json)
          }
  
  })
  ajax({
    url:"https://www.tianqiapi.com/free/week?appid=91194827&appsecret=Y6oaPCjX&city="+a,
    success:function(req){
      const json=JSON.parse(req.responseText)
      console.log(json)
      nowleftwea1.innerHTML=json.data[0].wea;
      nowleftwea2.innerHTML=json.data[1].wea;
      nowrighttem1.innerHTML=`${json.data[0].tem_day}/${json.data[0].tem_night}`
      nowrighttem2.innerHTML=`${json.data[1].tem_day}/${json.data[1].tem_night}`
      nowrightimg1.classList.add( judege(json.data[0].wea_img)+"1")
      nowrightimg2.classList.add( judege(json.data[1].wea_img)+"1")
      Timeimg(json);
      // let a=json.data[0].date.replace("2020-","");
      // alert(a)
      days(json,daysen2);
      imgs1(daysen3,json);
      imgs11(daysen4,json)
    }})
    ajax({
      url:"https://free-api.heweather.net/s6/weather/lifestyle?location=CN101010100&key=7c165f5a8e224d68a6916d6602e40a35",
      success:function(req){
    const  json=JSON.parse(req.responseText);
    console.log(json)
    init(json)
    let Some=document.getElementById("Some");
     Some.addEventListener('click',function eights(event,s=json){
      let a=event.target.id.replace("c","");
       iseight.style.display="block"
      //eight(a,s);
       alert(a);
     })
      }
    }) 
 })
 function findinputs(){
  let a=inputs.value;
  nones.style.display="none";
  footer.style.display="block";
  console.log(a)
  ajax({
    url: 'https://www.tianqiapi.com/free/day?appid=91194827&appsecret=Y6oaPCjX&city='+a,
    success:function(req){
      const json = JSON.parse(req.responseText)
           headH.innerHTML=json.city;
            wea.innerHTML=json.wea;
           tem.innerHTML=json.tem;
            nowleftwea1.innerHTML=json.wea;
            nowrighttem1.innerHTML=`${json.tem_day}/${json.tem_night}`;
            datahead.innerHTML=json.air;
            datafoot.innerHTML="优"
            //imgs(json.wea_img)
            let a=judege(json.wea_img);
            header.className=a;
            // Timeimg(json)
            console.log(json)
            sometwo.innerHTML=json.air;
            air(json.air)
            console.log(json)
          }
  
  })
  ajax({
    url:"https://www.tianqiapi.com/free/week?appid=91194827&appsecret=Y6oaPCjX&city="+a,
    success:function(req){
      const json=JSON.parse(req.responseText)
      console.log(json)
      nowleftwea1.innerHTML=json.data[0].wea;
      nowleftwea2.innerHTML=json.data[1].wea;
      nowrighttem1.innerHTML=`${json.data[0].tem_day}/${json.data[0].tem_night}`
      nowrighttem2.innerHTML=`${json.data[1].tem_day}/${json.data[1].tem_night}`
      nowrightimg1.classList.add( judege(json.data[0].wea_img)+"1")
      nowrightimg2.classList.add( judege(json.data[1].wea_img)+"1")
      Timeimg(json);
      // let a=json.data[0].date.replace("2020-","");
      // alert(a)
      days(json,daysen2);
      imgs1(daysen3,json);
      imgs11(daysen4,json)
    }})
    ajax({
      url:"https://free-api.heweather.net/s6/weather/lifestyle?location=CN101010100&key=7c165f5a8e224d68a6916d6602e40a35",
      success:function(req){
    const  json=JSON.parse(req.responseText);
    console.log(json)
    init(json)
    let Some=document.getElementById("Some");
     Some.addEventListener('click',function eights(event,s=json){
      let a=event.target.id.replace("c","");
       iseight.style.display="block"
      //eight(a,s);
       alert(a);
     })
      }
    })
  }
  let center=document.getElementsByClassName("center")[0];
center.addEventListener('click',function opens(){
  modal.style.display="block"
})
headH.addEventListener("click",function heads(){
  footer.style.display="none";
  nones.style.display="block";
})
var aLi = document.querySelectorAll(".box li");
var box = document.querySelector('.box');
var wrap = document.getElementById('wrap');
var aLiWidth = box.offsetWidth;
console.log('aLiWidth: ' + aLiWidth)
//wrap.style.height = aLi[0].offsetHeight/20 + 'rem';
// 设置盒子的宽度
for(var i=0;i<aLi.length;i++){
    aLi[i].style.width = 15 + 'vw';
};
// 初始化手指坐标点
var startPoint = 0;
var startEle = 0;
//手指按下
wrap.addEventListener("touchstart",function(e){
    startPoint = e.changedTouches[0].pageX;
    startEle = box.offsetLeft;
});
//手指滑动
wrap.addEventListener("touchmove",function(e){
    var currPoint = e.changedTouches[0].pageX;
    var disX = currPoint - startPoint;
    var left = startEle + disX;
    box.style.left = left/10 + 'vw';
});
//当手指抬起的时候，判断图片滚动离左右的距离，当
wrap.addEventListener("touchend",function(e){
    var left = box.offsetLeft;
// 判断正在滚动的图片距离左右图片的远近，以及是否为最后一张或者第一张
    var currNum = Math.round(-left/aLiWidth);
    currNum = currNum>=(aLi.length-1) ? aLi.length-1 : currNum;
    currNum = currNum<=0 ? 0 : currNum;
    box.style.left = -currNum*wrap.offsetWidth + 'vw';
})
        var aLi = document.querySelectorAll(".box1 li");
        var box1 = document.querySelector('.box1');
        var wrap1 = document.getElementById('Day7');
        var aLiWidth = box1.offsetWidth;
        console.log('aLiWidth: ' + aLiWidth)

        for(var i=0;i<aLi.length;i++){
            aLi[i].style.width = 15 + 'vw';
        };

        var startPoint = 0;
        var startEle = 0;

        wrap1.addEventListener("touchstart",function(e){
            startPoint = e.changedTouches[0].pageX;
            startEle = box1.offsetLeft;
        });

        wrap1.addEventListener("touchmove",function(e){
            var currPoint = e.changedTouches[0].pageX;
            var disX = currPoint - startPoint;
            var left = startEle + disX;
            box1.style.left = left/10 + 'vw';
        });
        wrap1.addEventListener("touchend",function(e){
            var left = box1.offsetLeft;
   
            var currNum = Math.round(-left/aLiWidth);
            currNum = currNum>=(aLi.length-1) ? aLi.length-1 : currNum;
            currNum = currNum<=0 ? 0 : currNum;
            box1.style.left = -currNum*wrap1.offsetWidth + 'vw';
        })
function imgs1(i,req){
  for(s=0;s<i.length;s++){
    let a=req.data[s].wea;
    i[s].innerHTML=a;
  }
}
function days(req,i){
  for(var b=0;b<i.length;b++){
    let a=req.data[b].date.replace("2020-","");
    i[b].innerHTML=a;
  }
}
function imgs11(i,req){
  for(s=0;s<i.length;s++){
   i[s] .classList.add( judege(req.data[1].wea_img)+"1")
  }
}
function unfind(){
  footer.style.display="block";
  nones.style.display="none";
}
     
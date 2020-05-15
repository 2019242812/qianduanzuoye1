var parent = document.getElementById("lbt");
    var img_ul = document.getElementById("imgul");
    var litCir_ul = document.getElementById("xul");
    var buttons = document.getElementById("buttons");
    var cLis =litCir_ul.children;

    var len = img_ul.children.length;    
    var width = parent.offsetWidth;      
    var rate = 40;                        
    var times = 1;                        
    var gap = 2000;                       
    var timer = null;                     
    var picN = 0;                         
    var cirN = 0;                         
    var temp;
    for (var i=0; i<len; i++){
        var a_li = document.createElement("li");
        a_li.className = 'quiet';
        litCir_ul.appendChild(a_li);
    }
    litCir_ul.children[0].className = "active";
    function slide(distance){
        clearInterval(img_ul.timer);
        let speed=img_ul.offsetLeft<distance?rate:(-rate);
        img_ul.timer=setInterval(function(){
         img_ul.style.left=img_ul.offsetLeft+speed+"px";
         let leave=distance-img_ul.offsetLeft;
         if(Math.abs(leave)<=Math.abs(speed)){
             clearInterval(img_ul.timer)
             img_ul.style.left=distance;
         }
        },10);
    }
    img_ul.appendChild(img_ul.children[0].cloneNode(true));
    function autoslide(){
        picN++;
        cirN++;
        if(picN>len){
            img_ul.style.left=0;
            picN=1;
        }
        slide(-picN*width);
        if(cirN>len-1){
            cirN=0;
        }
        for(let i=0;i<len;i++){
            cLis[i].className="quiet";
        }
        cLis[cirN].className="active";
    }
    timer=setInterval(autoslide,gap);
    for(let i=0;i<len;i++){
        cLis[i].index=i;
         cLis[i].onmouseover=function(){
             for(let j=0;j<len;j++){
                 cLis[j].className="quiet";
             }
             this.className="active";
            temp=cirN;
             picN=cirN=this.index;
             times=Math.abs(this.index-temp);
            rate=rate*times;
             slide(-this.index*width);
             rate=40;
        }
    }
    buttons.children[0].onclick = function(){ 
        picN--;
        cirN--;
       if(picN < 0){                               
            img_ul.style.left = -len*width + "px";  
        }
        slide(-picN*width);
        
        if(cirN < 0){
           cirN = len-1;
      }
        for(var i=0; i<len; i++){
            cLis[i].className = "quiet";
        }
        cLis[cirN].className = "active";
    }

    buttons.children[1].onclick = autoslide;

let imgs=document.getElementsByTagName('img');
function getTop(e) {
    var T = e.offsetTop;
    while(e = e.offsetParent) {
        T += e.offsetTop;
    }
    return T;
}
function lazyLoad(imgs) {
    var H = document.documentElement.clientHeight;
    var S = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < imgs.length; i++) {
        if (H + S > getTop(imgs[i])) {
            imgs[i].src = imgs[i].dataset.original;
        }
    }
}

window.onload = window.onscroll = function () { 
    lazyLoad(imgs);
}
let img=document.getElementsByClassName('img')[0];
let name=document.getElementsByClassName('name')[0];
let imgs=document.getElementsByClassName('ims')[0];
let xifile=document.getElementById('xFile').files[0];
let fc=document.getElementsByClassName('diaocha')[0];
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
for(let i=0;i<5;i++){
  let button=document.getElementsByClassName('label1')[i];
// let form=document.getElementsByClassName('Field')[i];
 //let formdata=new FormData(form);
  //console.log(shuju)
 let click=function(){
    
    

 }
button.addEventListener('click',click,false)
}
  
  let topsss=function(){
    alert('sssss')
    let fi=document.getElementById('xFile');
    fi.click()
  }
  function upload(){
    const reads=new FileReader();
    reads.readAsDataURL(xifile)
    console.log(reads);
    reads.onload=function(e){
       img.src=this.result;
       img.style.width="168px"
       img.style.height="168px"
       console.log(img)
       shuju({
         url:"",
         type:"post",
         data:{
           img:img
         },
         sucess:function(){
           //
         }
       })
    }
  }//上传图片
  //img.addEventListener('click',upload,false)
 
  
  window.onload=function(){
    let rqs=document.getElementsByClassName('forms');
    for(let i=0;i<rqs.length;i++){
      rqs[i].inde=i
    }
    fc.onclick=function(e){
        var e=e||window.event;
        var target=e.target;
        if(target.className.toLocaleLowerCase()=="forms"){
         //跳转到对应的网页
         console.log(target.inde)
         
        }
    }
  }


  
  
let shousuo=document.getElementById('shousuo');
let button=document.getElementById("button");
let shuju=document.getElementById("shuju");
button.addEventListener('click',
 sun=()=>{
    let duixiang={
        type:function(opts){
            const type=opts.type
            const url=opts.url
            let guanjianci=shousuo.value;
          
        const API=url+guanjianci+'/1/10'
        console.log(API)
        let xhr= new XMLHttpRequest()
        xhr.open(type,API,true)
         xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                    const json=JSON.parse(xhr.responseText)
                    console.log(json)
                  
                    let song=json.data.songList;
                    for(var i=0;i<song.length;i++){
                   let li=document.createElement('li');
                    li.innerHTML=song[i].singer[0].singerName+'-------------'+song[i].songName
                    shuju.appendChild(li);}
                }
                }
            }
            xhr.send(null)
        }
        }
        duixiang.type({
            type:'GET',
            url:'https://music.niubishanshan.top/api/v2/music/search/'
        })
    })
   

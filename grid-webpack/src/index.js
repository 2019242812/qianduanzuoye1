import _ from 'lodash';
import './grid.css';
import s1 from './images/作业_01.jpg';
import s2 from './images/作业_09.jpg';
import s3 from './images/作业_10.jpg';
import s4 from './images/作业_11.jpg';
import s5 from './images/作业_12.jpg';
import s6 from './images/作业_26.jpg';
import s7 from './images/作业_29.jpg';
 import s8 from './images/作业_30.jpg';
 import s9 from './images/作业_44.jpg';
 import s10 from './images/作业_36.jpg';
 import s11 from './images/作业_34.jpg';
 import s12 from './images/作业_39.jpg';
 import s13 from './images/作业_41.jpg';
 import s14 from './images/作业_43.jpg';
 import s15 from './images/作业_53.jpg';
 import s16 from './images/作业_56.jpg';
 import s17 from './images/作业_57.jpg';
 import s18 from './images/作业_60.jpg';
 import s19 from './images/作业_61.jpg';

console.log("成功完成作业");
let jpg=document.getElementsByClassName("jpg");
jpg[0].src=s1;
let s=[s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19];
for(let x=1;x<jpg.length;x++){
    
jpg[x].src=s[x];
}
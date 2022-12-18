"use strict";

// footer-letzte-teil //
let u1=document.getElementById("u-1");
let u2=document.getElementById("u-2");
if(window.innerWidth<=1100){
    u1.innerHTML="<p> <a href=./src/datenschutz.html  target=blank style='font-size: 1rem';>سياسة الخصوصية</a></p>";
  u2.innerHTML="<p style= 'margin:12px 0px 0px 0px; font-size:1rem; color:#A4A4A4;'>تصميم عبدالله عربش</p><p style= 'margin:2px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>جميع الحقوق محفوظة لصالح الدرة ماركت شتوتغارت © 2021</p>";
}
window.addEventListener("resize",()=>{
  if(window.innerWidth<=1100){
    u1.innerHTML="<p> <a href=./src/datenschutz.html  target=blank style='font-size: 1rem';>سياسة الخصوصية</a></p>";
    u2.innerHTML="<p style= 'margin:12px 0px 0px 0px; font-size:1rem; color:#A4A4A4;'>تصميم عبدالله عربش</p><p style= 'margin:2px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>جميع الحقوق محفوظة لصالح الدرة ماركت شتوتغارت © 2021</p>";
  }
  else{
    u2.innerHTML="<p> <a href=./src/datenschutz.html  target=blank style='font-size: 1rem';>سياسة الخصوصية</a></p>";
    u1.innerHTML="<p style= 'margin:12px 0px 0px 0px; font-size:1rem; color:#A4A4A4;'>تصميم عبدالله عربش</p><p style= 'margin:2px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>جميع الحقوق محفوظة لصالح الدرة ماركت شتوتغارت © 2021</p>";
  }
})
"use strict";

// footer-letzte-teil //
let u1=document.getElementById("u-1");
let u2=document.getElementById("u-2");
if(window.innerWidth<=1100){
  u1.innerHTML="<p> <a href=./src/impressum.html target=blank > Impressum</a> | <a href=./src/datenschutz.html  target=blank>Datenschutzerklärung</a></p>";
  u2.innerHTML="<p style= 'margin:12px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>created by Abdullah Arbash</p><p style= 'margin:2px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>Copyrights 2021 © Durra Markt-Stuttgart</p>";
}
window.addEventListener("resize",()=>{
  if(window.innerWidth<=1100){
    u1.innerHTML="<p> <a href=./src/impressum.html target=blank > Impressum</a> | <a href=./src/datenschutz.html  target=blank>Datenschutzerklärung</a></p>";
    u2.innerHTML="<p style= 'margin:12px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>created by Abdullah Arbash</p><p style= 'margin:2px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>Copyrights 2021 © Durra Markt-Stuttgart</p>";
  }
  else{
    u2.innerHTML="<p> <a href=./src/impressum.html target=blank > Impressum</a> | <a href=./src/datenschutz.html  target=blank>Datenschutzerklärung</a></p>";
    u1.innerHTML="<p style= 'margin:12px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>created by Abdullah Arbash</p><p style= 'margin:2px 0px 0px 0px; font-size:.9rem; color:#A4A4A4;'>Copyrights 2021 © Durra Markt-Stuttgart</p>";
  }
})
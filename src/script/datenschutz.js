"use strict";
// datenschutz // 
let pos= document.getElementById("daten-pos").offsetTop;
let ela=document.querySelector(".galerie-b");
window.addEventListener("scroll", ()=>{
   if(window.scrollY>=pos){
       ela.classList.add("galerie-bb");
       ela.classList.remove("galerie-b");
   }
   else{
    ela.classList.add("galerie-b");
       ela.classList.remove("galerie-bb");
   }
  
});

function scoole(){
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
 }


 console.log(window.innerWidth);
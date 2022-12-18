"use strict";
// Slider // 

let slideIndexGa = 1;

  showSlidesga(slideIndexGa);
  
  let pos= document.getElementById("galerie").offsetTop;
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




function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
  
}

function plusSlides(n) {
    showSlidesga(slideIndexGa += n);
}

function currentSlide(n) {
    showSlidesga(slideIndexGa = n);
}

function showSlidesga(n) {
  let i;
  let slidesGa = document.getElementsByClassName("mySlidesGalerie");
  if (n > slidesGa.length) {slideIndexGa = 1}
  if (n < 1) {slideIndexGa = slidesGa.length}
  for (i = 0; i < slidesGa.length; i++) {
      slidesGa[i].style.display = "none";
  }
  slidesGa[slideIndexGa-1].style.display = "block";
}



// button => fest unten //
function scoole(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }



// nav-hängen // 
window.addEventListener("scroll", ()=>{
    let topA=document.getElementById("topG").offsetTop;
    let nav=document.querySelector(".nav-desktop");
    let topC= document.getElementById("welcome-g").offsetHeight;
    if(window.scrollY>=topA){
        nav.classList.add("nav-toggel");
        nav.classList.remove("nav-toggel-1");
        document.getElementById("dropdown-lang").style.position="fixed";
        document.getElementById("dropdown-lang").style.opacity="80%";
    }
    else if (window.scrollY<topA && nav.classList[1]=="nav-toggel"){
        nav.classList.remove("nav-toggel");
        nav.classList.add("nav-toggel-1");
        document.getElementById("dropdown-lang").style.position="absolute";
        document.getElementById("dropdown-lang").style.display="none";
        document.getElementById("dropdown-lang").style.opacity="90%";
        document.getElementById("DE").style.color="#fff";
        document.getElementById("DE-pfeil").style.color="#fff";
      }
      else if(window.scrollY<topC){
        nav.classList.remove("nav-toggel-1");
      }
});
   

 // nav-mobile-hängen //
 let nav=document.querySelector("nav>.nav-mobile");
 window.addEventListener("scroll",()=>{
   let a=document.getElementById("topG").offsetTop;
   let topC= document.getElementById("welcome-g").offsetHeight;
   if(window.scrollY>=a){
     document.querySelector("nav>.nav-mobile").classList.remove("nav-mobile-v"); 
     document.querySelector("nav>.nav-mobile").classList.add("nav-mobile-r");
     document.getElementById("dropdown-menü").style.position="fixed";
     document.getElementById("dropdown-menü").style.opacity="80%";
   }
   else if(window.scrollY<a && nav.classList[1]=="nav-mobile-r" ){
     document.querySelector("nav>.nav-mobile").classList.remove("nav-mobile-r");
     document.querySelector("nav>.nav-mobile").classList.add("nav-mobile-v");
     document.getElementById("dropdown-menü").style.position="absolute";
   }
   else if(window.scrollY<topC){
     document.querySelector("nav>.nav-mobile").classList.remove("nav-mobile-v"); 
   }
}); 


// footer-obere-teil //
let erste=document.getElementById("erst");
if(window.innerWidth<=1100){
   let pad=(window.innerWidth/2)-125;
   erste.style.paddingLeft=`${pad}px`;
}
window.addEventListener("resize",()=>{
  if(window.innerWidth<=1100){
    let pad=(window.innerWidth/2)-125;
    erste.style.paddingLeft=`${pad}px`;
 }
 else{
  erste.style.paddingLeft=0;
 }
})
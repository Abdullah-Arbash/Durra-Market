"use strict";

// menü-Button => Navigationleiste //
function myFunction(x) {
    x.classList.toggle("change");          
  }


 // dropdown-menü => Navigationleiste //
 function dropdown(){
          
    let aktiv=document.getElementsByClassName("nav-mobile-buttom")[0].classList;
     if(aktiv=='nav-mobile-buttom'){
        document.getElementById("dropdown-menü").style.display='none';
        document.getElementById("dropdown-lang-mobiel-list").style.display="none";
     }
     else{
       document.getElementById("dropdown-menü").style.display='inherit';
     }
   }
  
    window.addEventListener("resize",()=>{
      let aktive = document.getElementsByClassName("nav-mobile-buttom")[0].classList;
     if(window.innerWidth>=1035){
       document.getElementById("dropdown-menü").style.display='none';
       document.getElementById("dropdown-lang").style.display="none";
       document.getElementById("DE").style.color="#fff";
       document.getElementById("DE-pfeil").style.color="#fff";
       document.getElementById("dropdown-lang-mobiel-list").style.display="none";
       document.getElementById("DE-m").style.color="#fff";
       document.getElementById("DE-m-pfeil").style.color="#fff";
       
     }
     else if(window.innerWidth<1035 && aktive!='nav-mobile-buttom'){
       document.getElementById("dropdown-menü").style.display='inherit';
     }
    });
     
  
   
  
   let pfeil=document.getElementById("pfeil-lang"); 
   
    pfeil.addEventListener("click", ()=>{
      let pfeilPos=pfeil.getBoundingClientRect().x;
    document.getElementById("dropdown-lang").style.left= pfeilPos+"px";
      if(document.getElementById("dropdown-lang").style.display=="none"){
        document.getElementById("dropdown-lang").style.display="inherit";
        document.getElementById("DE").style.color="#EB1D22";
        document.getElementById("DE-pfeil").style.color="#EB1D22";
      }
      else{
        document.getElementById("dropdown-lang").style.display="none";
        document.getElementById("DE").style.color="#fff";
        document.getElementById("DE-pfeil").style.color="#fff";
      }
      
    });
  
  
   // window.addEventListener("resize", ()=>{
   //   if(window.innerWidth>1035){
   //     console.log("w");
   //     if(document.getElementById("dropdown-lang").style.display=="inherit"){
   //       console.log("bin da");
   //       let pfeilPos=pfeil.getBoundingClientRect().x;
   //       document.getElementById("dropdown-lang").style.left= pfeilPos+"px";
   //   }
   //   }
    
   // });
  
  
    let pfeilMobiel = document.getElementById("pfeil-lang-mobiel");
  
    pfeilMobiel.addEventListener("click", ()=>{
       if(document.getElementById("dropdown-lang-mobiel-list").style.display=="none"){
        document.getElementById("dropdown-lang-mobiel-list").style.display="inherit";
        document.getElementById("DE-m").style.color="#EB1D22";
        document.getElementById("DE-m-pfeil").style.color="#EB1D22";
       }
       else{
        document.getElementById("dropdown-lang-mobiel-list").style.display="none";
        document.getElementById("DE-m").style.color="#fff";
        document.getElementById("DE-m-pfeil").style.color="#fff";
       }
    });





 
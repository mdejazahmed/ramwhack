let menuIcon=document.getElementById("menuIcon")
let closeIcon=document.getElementById("closeIcon")
let mobileNav=document.getElementById("mobileNavContainer")
let serviceBtn=document.getElementById("mobileServiceBtn")
let mobileFloatDiv=document.getElementById("mobileFlotService")


menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("d-none")
    closeIcon.classList.toggle("d-none")
    mobileNav.style.display="block"
})

closeIcon.addEventListener("click",()=>{
    closeIcon.classList.toggle("d-none")
    menuIcon.classList.toggle("d-none")
    mobileNav.style.display="none"
})

serviceBtn.addEventListener("click",()=>{
   if(mobileFloatDiv.style.display==="none"){
    mobileFloatDiv.style.display="block"
   }
   else{
mobileFloatDiv.style.display="none"
   }
})


let input=document.querySelector('input');

input.addEventListener("click",(ev)=>{
     console.log('aa');
     ev.stopPropagation();
    
     header=document.querySelector("header");
     

     header.classList.toggle("esconder");
     console.log(header);
});
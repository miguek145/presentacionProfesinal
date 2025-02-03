

let main=document.querySelector('main');

main.addEventListener("click",(ev)=>{
     location.href="../index.html";
});

let input=document.querySelector('input');

input.addEventListener("click",(ev)=>{
     console.log('aa');
     ev.stopPropagation();
    
     header=document.querySelector("header");
     

     header.classList.toggle("esconder");
     console.log(header);
});
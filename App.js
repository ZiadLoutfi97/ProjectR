
let text=document.querySelector(".sec-text");
const textLoad= () => {
    setTimeout(() =>{
        text.textContent="Reem";
    },0);
    setTimeout(() =>{
        text.textContent="My Love";
    },1000);
    setTimeout(() =>{
        text.textContent="My life";
    },2000);
    setTimeout(() =>{
        text.textContent="My Everything";
    },3000);
}

textLoad();
setInterval(textLoad,4000);  

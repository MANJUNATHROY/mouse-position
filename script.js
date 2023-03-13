let output=document.querySelector(".output");
window.addEventListener("mousemove",(e)=>{
    let xpos=e.clientX;
    let ypos=e.clientY;
    output.innerHTML=`<div><span>X : ${xpos} px</span></div><div><span>Y : ${ypos} px</span></div>`
})
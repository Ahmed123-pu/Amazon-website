const images=document.querySelectorAll(".header-sider ul img");
const next_btn=document.querySelector(".next");
const prev_btn=document.querySelector(".prev");
let n=0;
function change(){
for(let i=0;i<images.length;i++){
images[i].style.display="none";
}
images[n].style.display="block";
}
change();
prev_btn.addEventListener("click" , (e)=>{
    if(n > 0){
        n--;
    }else{
        n=images.length-1;
    }
    change();
})
next_btn.addEventListener("click",(e)=>{
    if(n<images.length-1){
        n++;
    }else{
        n=0;
    }
    change();
})
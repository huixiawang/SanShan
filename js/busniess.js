window.onload=function(){
    let jia=document.querySelector(".list .one .right .jia img");
    let footer1=document.querySelector("footer");
    let footer2=document.querySelector(".footer2");
    let qu=document.querySelector(".footer2 .end .qi");
    let tang=document.querySelector(".header");
    jia.onclick=function () {
        footer1.style.display="none";
        footer2.style.display="block";
    }
    qu.onclick=function(){
        tang.style.display="block";
    }
}

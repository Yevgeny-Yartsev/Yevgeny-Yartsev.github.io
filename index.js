function assign()
{
    const var_cont=document.querySelector("#cont");
    var_cont.addEventListener('click',  minimize, false);
}
function minimize()
{
    var ele=document.getElementById("WebGL");
    ele.setAttribute("src", "about:blank");
    ele.style.display="none";

    var el = document.getElementById("main_section");
    el.style.transition="all 0.5s"
    el.style.width = "20px";
    el.style.paddingLeft = "0px";
    el.style.paddingRight = "0px";
}
function maximize()
{
    var el = document.getElementById("main_section");
    el.style.transition="all 0.5s"
    el.style.width = "40%";
    el.style.padding = "20px";

    var ele=document.getElementById("WebGL");
    ele.style.display="block";
}
window.addEventListener('load', assign, false);
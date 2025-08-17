let name=document.querySelector("#user_name")
let userdata=document.querySelector("#user")
let links=document.querySelector("#links")
if(localStorage.getItem("username"))
{
    links.remove()
    name.style.display="block"
    userdata.innerHTML=localStorage.getItem("username")
}

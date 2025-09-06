const searchBox=document.getElementById("input-box")
const add_btn=document.getElementById("add-btn")
const list_container=document.getElementById("list-container")

function addTask(){
    if(searchBox.value===""){
alert("Please Enter a task and continue")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=searchBox.value
        list_container.appendChild(li)
        searchBox.value=""
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        saveData()
    }
}
function saveData(){
    localStorage.setItem("data",list_container.innerHTML)
}
function showData(){
    list_container.innerHTML=localStorage.getItem("data")
}

list_container.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

showData()
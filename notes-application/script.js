const createBtn = document.getElementById("crt-nts")
const inputContainer = document.querySelector(".nts-container")

function add_inputBox() {
    let inputBox = document.createElement("p")
    inputBox.contentEditable = "true"
    inputBox.classList = "input-box"
    let img = document.createElement("img")
    img.src = "images/delete.png"
    inputContainer.appendChild(inputBox).appendChild(img)
    saveData()

}
function saveData(){
    localStorage.setItem("data",inputContainer.innerHTML)
}
function showData(){
    inputContainer.innerHTML=localStorage.getItem("data")
}
createBtn.addEventListener("click",add_inputBox)

inputContainer.addEventListener("click", (e) => {
    if (e.target.tagName == "IMG") {
        e.target.parentElement.remove()
        saveData()
    }
})


showData()


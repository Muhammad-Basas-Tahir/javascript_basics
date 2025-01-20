const inputText = document.querySelector("#inputText")
const addBtn = document.querySelector("button")
const list = document.querySelector("ol")
addBtn.addEventListener("click" , () => {

    const item = document.createElement("li")
    item.textContent = inputText.value

    const delBtn = document.createElement("button")
    delBtn.textContent = "remove"

    delBtn.addEventListener("click" , () => {
        list.lastElementChild.remove()
    })

    item.appendChild(delBtn)
    list.appendChild(item)
    inputText.value = ""
})

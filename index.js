const tasksec = document.getElementById("bottom")
const bottommain = document.createElement("div")
bottommain.className = "bottom-main"
tasksec.append(bottommain)
const listoftasks = document.createElement("ul")
listoftasks.className = "listoftasks"

function newtask(){
    const input = document.getElementById("theinput")
    const task = document.createElement("li")
    task.className = "oneofthetasks"
    const createbutton = document.createElement("button")
    const deletebutton = document.createElement("button")
    createbutton.textContent = "create"
    deletebutton.textContent = "delete"
    const circle = document.createElement("span")
    circle.className = "circle"
    const text = document.createElement("span")
    text.className = "text"
    text.textContent = input.value
    const bottomright = document.createElement("div")
    bottomright.className = "bottomright"
    const bottomleft = document.createElement("div")
    bottomleft.className = "bottomleft"
    bottomleft.append(circle,text)
    bottomright.append(createbutton,deletebutton)
    task.append(bottomleft,bottomright)
    listoftasks.append(task)
    circle.addEventListener("click",()=>{
        circle.classList.toggle("checked");
        console.log(task.classList);
    })
    input.value=""
    input.focus()
}

bottommain.append(listoftasks)



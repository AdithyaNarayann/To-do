const tasksec = document.getElementById("bottom")
const bottommain = document.createElement("div")
bottommain.className = "bottom-main"
tasksec.append(bottommain)
const listoftasks = document.createElement("ul")
bottommain.append(listoftasks)
listoftasks.className = "listoftasks"

function newtask(){
    const input = document.getElementById("theinput")
    const task = document.createElement("li")
    task.className = "oneofthetasks"
    task.textContent = input.value
    listoftasks.append(task)
    input.value=""
    input.focus()
}
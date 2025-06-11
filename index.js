const tasksec = document.getElementById("bottom")
const listoftasks = document.createElement("ul")
tasksec.append(listoftasks)
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
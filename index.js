const tasksec = document.getElementById("bottom")
const bottommain = document.createElement("div")
bottommain.className = "bottom-main"
tasksec.append(bottommain)
const listoftasks = document.createElement("ul")
listoftasks.className = "listoftasks"
let i = 0
function newtask(){
    i++
    const input = document.getElementById("theinput")
    const task = document.createElement("li")
    task.className = "oneofthetasks"
    const deletebutton = document.createElement("button")
    deletebutton.textContent = "delete"
    const circle = document.createElement("span")
    circle.className = "circle"
    const text = document.createElement("span")
    text.className = "text"
    if(!input.value.trim()){
        input.value = ""
        input.focus()
        return
    }
    text.textContent = input.value
    const bottomright = document.createElement("div")
    bottomright.className = "bottomright"
    const bottomleft = document.createElement("div")
    bottomleft.className = "bottomleft"
    bottomleft.append(circle,text)
    bottomright.append(deletebutton)
    task.append(bottomleft,bottomright)
    listoftasks.append(task)
    circle.addEventListener("click",()=>{
        circle.classList.toggle("checked");
        console.log(circle.classList)
        let i = 0
        if(circle.className === ['circle', 'checked']){
            i++
        }
        else{
            if(i!==0){
                i--
            }
            else{
            }
        }
    })
    deletebutton.addEventListener("click",()=>{
        task.remove()
    })
    input.value=""
    input.focus()
}
console.log(i)
bottommain.append(listoftasks)


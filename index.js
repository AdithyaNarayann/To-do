const tasksec = document.getElementById("bottom")
const bottommain = document.createElement("div")
bottommain.className = "bottom-main"
tasksec.append(bottommain)
const listoftasks = document.createElement("ul")
listoftasks.className = "listoftasks"
const keep = document.getElementById("keep")
let i = 0
let j = 0
const addbutton = document.getElementById("addbutton")
addbutton.addEventListener("click",()=>{
    i++
    newtask()
})
function newtask(){
    const taskcom = document.getElementById("taskcom")
    const progressFill = document.querySelector(".progress-fill")
    taskcom.textContent = `${j}/${i}`
    progressFill.style.width = i === 0 ? "0%" : `${(j/i)*100}%`

    const input = document.getElementById("theinput")
    const task = document.createElement("li")
    task.className = "oneofthetasks"
    const deletebutton = document.createElement("button")
    deletebutton.className = "delete"
    const link = document.createElement("img")
    deletebutton.append(link)
    link.src = "Screenshot 2025-06-12 210508.png"
    link.className = "img-link"

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
        const waschecked = circle.classList.toggle("checked");
        keep.textContent = "Keep it up!"
        if(waschecked){
            j++
        }
        else{
            j--
        }
        taskcom.textContent = `${j}/${i}`
        progressFill.style.width = i === 0 ? "0%" : `${(j/i)*100}%`
        if(j===0){
            keep.textContent = "Get Moving!"
        }
    })

    deletebutton.addEventListener("click",()=>{
        if (circle.classList.contains("checked")){
            j--
        }
        i--
        task.remove()
        taskcom.textContent =`${j}/${i}`
        progressFill.style.width = i === 0 ? "0%" : `${(j/i)*100}%`
    })

    input.value=""
    input.focus()
}
bottommain.append(listoftasks)

const roles=[
"AI Enthusiast",
"Cybersecurity Learner",
"Python Developer",
"Problem Solver"
]

let i=0
let j=0
let text=""
let deleting=false

function type(){

const element=document.querySelector(".typing")

if(!deleting && j<=roles[i].length){
text=roles[i].substring(0,j++)
element.textContent=text
}

if(deleting && j>=0){
text=roles[i].substring(0,j--)
element.textContent=text
}

if(j==roles[i].length){
deleting=true
}

if(j==0 && deleting){
deleting=false
i++
if(i==roles.length) i=0
}

setTimeout(type,100)

}

type()

document.querySelectorAll(".skill").forEach(skill=>{
skill.onclick=()=>{
document.querySelectorAll(".skill").forEach(s=>s.classList.remove("active"))
skill.classList.add("active")
}
})
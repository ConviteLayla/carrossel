const persons = [
    {
        photo: "person-1.jpeg",
        author: "Paola Eduarda",
        job: "Desenvolvedora Front-End",
        info: "Paola é uma desenvolvedora apaixonada por criar interfaces de usuário intuitivas e responsivas."
    },
    {   
        photo: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg",
        author: "Carlos Silva",
        job: "Designer Gráfico",
        info: "Carlos é um designer criativo com experiência em branding e design de produtos."
    },
    {
        photo: "https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        author: "Maria Oliveira",
        job: "Gerente de Projetos",
        info: "Maria é uma gerente de projetos experiente, especializada em metodologias ágeis."
    },
    {
        photo: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        author: "João Pereira",
        job: "Analista de Dados",
        info: "João é um analista de dados que adora transformar dados brutos em insights valiosos."
    }
];

const photo = document.querySelector(".person-image")
const author = document.querySelector(".author")
const job = document.querySelector(".job")
const info = document.querySelector(".info")
const btn = document.querySelectorAll("#prev-btn")

let index = 0
function loadProfile(person){
    photo.setAttribute("src", persons[person].photo)
    author.textContent = persons[person].author
    job.textContent = persons[person].job 
    info.textContent = persons[person].info

    document.querySelector(".next").style.color = person == persons.length - 1 ? "#00437a23" : "#00437a"
    document.querySelector(".before").style.color = person == 0 ? "#00437a23" : "#00437a"
}

window.addEventListener("DOMContentLoaded", loadProfile(index))

btn.forEach((item) => {
    item.addEventListener("click", (event) => {
        if (event.currentTarget.classList.contains("next")){
            index++
            index = index > persons.length - 1 ? persons.length - 1 : index
            loadProfile(index)
        }
        else if (event.currentTarget.classList.contains("before")){
            index--
            index = index < 0 ? 0 : index
            loadProfile(index)
        }
    })
})
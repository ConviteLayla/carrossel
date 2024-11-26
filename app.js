const persons = [
    {
        photo: "person-1.jpeg",
        nome: "Paola Eduarda",
        trabalho: "Desenvolvedora Front-End",
        descricao: "Paola é uma desenvolvedora apaixonada por criar interfaces de usuário intuitivas e responsivas."
    },
    {   
        photo: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg",
        nome: "Carlos Silva",
        trabalho: "Designer Gráfico",
        descricao: "Carlos é um designer criativo com experiência em branding e design de produtos."
    },
    {
        photo: "https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nome: "Maria Oliveira",
        trabalho: "Gerente de Projetos",
        descricao: "Maria é uma gerente de projetos experiente, especializada em metodologias ágeis."
    },
    {
        photo: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nome: "João Pereira",
        trabalho: "Analista de Dados",
        descricao: "João é um analista de dados que adora transformar dados brutos em insights valiosos."
    }
];

const photo = document.querySelector(".person-image")
const author = document.querySelector(".author")
const job = document.querySelector(".job")
const info = document.querySelector(".info")

window.addEventListener("DOMContentLoaded", () => {
    photo.setAttribute("src", persons[index].photo)
    author.textContent = persons[index].nome
    job.textContent = persons[index].trabalho
    info.textContent = persons[index].descricao
    document.querySelector(".before").style.color = "#00437a7a"
})

const btn = document.querySelectorAll(".prev-btn")
index = 0
btn.forEach((itens) => {
    itens.addEventListener("click", (event) =>  {
        if (event.target.classList == "prev-next") {
            if (index >= 0 && index < persons.length - 1) {
                index++
                photo.setAttribute("src", persons[index].photo)
                author.textContent = persons[index].nome
                job.textContent = persons[index].trabalho
                info.textContent = persons[index].descricao
                document.querySelector(".before").style.color = "#00437a"
                if (index == 3) {
                document.querySelector(".next").style.color = "#00437a7a"

                }

            }
            else{
                index = persons.length - 1 
                
            }
        }
        else if (event.target.classList == "prev-before") {
            if (index > 0){
                index--
                photo.setAttribute("src", persons[index].photo)
                author.textContent = persons[index].nome
                job.textContent = persons[index].trabalho
                info.textContent = persons[index].descricao
                document.querySelector(".next").style.color = "#00437a"
                if (index == 0) {
                    document.querySelector(".before").style.color = "#00437a7a"

                }
            }
            else {
                index = 0
            }
        }
    })

})
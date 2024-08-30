//objeto Widnow = janela do navegador

// window.console.log("Testei")
// window.alert("Alertei")
// window.prompt("Diz para mim o que eu ja sei:")

//objeto document = codigo htmml
// console.log(document.head)
// console.log(document.body)

//Acessando elementos por tag, class e id
var titulo = document.getElementsByTagName("h1")[0]
var paragrafos = document.getElementsByClassName("h1")[0]
var para3 = document.getElementById("p3")

paragrafos[0].innerText = "Arroz"
para3.innerHTML = "<h3> Novo texto aqui </h3"


// // Fazer com array
// var alunos = ["Pedro","Tiago","João"]
// var notas =[7,8,9]

// //console.log(alunos[1],"=",notas[1])


// //Declarando um objeto
// var aluno ={
//     nome: "Pedro", nota:8
// }

// console.log(aluno.nome)
// console.log(aluno.nota)
// console.log(aluno.nome, "-",aluno.nota)

// //
// var pessoa={
//     nome:"Maria",
//     idade:20
// }
// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa["Idade"])

// //adicionando propriedades
// pessoa.rg ="123456789"

// pessoa["profissão"] ="Diretora"
// console.log(pessoa);

//Adicionando propriedade com uma variavel
// var novaProp ="Sobrenome"
// pessoa[novaProp] ="Do bairro"
// console.log(pessoa.sobrenome);

//Criando metodos
// var animal ={
//     nome:"Mel",
//     raca:"Poodle",
//     latir:function(){
//         console.log("Au Au")
//     },
//     andar:function(){
//         console.log("Andando...")
//     } 
// }

// console.log(animal.nome)
// console.log(animal["raca"])
// animal.latir()
// animal.andar()


// var aluno = {
//     nome:"Cris",
//     notas: [7, 7, 8],
//     media: function(n1,n2,n3){
//         return((n1+n2+n3)/3)
//     }
// }

// console.log("O nome do aluno é:",aluno.nome)
// console.log("Sua média foi:",aluno.media(aluno.notas[0],aluno.notas[1],aluno.notas[2]))


//Metdo com função externa
// function calculaMedia(n1,n2){
//     return((n1+n2)/2)
// }
// var aluno1 = {
//     nome:"Cris",
//     notas: [5, 7],
//     media: calculaMedia
// }
// console.log("O nome do aluno é:",aluno1.nome)
// console.log("Sua média foi:",aluno1.media(aluno1.notas[0],aluno1.notas[1]))
// var aluno2 = {
//     nome:"Messi",
//     notas: [7, 7],
//     media: calculaMedia
// }
// console.log("O nome do aluno é:",aluno2.nome)
// console.log("Sua média foi:",aluno2.media(aluno2.notas[0],aluno2.notas[1]))


//Uso do this, dentro do objeto
// var aluno ={
//     nome:"Neymar",
//     notas:[10,10],
//     media:function(){
//         return(( this.notas[0]+this.notas[1]) /2)
//     }
// }

// console.log(aluno.media())


//Uso do this, fora do objeto

function calcularMediaORetorno(){
    return(( this.notas[0]+this.notas[1]) /2)
}

var aluno1 ={
    nome:"João",
    notas:[6,8],
    media:calcularMediaORetorno
}
var aluno2 ={
    nome:"Maria",
    notas:[8,9],
    media:calcularMediaORetorno
}
console.log(aluno1.media())
console.log(aluno2.media())
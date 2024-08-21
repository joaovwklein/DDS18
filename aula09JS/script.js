// Mostra um alerta na página
// alert("Outra mensagem")

// Escreve mensagem no console
// console.log("Olha a mensagem de novo")

// var texto = "Eae, fml"
// var numero = 27
// var TrueOrFalse = true
// var nulo = null
// var indefinido

// console.log(texto,numero,TrueOrFalse,nulo,indefinido)
// console.log(typeof(texto))
// console.log(typeof(numero))
// console.log(typeof(TrueOrFalse))
// console.log(typeof(nulo))
// console.log(typeof(indefinido))

// mostrar o tipo da variavel
// (typeof)

// Operadores

// Aritimeticos: +-/*%

// var a = 10
// var b = 3

// console.log("Soma",a+b)
// console.log("Subtração",a-b)
// console.log("Multiplicação",a*b)
// console.log("Divisão",a/b)
// console.log("Módulo",a%b)


// Lógicos : && , || , !

// var verdade = true 
// var mentira = false

// console.log(verdade && mentira)
// console.log(verdade || mentira)
// console.log(verdade && !mentira)


// Relacionais : >,<,>=,<=,==,!=,===,!==
// var a = 10
// var b = 5
// var c =  "10"

// console.log("Relacionais")
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a == b)
// console.log(a != b)
// console.log(a === c)
// console.log(a !== c)


// Condicionais
//if

// var estaVivo = true
// if(estaVivo){
//     console.log("Está vivo");
// }
// else if(!estaVivo){
//     console.log("Está morto");
// }
// else{
//     console.log("Não ta nada")
// }

// //Swith
// var camisa = "Preta"

// switch(camisa){
//     case "Azul":
//         console.log("A camisa é azul")
//         break
//     case "Amarela":
//         console.log("A camisa é amarela")
//         break
//     case "Preta":
//         console.log("A camisa é preta")
//         break
//         default:
//             console.log("Cor de camisa indefinida")
// }

//Loops
//For 
// for(var i =0; i < 5; i++){
//     console.log("Estou aqui")
// }
//     console.log("Acabou o FOR")

// //while
// var it =1
// while (it<10){
//     console.log("Estou aqui agora")
//     it++
// }

// function teste1(){
//     console.log("Estou aqui agora na função 1")
// }
// function teste2(){
//     console.log("Estou aqui agora na função 2")
// }


//Interação com o usuário via prompt

// var resposta1 =prompt ("Digite algo")
// var resposta2 =prompt ("Digite um outro algo")

// console.log(resposta,resposta2)

var resposta1 = prompt("Informe o primeiro numero")
var resposta2 = prompt("Infore o segundo numero")
var resultado = Number(resposta1)+Number(resposta2)

console.log(resultado)

alert(resultado)
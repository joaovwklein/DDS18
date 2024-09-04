// function mostrarTexto(){
//     console.log("O texto apareceu")
// }

// var contagem = 0

// function mostrarContagem(){
//     contagem++
//     console.log(contagem)
// }


// setTimeout(mostrarTexto, 5000)

// setInterval(mostrarContagem,1000)

var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var textoSaudacao = document.getElementById('saudacaoTexto')
var mes = document.getElementById('mes')
var ano = document.getElementById('ano')

var diasSemana = ['DOMINGO','SEGUNDA','TERÇA','QUARTA','QUINTA','SEXTA','SABADO']

var cumprimento = trocaSaudacao()


var atualizarRelogio = setInterval( function (){
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay()
    var mesAtual = dataAtual.getMonth()
    var anoAtual = dataAtual.getFullYear()

    
    if(horaAtual<10)
        horaAtual = "0" + horaAtual

    if(minutoAtual<10)
        minutoAtual = "0" + minutoAtualAtual

    if(segundoAtual<10)
        segundoAtual = "0" + segundoAtual

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    textoSaudacao.textContent =  `${cumprimento} /${diasSemana[diaAtual]}`
    mes.textContent = mesAtual
    ano.textContent = anoAtual
} )

function trocaSaudacao(hora){
    if(hora< 6){
        return 'Boa Madrugada'
    }
    else if(hora <12){
        return "Bom dia"
    }
    else if(hora < 18){
        return "Boa tarde"
    }
    else{
        return 'Boa Noite'
    }
}
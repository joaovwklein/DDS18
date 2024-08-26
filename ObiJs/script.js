// PNEU
function calcularDiferencaPressao(N, M) {
    return N - M;
}


//TOMADA
function tomadasDisponiveis(T1, T2, T3, T4) {
    const totalTomadas = T1 + T2 + T3 + T4;
    return totalTomadas - 3;
}

//RECORDE
function verificarRecordes(R, M, L) {
    if (R < M) {
        console.log("RM");
    } else {
        console.log("*");
    }

    if (R < L) {
        console.log("RO");
    } else {
        console.log("*");
    }
}

//CAIXAS
function calcularMinimoDeViagens(A, B, C) {
    if (A + B < C) {
        return 1;
    }
    if (A < B && B < C || A + B >= C) {
        return 2;
    }
    return 3;
}

//IDADE
function idadeDeCamila(idade1, idade2, idade3) {
    let idades = [idade1, idade2, idade3];
    idades.sort((a, b) => a - b);
    return idades[1];
}

//CARRO
function ajustarVelocidade(A, B, C) {
    const difA_B = B - A;
    const difB_C = C - B;
    if (difA_B < difB_C) {
        return 1; 
    } else if (difA_B > difB_C) {
        return -1;
    } else {
        return 0;
    }
}

//LESMA
function calcularDiasParaTopo(A, S, D) {
    let dias = 0;
    let alturaAtual = 0;

    while (alturaAtual < A) {
        dias++;
        alturaAtual += S;
        
        if (alturaAtual >= A) {
            break;
        }
        
        alturaAtual -= D;
    }

    return dias;
}

//IDADE DONA MONICA 
function idadeDoFilhoMaisVelho(M, A, B) {
    const C = M - (A + B);
    return Math.max(A, B, C);
}    

//BONDINHO
function podeTransportarTodos(A, M) {
    const capacidadeMaxima = 50;
    const totalPessoas = A + M;

    if (totalPessoas <= capacidadeMaxima) {
        return 'S';
    } else {
        return 'N'; 
    }
}


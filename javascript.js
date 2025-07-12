function escolhadocomputador() {
    const escolha = ["pedra", "papel", "tesoura"];
    const escolhaaleatoria = Math.floor(Math.random() * escolha.length);
    return escolha[escolhaaleatoria];
}

function escolhadojogador() {
    let escolhajogador = prompt(" Escolha: pedra, papel, tesoura?").toLowerCase();
    while (escolhadojogador !== "pedra" && escolhadojogador !== "papel" && escolhadojogador !== "tesoura") {
        escolhadojogador = prompt("Escolha invalida! Por favor edigite: pedra, papel, tesoura?").toLowerCase();
    }
    return escolhadojogador;
}

let pontoscomputador = 0;
let pontosjogador = 0;

function jogar() {
    const escolhacomputador = escolhadocomputador();
    const escolhajogador = escolhadojogador();
    if (escolhacomputador === escolhajogador) {
        console.log("Empate!");
    } else if (
        (escolhacomputador === "pedra" && escolhajogador === "tesoura") ||
        (escolhacomputador === "tesoura" && escolhajogador === "papel") ||
        (escolhacomputador === "papel" && escolhajogador === "pedra")
    ) {
        pontoscomputador++;
        console.log("Computador ganhou!");
        if (pontosjogador > pontoscomputador) {
            console.log("Jogador ganhou!");
        }
    } else if (pontosjogador < pontoscomputador) {
        console.log("Computador ganhou!");
    }
    else {
        console.log("EMApte gerral de pontos!");
    }
        
}

for (let i = 0; i < 5; i++) {
    jogar();
}


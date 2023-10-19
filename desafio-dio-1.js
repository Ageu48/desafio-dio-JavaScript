// Crie uma variável que contenha o nome e a quantidade de XP do herói
let heroi = {
    nome: "Mutano",
    xp: 6000,
};

// Use uma estrutura de decisão para determinar o nível do herói com base na quantidade de XP
if (heroi.xp < 1000) {
    console.log("O Heroi de nome " + heroi.nome + " está no nível Ferro.");
} else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    console.log("O Heroi de nome " + heroi.nome + " está no nível Bronze.");
} else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    console.log("O Heroi de nome " + heroi.nome + " está no nível Prata.");
} else if (heroi.xp >= 6001 && heroi.xp <= 7000) {
    console.log("O Heroi de nome " + heroi.nome + " está no nível Ouro.");
} else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    console.log("O Heroi de nome " + heroi.nome + " está no nível Platina.");
} else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    console.log("O Heroi de nome " + heroi.nome + " está no nível Ascendente.");
} else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    console.log("O Heroi de nome " + heroi.nome + " está no nível Imortal.");
} else {
    console.log("O Heroi de nome" + heroi.nome + " está no nível Radiante.");
}

const pixelBoard = document.querySelector("#pixel-board");

function criacaoPixels(tamanho) {
    for (index =0; index < tamanho; index +=1) {
        const linha = document.createElement("div");
        linha.classList.add("linha");
        pixelBoard.appendChild(linha);

     for (index2 =0; index2 < tamanho; index2 +=1) {
            const coluna = document.createElement("div");
            coluna.classList.add("pixel");
            pixelBoard.appendChild(coluna);        
        }
    }
}

criacaoPixels(5);

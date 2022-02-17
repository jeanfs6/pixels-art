const corPreta = document.querySelector("#black");

const colorPalette = document.querySelector("#color-palette");

const pixelBoard = document.querySelector("#pixel-board");

window.onload = corPreta.classList.add("selected");



colorPalette.addEventListener("click", selecionaCores);


function selecionaCores (event) {
    const elemento = event.target
    if (elemento.id === "color-palette") {
        return;
    }

    const corSelecionada = document.querySelector(".selected");
    corSelecionada.classList.remove("selected");
    elemento.classList.add("selected");
    console.log(elemento.id);
}
    pixelBoard.addEventListener("click", pintarPixels)

    
function pintarPixels (event) {
    const elemento = event.target
    if (elemento.id === "pixel-board") {
        return;
    }
    
     const corSelecionada = document.querySelector(".selected")
      const style = getComputedStyle(corSelecionada);
          elemento.style.backgroundColor = style.backgroundColor;
}
    
    

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

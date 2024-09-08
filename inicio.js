let section = document.getElementById("resultados-pesquisa");

let inicio = "";
let i = 0;
for (let dado of dados) {

    if (i >= 3) {
        break;
    }
    inicio += `
        <div class="item-resultado">
            <a href="#" target="_blank"><h2>${dado.titulo}</h2></a>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações sobre o ${dado.titulo} aqui</a>
        </div>
    `;  
    i++;  
}

section.innerHTML = inicio
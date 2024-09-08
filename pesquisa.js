function respostas() {

    // Seleciona o elemento HTML onde os resultados serão inseridos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
    
    // Inicializa uma string vazia para armazenar a HTML gerada
    let resultado = "";
    
    if (!campoPesquisa) {
        return;
    }

    // Itera sobre cada resultado de pesquisa
    for (let dado of dados) {
        campoPesquisa = campoPesquisa.toLowerCase();
        titulo = dado.titulo.toLowerCase(),
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria a estrutura HTML para cada resultado 
            resultado += `
                <div class="item-resultado">
                    <a href="#" target="_blank"><h2>${dado.titulo
                                                
                    }</h2></a>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações sobre o ${dado.titulo} aqui</a>
                </div>
            `;
        }    
    
    }

    if (!resultado) {

        resultado = `
            <p> Não foi encontrado nenhum resultado em nossa base de dados.</p>
        `;
        return;
    }
  
    // Insere a HTML gerada no elemento section
    section.innerHTML = resultado;
  }
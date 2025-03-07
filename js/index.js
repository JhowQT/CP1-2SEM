const frm = document.querySelector("form")                                                  // eventos ligagos a tag form serão capturados a partir desta VARIAVEL
const resp = document.querySelector("ul")                                                   // será a tag responsavel para mostrar as tarefas


let tarefas = [
    ...[{ idTarefa: "teste3", tituloTarefa: "testando obj", concluido: false }]             // cria um array de um unico objeto e acrescenta ao array TEREFAS com o metodo SPREAD
]


frm.addEventListener("submit", (e) => {                                                     // Criação do Evento para capturar os valores
    e.preventDefault()


    const idTarefa = frm.inId.value                                                         // Pega o Valor do ID
    const tituloTarefa = frm.inTitulo.value                                                 // Pega o Valot do TItulo
    const concluido = false                                                                 // Valor fixo da VARIAVEL concluido para FALSE 

    tarefas = [...tarefas, { idTarefa, tituloTarefa, concluido }]                           // usa SPREAD para reatribuir os objetos novos a lista junto com os valores anteriores da lista    

    resp.innerHTML = ""                                                                     // Limpa a TAG ul cada vez que o evento for acionado
    
    tarefas.forEach((tarefa, indiceLista) => {                                              // Cria um forEACh para iterar nos indices e elementos e seus valores 
                                                                                            // AQUI FOI JÀ FEITO A 4 QUESTÂO
        const li = document.createElement("li")                                             // variavel que cria a tag li dentro da TAG ul

        li.innerHTML = `                                                                    
        ID da Tarefa: ${tarefa.idTarefa} -  
        Título da Tarefa: ${tarefa.tituloTarefa} - 
        Concluido: ${tarefa.concluido ? "sim":"não"}
        <button ${tarefa.concluido ? "disabled" : ""} data-index="${indiceLista}">
            Concluir
        </button>`                                                                          // A variavel LI recebe os valores de cada elemento e seus valores dos objetos

        resp.appendChild(li)                                                                // A tag resp ira incomporar os valores do FOREACH
    })

    if(tarefas.length > 1){
        alert('Tarefa adicionado com sucesso')                                              // A partir do length se for maior que Pq 1 e já é valor inicial Se for maior ele exibe o alert
    }

    frm.reset()                                                                             // Limpa todos os campos do form
    frm.inId.focus()                                                                        // Foca na tag INPUT com valor InID

    const botoes = document.querySelectorAll("button[data-index]")                          // pega o valor anterior do botão já criado
    botoes.forEach((botao, incideParaIndicar) => {
    botao.addEventListener("click", () => {                                                 // Evento click ao botão BUTTON
        tarefas[incideParaIndicar].concluido = true

        resp.innerHTML = ""                                                                 // Remove os Valores anteriores
        tarefas.forEach((tarefa, ValorParaDesabilitar) => {
            const li = document.createElement("li");                                        // Cria o mesmo esquema anterior de criar um li
            li.innerHTML = `
                ID da Tarefa: ${tarefa.idTarefa} -  
                Título da Tarefa: ${tarefa.tituloTarefa} - 
                Concluído: ${tarefa.concluido ? "Sim" : "Não"}
                <button ${tarefa.concluido ? "disabled" : ""} data-index="${ValorParaDesabilitar}">
                    Concluir
                </button>
                `                                                                           // Responsavel por Desabilitar o botão
                resp.appendChild(li)                                                        // Atribui o novo valor com o possibilidade de desabiliatar o botão 
            })
        })                                                                                  // PROF CHEGAR ATÉ ESTÁ PARTE FOI UMA LUTA, TIME QUE RECORRER A CODIGOS PRONTOS PARA VER COMO IMPLIMENTAR ESTAS NOVAS FUNCOES DE DESSABILITAR DE FALSE PARA TRUE
    })
})

frm.btnPendentes.addEventListener("click",()=>{                                             // cria um novo evento para filtrar os pendentes
    
    const taredfaPendente = tarefas.filter(tarefa => !tarefa.concluido)                     // pega o a tarefa invertendo o seu valor

    resp.innerHTML = ""                                                                     // limpa o campo do ul

    taredfaPendente.forEach((tarefa)=>{
        const li = document.createElement("li")                                             // cria tag li para receber os valores dos objetos
        
        li.innerHTML = `
            ID da Tarefa: ${tarefa.idTarefa} -  
            Título da Tarefa: ${tarefa.tituloTarefa} - 
            Concluído: ${tarefa.concluido ? "Sim" : "Não"}
        `                                                                                   // valores dos objetos que serão mostrados dentro do LI
        resp.appendChild(li)                                                                // atribui uma nova tag ao UL onde li ja tem valores prontos
                                                                                            // como os valores foram invertidos pela negação apenas aqueles com não são mostrados
    })

})

const tituloMaiusculo = tarefas.map(tarefa => ({                                            // metodo MAP faz uma copia do array e pega o valor tituloTarefa e transforma em MAIUSCULO com o TOUPPERCASE
    ...tarefa,tituloTarefa:tarefa.tituloTarefa.toUpperCase()
}))

console.log(tituloMaiusculo)

frm.btnCloncluido.addEventListener("click", () =>{                                          // cria um evento para Habilitar o alert a partir do botão CONCLUIDO

    const tarefasConcluidas = tarefas.reduce((quantidadeConcluido,                          // variavel que recebe o retorno do reduce com os valores TRUE que ele ira encotrar
        {concluido}) => quantidadeConcluido + concluido,0)                                  // Faz um somatorio dos concluidos dos CONCLUIDOS por regra TRUE e FALSE são contabilizados com 1 e 0 isso ajuda na soma
    alert(`Aqui estao as quantidades de tarefas que já foram concluidas: ${tarefasConcluidas}`)// Faz o alert das somas dos TRUES e mostra na tela apos clicar no BOTÂO CONCLUIDO
})

frm.btnTarefaEspecifica.addEventListener("click", ()=>{                                     // evento para o alert da tarefa especifica
    
    const {tituloTarefa, concluido} = tarefas[tarefas.length - 1]                           // variavel que recebe o destructuring
    alert(`Titulo da Tarefa: ${tituloTarefa}\n                                              
        Pendencia da Tarefa: ${concluido ? "sim":"não"}`)                                   // Alert para mostrar a tarefa especifica
})

function criaTarefa(idTarefa, tituloTarefa, concluido = false){                             // função simples para criar uma tarefa
    return {idTarefa, tituloTarefa, concluido}                                              // Cria um objeto usando o return junto com odestructuring
}                                                                                                   
const functionCriaTarefa = criaTarefa("Teste","Deu certo")                                  // Imprime no console o a function
console.log(functionCriaTarefa)
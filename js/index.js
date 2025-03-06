const frm = document.querySelector("form")                                                  // eventos ligagos a tag form serão capturados a partir desta VARIAVEL
const resp = document.querySelector("ul")                                                   // será a tag responsavel para mostrar as tarefas


let tarefas = [
    ...[{ idTarefa: "teste3", tituloTarefa: "testando obj", concluido: false }]                // cria um array de um unico objeto e acrescenta ao array TEREFAS com o metodo SPREAD
]



frm.addEventListener("submit", (e) => {                                                     // Criação do Evento para capturar os valores
    e.preventDefault()


    const idTarefa = frm.inId.value                                                         // Pega o Valor do ID
    const tituloTarefa = frm.inTitulo.value                                                 // Pega o Valot do TItulo
    const concluido = false                                                                // Valor fixo da VARIAVEL concluido para FALSE 

    tarefas = [...tarefas, { idTarefa, tituloTarefa, concluido }]                           // usa SPREAD para reatribuir os objetos novos a lista junto com os valores anteriores da lista    

    resp.innerHTML = ""                                                                     // Limpa a TAG ul cada vez que o evento for acionado
    
    tarefas.forEach((tarefa, indiceLista) => {                                              // Cria um forEACh para iterar nos indices e elementos e seus valores 
                                                                                            // AQUI FOI JÀ FEITO A 4 QUESTÂO
        const li = document.createElement("li")                                             // variavel que cria a tag li dentro da TAG ul

        li.innerHTML = `                                                                    
        ID da Tarefa: ${tarefa.idTarefa} -  
        Título da Tarefa: ${tarefa.tituloTarefa} - 
        Concluido: ${tarefa.concluido ? "sim":"não"}`                                       // A variavel LI recebe os valores de cada elemento e seus valores dos objetos

        resp.appendChild(li)                                                                // A tag resp ira incomporar os valores do FOREACH
    })

    if(tarefas.length > 1){
        alert('Tarefa adicionado com sucesso')                                              // A partir do length se for maior que Pq 1 e já é valor inicial Se for maior ele exibe o alert
    }
    frm.reset()                                                                             // Limpa todos os campos do form
    frm.inId.focus()                                                                        // Foca na tag INPUT com valor InID
});

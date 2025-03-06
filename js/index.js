const frm = document.querySelector("form")                                                  // eventos ligagos a tag form serão capturados a partir desta VARIAVEL
const resp = document.querySelector("ul")                                                   // será a tag responsavel para mostrar as tarefas


let tarefas = [
    ...[{ idTarefa: "1", tituloTarefa: "Tarefa Inicial", concluido: false }]                // cria um array de um unico objeto e acrescenta ao array TEREFAS com o metodo SPREAD
]

// Fazendo os imports do script de cálculo
import { Receber } from "./script_calculo.js"
import { valorPremio } from "./script_calculo.js"

//Pegando os dados do dom
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Declarando o array
const coletor = []

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_dados = new FormData(formDados)

    const coletor = {
        descricao: form_dados.get('descricao'),
        quantidade: form_dados.get('quantidade')
    }

    addColetor(coletor)
    listColetor()

    formDados.reset()
})

//Criando a função para adicionar os construtores
const addColetor = (objColetor) => {
    coletor.push(objColetor)
}

//Criando a função para que os coletores tenham suas descrições exibidas
const listColetor = () =>{
    divResultado.innerHTML = ''
    coletor.forEach((elem,i) => {
        const recebido = Receber(elem)
        const premio = valorPremio(elem)
        const valorTotal = Number(recebido + premio)

        
        
        divResultado.innerHTML += 
            ` <div class= 'item-coletor'> 
            Empresa: ${elem.descricao} |
            Quantidade recolhida: ${elem.quantidade} |
            Valor recebido: R$ ${recebido} |
            Valor do prêmio: R$ ${premio} |
            Valor total: ${valorTotal} `

    
    });

}


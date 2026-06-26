//Pegando os dados do dom
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Declarando o array
const coletor = []

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const form_dados = new FormData(formDados)

    const coletor = {
        descricao: (form_dados.get('descricao')),
        quantidade: (form_dados.get('descricao'))
        
        addColetor(coletor)
        listColeor()

        formDados.reset()
    }

})
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
        quantidade: (form_dados.get('quantidade'))
        
        addColetor(coletor)
        listColeor()

        formDados.reset()
    }

    //Criando a função para adicionar os construtores
    const addColetor = (objColetor) =>{
        coletor.push(objColetor)
    }

    //Criando a função para que os coletores tenham suas descrições exibidas
    const listColetor()=>{
        coletor.forEach(elem,i => {
            
        });
    }

})
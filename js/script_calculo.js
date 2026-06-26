const Receber = (objColetor) =>{
    const tonelada = objColetor.quantidade
    const valorRecebido = ''
    const recebePremio = 'atingindo assim a meta esperada e portando recebendo a premiação de: R$'

    valorRecebido = tonelada * 220

    return valorRecebido
}

const valorPremio = (objColetor) =>{
    const premio = ''
     
    if (valorRecebido < 1000){
        premio = 'Não atingiu o valor para premiação'
    }else if (valorRecebido < 10000){
        premio = recebePremio + (valorRecebido * 0.08) 
    }else if (valorRecebido < 15000){
        premio = recebePremio + (valorRecebido * 0.10) 
    }else if (valorRecebido < 25000){
        premio = recebePremio + (valorRecebido * 0.15) 
    }else {
        premio = recebePremio + (valorRecebido * 0.20) 
    }
    
    return premio
}

const valorTotal = valorRecebido + premio

export {Receber, valorPremio, valorTotal}


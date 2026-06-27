const Receber = (objColetor) =>{
    let valorRecebido = ''
    valorRecebido = objColetor.quantidade * 220

    return valorRecebido
}

const valorPremio = (objColetor) =>{
    let premio = ''
    let valorRecebido = Receber(objColetor)

    if (valorRecebido < 1000){
        premio = 0.00

    }else if (valorRecebido < 10000){
        premio = (valorRecebido * 0.08) 

    }else if (valorRecebido < 15000){
        premio = (valorRecebido * 0.10) 

    }else if (valorRecebido < 25000){
        premio = (valorRecebido * 0.15) 
        
    }else {
        premio = (valorRecebido * 0.20) 
    }
    
    return premio
}


export {Receber, valorPremio}


export const listaCliente = () => {
    return fetch(`http://localhost:3000/profile/`)
    .then( (resposta)=> { 
        return resposta.json()
    })
    
}
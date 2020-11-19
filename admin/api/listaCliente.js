export const listaCliente = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.status === 200 ){
            return resposta.json()
        }
        else {
            window.location.href = "../telas/erro.html"
        }
    })
}
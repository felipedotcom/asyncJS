export const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'GET'
    })
    .then(resposta => {
        if(resposta.status === 200 ){
            return resposta.json()
        }
        else {
            window.location.href = "../telas/erro.html"
        }
    })
}
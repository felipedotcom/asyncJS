export const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'GET'
    })
        .then((resposta) => {
            return resposta.json()
        })
}
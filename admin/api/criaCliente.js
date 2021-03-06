export const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
        })
    })
    .then(resposta => {
        if(resposta.status === 200 ){
            return resposta.body
        }
        else {
            window.location.href = "../telas/erro.html"
        }
    })
}
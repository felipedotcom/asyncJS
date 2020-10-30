export const atualizaCliente = (id, cpf, nome) => {
    fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf
        })
    })
    .then(response => response.json())
}
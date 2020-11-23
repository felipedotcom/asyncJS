export const deletaCliente = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "DELETE",
	})
	.then(resposta => {
        if(resposta.status !== 200 ){
            window.location.href = "../telas/erro.html"
        }
    })
}

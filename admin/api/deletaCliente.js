export const deletaCliente = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "DELETE",
	})
}

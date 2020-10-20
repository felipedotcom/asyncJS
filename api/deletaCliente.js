/* export const deletaCliente = (id) => { 
	  
		.then(resposta => resposta.json())
		.then(profile => profile)
} */

import { listaCliente } from "./listaCliente.js"

export const deletaCliente = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "DELETE",
	})
}

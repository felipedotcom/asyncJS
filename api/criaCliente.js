import {render} from '../componentes/view/view.js'
export const criaCliente = (nome,cpf) => {

	
	return fetch(`http://localhost:3000/profile/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			nome: nome,
			cpf: cpf,
		})
	})
		.then(resp => resp.body)
    	
}





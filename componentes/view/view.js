import { criaCliente } from '../../api/criaCliente.js'
import { deletaCliente } from '../../api/deletaCliente.js'
import {listaCliente} from '../../api/listaCliente.js'


export const view = (id,nome,cpf,rg) => {
    const lista = document.createElement('ul')
    const conteudo = `
    <div class="card" data-id=${id}>
    <li>${nome}</li>
    <li>${cpf}</li>
    <li>${rg}</li>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
    </div>  
    `
    lista.innerHTML = conteudo
    return lista
}

const list = document.querySelector('[data-list]')
const send = document.querySelector('[data-form]')


send.addEventListener('submit', event => {
    event.preventDefault()
    const nome = event.target.querySelector('[data-nome]').value
    const cpf = event.target.querySelector('[data-cpf]').value
    criaCliente(nome, cpf)
})


list.addEventListener('click', (event)=>{
    let botaoDeDelete = event.target.className === "delete-btn"
    if (botaoDeDelete){
        let id = event.target.parentElement.dataset.id
        deletaCliente(id)
   }

})

export const render = () =>{

    listaCliente().then(exibe => {
        exibe.forEach(element => {
            list.appendChild(view(element.id,element.nome, element.cpf, element.rg))
        });
    });
}





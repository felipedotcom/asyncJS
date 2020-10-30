import { listaCliente } from '../api/listaCliente.js'
import { deletaCliente } from '../api/deletaCliente.js'

export const view = (nome, cpf, id) => {
    const tabelaCorpo = document.createElement('tbody')
    const conteudo = `
        <tr data-id=${id}>
            <td data-td>${nome}</td>
            <td>${cpf}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
        </tr>
    `
    tabelaCorpo.innerHTML = conteudo
    return tabelaCorpo
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (event) => {
    
    let botaoDeDelete = event.target.className === 'botao-simples botao-simples--excluir'
    if(botaoDeDelete){
        event.preventDefault()
        /* const id = botaoDeDelete.dataset.id */
        /* const td = document.querySelector('[data-td]')
        let id = td.parentElement.dataset.id */ 
        let id = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id
        /* event.target.closest(`[data-id=${id}]`) */
        /* event.target.previousElementSibling */
        deletaCliente(id)
    }
}) 

export const render = () => {
    listaCliente().then(exibe => {
        exibe.forEach(element => {
            tabela.appendChild(view(element.nome, element.cpf, element.id))
        });
    });
}




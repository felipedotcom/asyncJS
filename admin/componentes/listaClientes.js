import { listaCliente } from '../api/listaCliente.js'
import { deletaCliente } from '../api/deletaCliente.js'

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        
            <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
        
    `
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
    let botaoDeDelete = evento.target.className === 'botao-simples botao-simples--excluir'
    if (botaoDeDelete) {
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        deletaCliente(id)
        .then(()=> linhaCliente.remove())
    }
})

const render = () => {
    listaCliente().then(exibe => {
        exibe.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        });
    });
}

render()



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

tabela.addEventListener('click', async (evento) => {
    let botaoDeDelete = evento.target.className === 'botao-simples botao-simples--excluir'
    if (botaoDeDelete) {
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        await deletaCliente(id)
        linhaCliente.remove()
    }
})

const render = async () => {
   try { 
    const listaClientes = await listaCliente()
    console.log(listaClientes)
    listaClientes.forEach(elemento => {
        console.log(elemento)
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
    });
   }
   catch(erro){
       console.log(erro)
   }
}

render()

/* const enviaRequisicao = (metodo, url) => { 
    const promise = new Promise((resolve, reject) => { 
        const http = new XMLHttpRequest();

        http.open(metodo, url)   
        http.responseType = 'json' 

        http.onload = () => { 
            if(http.status >= 400) {
             reject(http.response) 
            
            } else {
            resolve(http.response)
            }
           
        }
        http.onerror = () => { 
            reject('Alguma coisa deu errada')
        }
        http.send()
    })
    return promise
}
const listaCliente = () => { 
    enviaRequisicao("GET", 'http://localhost:3000/profiile/')
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        });
    })
    .catch(erro => {
        console.log(erro)
    })
} */

/* listaCliente()
 */


/* http.open("GET", 'http://localhost:3000/profile/', true)
http.send() */

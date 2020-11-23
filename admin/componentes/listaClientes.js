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
        try { 
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await deletaCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = "../telas/erro.html"
        }
    }
})

/* const render = () => { 
    listaCliente()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        });
    })
    .catch(erro => {
        console.log(erro)
    })
} */
const render = async () => {
   try { 
    const listaClientes = await listaCliente()
    listaClientes.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
    });
   }
   catch(erro){
    console.log(erro)
    window.location.href = "../telas/erro.html"
   }
}

const loading = () => { 
    const linhaNovoCliente = document.createElement('div')
    const conteudo = `<img src="https://i1.wp.com/cloud.estacaonerd.com/wp-content/uploads/2020/09/01170918/cd399ec0-0637-463e-bdd3-bc2e20a30a3b.jpg?fit=1500%2C2222&ssl=1">`

    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente

}
setTimeout(()=> render() , 4000)

/* setTimeout(()=> tabela.appendChild(loading()).remove(),0)
 *//* const enviaRequisicao = (metodo, url) => { 
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

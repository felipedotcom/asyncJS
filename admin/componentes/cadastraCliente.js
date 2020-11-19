import { criaCliente } from '../api/criaCliente.js'
import { valida } from '../componentes/validacao.js'

const formulario = document.querySelector('[data-form]')

const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

formulario.addEventListener('submit', async evento => {
    evento.preventDefault()

    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    try {
        await criaCliente(nome, email)
        window.location.href = "../telas/cadastro_concluido.html"
    }
    catch(erro) { 
        console.log(erro)
        window.location.href = "../telas/erro.html"
    } // deixar como desafio passar o resto do codigo para async/await e try/catch
   
})




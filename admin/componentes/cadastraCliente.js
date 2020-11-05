import { criaCliente } from '../api/criaCliente.js'
import { valida } from '../componentes/validacao.js'

const formulario = document.querySelector('[data-form]')

const inputs = document.querySelectorAll('input')
console.log(inputs)
    inputs.forEach(input => {
        input.addEventListener('blur', (e) => {
            valida(e.target)
        })
})

formulario.addEventListener('submit', event => {
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]').value
    const email = event.target.querySelector('[data-email]').value

    criaCliente(nome, email)
    .then(()=> {
        window.location.href="../telas/cadastro_concluido.html"
    })
})




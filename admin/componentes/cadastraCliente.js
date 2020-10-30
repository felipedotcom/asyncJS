import {criaCliente} from '../api/criaCliente.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', event => {
    event.preventDefault()
    const nome = event.target.querySelector('[data-nome]').value
    const cpf = event.target.querySelector('[data-cpf]').value
    criaCliente(nome, cpf)
})


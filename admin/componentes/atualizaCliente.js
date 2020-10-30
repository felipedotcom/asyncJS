import { detalhaCliente } from '../api/detalhaCliente.js'
import { atualizaCliente } from '../api/atualizaCliente.js'

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then(dados => {
    inputCPF.value = dados.cpf 
    inputNome.value = dados.nome
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', event => {
    event.preventDefault()
    atualizaCliente(id, inputCPF.value, inputNome.value)
})
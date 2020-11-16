/* import { detalhaCliente } from '../api/detalhaCliente.js'
import { atualizaCliente } from '../api/atualizaCliente.js'
import { valida } from '../componentes/validacao.js'



const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputEmail = document.querySelector('[data-email]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then(dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email 

})

const formulario = document.querySelector('[data-form]')

const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        input.addEventListener('blur', (evento) => {
            valida(evento.target)
        })
})

formulario.addEventListener('submit', evento => {
    evento.preventDefault()
    
    atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(()=> {
        window.location.href="../telas/edicao_concluida.html"
    })
}) */

import { detalhaCliente } from '../api/detalhaCliente.js'
import { atualizaCliente } from '../api/atualizaCliente.js'
import { valida } from '../componentes/validacao.js'


(async () => {
    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id')

    const inputEmail = document.querySelector('[data-email]')
    const inputNome = document.querySelector('[data-nome]')
    try { 
        const dados = await detalhaCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    }
    catch(erro){
        console.log(erro)
    }
    
    const formulario = document.querySelector('[data-form]')

    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        input.addEventListener('blur', (evento) => {
            valida(evento.target)
        })
    })

    formulario.addEventListener('submit', async evento => {
        evento.preventDefault()
        try { 
            await atualizaCliente(id, inputNome.value, inputEmail.value)        
            window.location.href = "../telas/edicao_concluida.html"
        }
        catch(erro){
            console.log(erro)
        }
    })
})()
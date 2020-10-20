export const botaoDeleta = () => {
    const del = document.createElement('button')
    
    del.textContent = 'Deletar'
    del.addEventListener('click', ()=> console.log('object'))
    return del
    
}


/*  
     OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - passo 2 - dar um jeito de identificar o clique o usúario no botão

    - passo 3 - desmarcar o botão selecionado anteriormente

    - passo 4 - marcar o botão clicado como se estivesse selecionado

    - passo 5 - esconder a imagem anterior 

    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique o usúario no botão
botoesCarrossel.forEach((botao, indice) => {
botao.addEventListener('click', () => {

    console.log('indice');
    
// passo 3 - desmarcar o botão selecionado anteriormente
const botaoSelecionado = document.querySelector('.selecionado');
botaoSelecionado.classList.remove('selecionado');

// passo 4 - marcar o botão clicado como se estivesse selecionado
botao.classList.add('selecionado');

//  passo 5 - esconder a imagem ativa de fundo 
const imagemAtiva = document.querySelector('.ativa');
imagemAtiva.classList.remove('ativa');

// passo 6 - fazer aparecer a imagem correspondente ao botão clicado
imagens[indice].classList.add('ativa');

})
})


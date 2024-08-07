//tirar o padding e o margin do main pra poder fazer o efeito do fundo azul
const main = document.querySelector('main');
main.style.margin = '0';
main.style.padding = '0';

//troca de conteudo e de imagem

//faixa amarela
const faixa_amarela = document.querySelector('#faixa_amarela_titulo');

//titulo faixa amarela
const titulo_faixa = document.querySelector('#label_faixa_amarela_titulo');
//imagem principal 
const img_principal = document.querySelector('#img_principal_sessao_imagens');

//frase
const frase = document.querySelector('#frase_ciencia')

//pagrafos que serao alterados so conteudos
const parag_ciencia1 = document.querySelector('#parag_ciencia1');
const parag_ciencia2 = document.querySelector('#parag_ciencia2');

//lista de botoes
const lista_bt_ciencia = document.querySelectorAll('.bt_ciencia');


//cooneudopagina ciencia
//manufatura
const manu_titulo = 'Manufatura';
const manu_img_principal = '../imagens/ciencia/manufatura-removebg-preview.png';
const manu_frase = 'Vamos lá! Vamos botar a mão na massa!';
const manu_parag1 = 'A <span>Manufatura</span> permite que você crie artefatos a partir de um diagrama usando os recursos armazenados na <span>Refinaria</span>. Geralmente, você pode criar quantos artefatos desejar a partir de um diagrama específico.';
const manu_parag2 = 'No entanto, alguns artefatos especiais apresentam limites, de modo que só é possível ter um determinado número deles de cada vez.';

//refinaria
const refi_titulo = 'Refinaria';
const refi_img_principal = '../imagens/ciencia/refinaria-removebg-preview.png';
const refi_frase = 'O primeiro passo para criar artefatos fantásticos.';
const refi_parag1 = 'Utilizando tecnologia avançada, a <span>Refinaria</span> quebra a estrutura molecular de plorts e outros recursos, permitindo que eles sejam usados na fabricação de diversos artefatos da <span>Ciência Slime</span>.';
const refi_parag2 = 'certifique-se de escolher com cuidado o que depositar na <span>Refinaria</span>. Os recursos depositados não poderão mais ser removidos, apenas usados na construção de artefatos.';

//tecnologia warp
const warp_titulo = 'Tec Warp';
const warp_img_principal = '../imagens/ciencia/tecnologiaWarp-removebg-preview.png';
const warp_frase = 'Tente não pensar em como funciona.';
const warp_parag1 = 'A <span>Tecnologia Warp</span> é uma classe de artefatos da Ciência slime que aproveita o poder das viagens instantâneas. Elas inclui teleportadores que você pode usar para criar atalhos, bem como artefatos que permitem o transporte de itens.';
const warp_parag2 = 'Crie tecnologia warp para gerenciar o rancho e explorar a <span>Borda</span> com muito mais rapidez e eficiência';

//decoração
const deco_titulo = 'Decorações';
const deco_img_principal = '../imagens/ciencia/decoracaoes-removebg-preview.png';
const deco_frase = 'Seja um grande rancheiro, mas com estilo.';
const deco_parag1 = 'As <span>Decorações</span> são uma classe de artefatos da Ciência slime que servem para decorar o mundo com objetos atraentes ou recriações de aspectos naturais da paisagem.';
const deco_parag2 = 'Crie <span>Decorações</span> para tornar a sua criação de slimes mais bonita!';

//utilitarios 
const util_titulo = 'Utilidades';
const util_img_principal = '../imagens/ciencia/utilitarios-removebg-preview.png';
const util_frase = 'Ferramentas para um trabalho bem feito';
const util_parag1 = 'Utilitários são uma classe de artefatos da <span>Ciência slime</span> que ajudam no gerenciamento do rancho, bem como na exploração da Borda.';
const util_parag2 = 'Construa utilitários a fim de tornar um pouco mais fácil o trabalho de rancheiro.';

//logica de trocar conteudo
for(let i = 0; i < lista_bt_ciencia.length; i++){
    lista_bt_ciencia[i].addEventListener('click', function(){
        //deixar ativo o bt clicado
        for(bt of lista_bt_ciencia){
            bt.classList.remove('borda_amarela');
        }
        lista_bt_ciencia[i].classList.add('borda_amarela');
        

        //som do clique
        tocaSom(som_tecu);

        //animação ao clicar
        img_principal.classList.add('img_principal_ani');
        faixa_amarela.classList.add('clique_pulsar_pequeno');
        titulo_faixa.classList.add('clique_pulsar_pequeno');
        lista_bt_ciencia[i].classList.add('clique_pulsar');

        setTimeout(function() {
            img_principal.classList.remove('img_principal_ani');
        }, 410);
        setTimeout(function() {
            faixa_amarela.classList.remove('clique_pulsar_pequeno');
            titulo_faixa.classList.remove('clique_pulsar_pequeno');
            lista_bt_ciencia[i].classList.remove('clique_pulsar');
        }, 310);
        
        

        if(lista_bt_ciencia[i].alt == 'manufatura') {
            console.log('manu');

            //trocar imagem
            img_principal.setAttribute('src', manu_img_principal);

            //trocar titulo faixa amarela
            titulo_faixa.innerHTML = manu_titulo;

            //trocar frase
            frase.innerHTML = manu_frase;

            //trocar parag1
            parag_ciencia1.innerHTML = manu_parag1;
            //trocar parag2
            parag_ciencia2.innerHTML = manu_parag2;
        }

        if(lista_bt_ciencia[i].alt == 'refinaria') {
            console.log('refi');

            //trocarimagem
            img_principal.setAttribute('src', refi_img_principal);

            //trocar titulo faixa amarela
            titulo_faixa.innerHTML = refi_titulo;

            //trocar frase
            frase.innerHTML = refi_frase;

            //trocar parag1
            parag_ciencia1.innerHTML = refi_parag1;
            //trocar parag2
            parag_ciencia2.innerHTML = refi_parag2;

            //trocar tamanho da parte azul

        }

        if(lista_bt_ciencia[i].alt == 'warp') {
            console.log('war');

            //trocarimagem
            img_principal.setAttribute('src', warp_img_principal);

            //trocar titulo faixa amarela
            titulo_faixa.innerHTML = warp_titulo;

            //trocar frase
            frase.innerHTML = warp_frase;

            //trocar parag1
            parag_ciencia1.innerHTML = warp_parag1;
            //trocar parag2
            parag_ciencia2.innerHTML = warp_parag2;
        }

        if(lista_bt_ciencia[i].alt == 'decoracao') {
            console.log('deco');

            //trocarimagem
            img_principal.setAttribute('src', deco_img_principal);

            //trocar titulo faixa amarela
            titulo_faixa.innerHTML = deco_titulo;

            //trocar frase
            frase.innerHTML = deco_frase;

            //trocar parag1
            parag_ciencia1.innerHTML = deco_parag1;
            //trocar parag2
            parag_ciencia2.innerHTML = deco_parag2;
        }

        if(lista_bt_ciencia[i].alt == 'utilitarios') {
            console.log('util');

            //trocarimagem
            img_principal.setAttribute('src', util_img_principal);

            //trocar titulo faixa amarela
            titulo_faixa.innerHTML = util_titulo;

            //trocar frase
            frase.innerHTML = util_frase;

            //trocar parag1
            parag_ciencia1.innerHTML = util_parag1;
            //trocar parag2
            parag_ciencia2.innerHTML = util_parag2;
        }
    })


}
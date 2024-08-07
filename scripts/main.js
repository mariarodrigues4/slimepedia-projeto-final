//sons ao clicar
//funcao de reproduzir os sons do site
function tocaSom(som){
    som.play();
}

//manter o bt slimepedia com o padding certo
const div_bt_menu_lateral = document.querySelector('.titulo__menulateral');
const nav = document.querySelector('nav');

//a partir da div deixar o nav com tamanho certo
nav.style.height = `${div_bt_menu_lateral.style.height}px`;
console.log(div_bt_menu_lateral.height);


//todos os sons
const som_bolum = document.querySelector('#som_bolum');//ok
const som_nheu = document.querySelector('#som_nheu');//ok
const som_plin = document.querySelector('#som_plin');//ok
const som_plop = document.querySelector('#som_plop');//ok
const som_ploqui = document.querySelector('#som_ploqui');//ok
const som_tecu = document.querySelector('#som_tecu');//ok
const som_tuque = document.querySelector('#som_tuque');

// fim da logica de som
//////////////////////////////////////////////////////////////////////

//botao de abrir e fechar o menu lateral no modo para celular
const btMenuLateral = document.querySelector('#bt_menulateral');

const bloco_menulateral = document.querySelector('nav');
//clicque para fechar e abrir o menu
btMenuLateral.addEventListener('click', function() {
    bloco_menulateral.classList.toggle('expandir');
    //som de abrir o nav
    if (bloco_menulateral.classList.contains('expandir')){
        tocaSom(som_plin);
    }else {
        tocaSom(som_nheu);
    }
})

//fim da logica de expansao do manu lateral

//inicio da logica do botao de limpar  filtro da tabela
//recuperando o valor do botao de limpar o filtro
const bt_limpa_filtro = document.querySelector('#bt_limpa_filtro');
//recuperando todos oos input radio do filtro para limpar ao clicar no botaop de limpar
const lista_input_radio = document.querySelectorAll('input[type=radio]');
//limpar os campoos assim que pagina inicia
for(input of lista_input_radio){
    input.checked = false;
}

//recuperando o valor de todas as celulas menos a primeira
const linhas_tabela = document.querySelectorAll('tr');


//recuperando o valor dos inoput radio
const radios_tipo = document.querySelectorAll('input[name=tipo]');
const radios_regiao = document.querySelectorAll('input[name=regiao]')

//celulas tipo comida e tipo material
const celulas_comida = document.querySelectorAll('.span_comida');

const celulas_material = document.querySelectorAll('.span_material');


//recuperando as celulas de acordo com a regiao
const celulas_campo = document.querySelectorAll('.regiao_campo');
const celulas_vale = document.querySelectorAll('.regiao_vale');
const celulas_penhasco = document.querySelectorAll('.regiao_penhasco');
const celulas_costa = document.querySelectorAll('.regiao_costa');

//lista com todas as celulas de regiao
const lista_td_regiao = [
    celulas_campo,
    celulas_vale,
    celulas_penhasco,
    celulas_costa
];

//lista dos nao selecionados 
//campo de arco iris
const lista_n_sel_campo = [
    celulas_vale,
    celulas_penhasco,
    celulas_costa
];
//vale escaldante 
const lista_n_sel_vale = [
    celulas_campo,
    celulas_penhasco,
    celulas_costa
];
//penhasco cai neve
const lista_n_sel_penhasco = [
    celulas_vale,
    celulas_campo,
    celulas_costa
];
//costa estrelada
const lista_n_sel_costa = [
    celulas_vale,
    celulas_campo,
    celulas_penhasco
];



//adicionando evento de clique no botao de limpar os flitros da tabela
bt_limpa_filtro.addEventListener('click', function() {
    //funcao que reproduz o som doo clique
    tocaSom(som_ploqui);

    //retirando o atributo checkede dos inputs para limpar o filtro
    for(input of lista_input_radio){
        input.checked = false;
    }

    for(let i = 1; i < linhas_tabela.length; i++){
        linhas_tabela[i].classList.add('visivel');
    }

    //se tiver classe visivel nao aplicar hidden
    for(let i = 1; i < linhas_tabela.length; i++){
        if(!linhas_tabela[i].classList.contains('visivel')){
            linhas_tabela[i].hidden = true;
        }else{
            linhas_tabela[i].hidden = false;
        }
    }
    

})
//fim da logica do botao de limpar o filtro da tabela

//inicio da logixca defiltro

//ifs para ativas o filtro de acordo com o botao radio selecionado
//radios tipo

for(let i = 0; i < radios_tipo.length; i++){
    radios_tipo[i].addEventListener('change', function(){
        //tocar o som de clique
        tocaSom(som_plop);

        if(radios_tipo[i].value=='comida'){
            console.log('comida')
            //atribuindo a calsse de visivel_tipo na linha da tabela
            for(let i = 0; i < celulas_comida.length; i++){
                celulas_comida[i].parentElement.parentElement.setAttribute('class', 'visivel');
                
            }
            for(let i = 0; i < celulas_material.length; i++){
                celulas_material[i].parentElement.parentElement.removeAttribute('class', 'visivel');
            }
        }
        if(radios_tipo[i].value=='material'){
            console.log('material')
            //adicionando a classe de ficar visivel ao radio selecionado
            for(let i = 0; i < celulas_material.length; i++){
                celulas_material[i].parentElement.parentElement.setAttribute('class', 'visivel');
            }
            //tirando a visibilidade do radio nao selecionado
            for(let i = 0; i < celulas_comida.length; i++){
                celulas_comida[i].parentElement.parentElement.removeAttribute('class', 'visivel');
            }
        }
        //se tiver classe visivel nao aplicar hidden
        for(let i = 1; i < linhas_tabela.length; i++){
            if(!linhas_tabela[i].classList.contains('visivel')){
                linhas_tabela[i].hidden = true;
            }else{
                linhas_tabela[i].hidden = false;
            }
        }

        //tirar o outro radio
        for(input of radios_regiao){
            input.checked = false;
        }
    })
}

//radio regiao
for(let i = 0; i < radios_regiao.length; i++){
    radios_regiao[i].addEventListener('change', function(){
        //tocar o som de clique
        tocaSom(som_plop);

        if(radios_regiao[i].value=='campoarco'){
            console.log('campoarco');
            //lista dos nao selecionados exibir
            console.log(lista_n_sel_campo);

            
            //adicionando a classe de visivel a llinha da tabela
            for(let i = 0; i < celulas_campo.length; i++){
                celulas_campo[i].parentElement.parentElement.parentElement.setAttribute('class', 'visivel');
            }
            //removendo a classe visivel das outras celulas
            for (let i = 0; i < 3/*tamanho das outras regioes faltantes*/; i++){
                removeVisivel(lista_n_sel_campo);
            }
        }
        if(radios_regiao[i].value=='valeescaldante'){
            console.log('vale');
            //lista do nao selecionados exibir
            console.log(lista_n_sel_vale);

            //adicionando a classe de visivel a llinha da tabela
            for(let i = 0; i < celulas_vale.length; i++){
                celulas_vale[i].parentElement.parentElement.parentElement.setAttribute('class', 'visivel');
            }
            //removendo a classe visivel das outras celulas
            for (let i = 0; i < 3/*tamanho das outras regioes faltantes*/; i++){
                removeVisivel(lista_n_sel_vale);
            }
            
        }
        if(radios_regiao[i].value=='penhasconeve'){
            console.log('penhasco');
            //lista dos nao selecionados exibir
            console.log(lista_n_sel_penhasco);

            //adicionando a classe de visivel a llinha da tabela
            for(let i = 0; i < celulas_penhasco.length; i++){
                celulas_penhasco[i].parentElement.parentElement.parentElement.setAttribute('class', 'visivel');
            }
            //removendo a classe visivel das outras celulas
            for (let i = 0; i < 3/*tamanho das outras regioes faltantes*/; i++){
                removeVisivel(lista_n_sel_penhasco);
            }
        }
        if(radios_regiao[i].value=='costa'){
            console.log('costa');
            //lista dos nao selecionados exibir
            console.log(lista_n_sel_costa);

            //adicionando a classe de visivel a llinha da tabela
            for(let i = 0; i < celulas_costa.length; i++){
                celulas_costa[i].parentElement.parentElement.parentElement.setAttribute('class', 'visivel');
            }
            //removendo a classe visivel das outras celulas
            for (let i = 0; i < 3/*tamanho das outras regioes faltantes*/; i++){
                removeVisivel(lista_n_sel_costa);
            }
        }
        //se tiver classe visivel nao aplicar hidden
        for(let i = 1; i < linhas_tabela.length; i++){
            if(!linhas_tabela[i].classList.contains('visivel')){
                linhas_tabela[i].hidden = true;
            }else{
                linhas_tabela[i].hidden = false;
            }
        }

        //tirar o outro radio
        for(input of radios_tipo){
            input.checked = false;
        }
    })
}

function removeVisivel(regiao_n_sel) {
    for(let i = 0; i < regiao_n_sel.length; i++){
        console.log(regiao_n_sel[i]);
        for(let k = 0; k < regiao_n_sel[i].length; k++){
            console.log(regiao_n_sel[i][k]);
            regiao_n_sel[i][k].parentElement.parentElement.parentElement.removeAttribute('class');
        }
    }
}
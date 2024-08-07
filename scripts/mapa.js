//logica de troca de conteudo da pagina MAPA
//declarando os botoes
const listaBtMapa = document.querySelectorAll('.nav__mapa__img');

//logica de clique
for(bt_clicado of listaBtMapa){
    bt_clicado.addEventListener('click', function(){
        trocaConteudo(this);

    })
}

//deixar o botao do "solario" ativo
listaBtMapa[0].classList.add('ativo');

//conteudo de texto para cada botao

//info solario
const p1_solario = 'Quando Beatrix chegou a ilha ela descobriu esse misterioso solário abandonado e decidiu usar como o seu novo lar. E por conhecidência já possui todas as ferramentas e instalações que um verdadeiro rancheiro de slimes precisa, uma conhecidência enorme não acha?';
const p2_solario = 'Bom, seja quem constriu o Solário parece não fazer muito tempo que foi embra desta ilha. Se comparado com as antigas ruínas das Ilha Arco-Íris e da Borda Muito Distante.';
const p3_solario = 'De uma maneira estranha todas as imprfeições de sua arquitetura parecem propositais, como se fosse feito para uma grande exposição. É notável que este já foi o lar de alguém e que foi construido com amor e propósito.';
const img_solario = '../imagens/beatrix/gif_beatrixPlort.gif';
const imgIcon_solario = '../imagens/mapa/solario__icon-removebg-preview.png';

//info campos de arco-iris
const p1_campoArco = 'Aqui nos campos arco-íris, cada dia é como uma perfeita e interminável tarde preguiçosa. Do tipo que faz qualquer um querer se estirar na relva multicolorida e passar horas observando as nuvens de marshmallow vagando lentanmente pelo céu azu.';
const p2_campoArco = 'Silmes gordos alegres e saltitantes saem de suas tocas subterrâneas e pulam pelas clareiras, sempre torcendo para pousar sobre um pedaço de <span class="destaque__link">alface-dágua</span>';
const p3_campoArco = 'Exploradores cuidadosos também encontrarão fartas reservas de <span class="destaque__link">pedra-gelatinosa</span> ao longo das colinas e falésias, bem como esguichos de <span class="destaque__link">salmoura forte</span> próximoas margens do Mar de slime';
const img_campoArco = '../imagens/recursos/alfaceDagua.png'
const imgIcon_campoArco = '../imagens/mapa/camposArcoIris.webp';

//info penhascos cai neve
const p1_penhascosCaiNeve = 'Em um tempo já esquecido, os Penhascos Cai-Neve podem ter sido parte de uma grande massa de terra da Ilha Arco-Íris, mas se separaram de alguma forma, provavelmente por uma turbulência geológica no <span class="destaque__link">Vale Escaldante</span>. E enquanto se afastavam mar adentro, eles levaram junto os seus habitantes pré-históricos.';
const p2_penhascosCaiNeve = 'Quando o nível do mar subiu, os <span>Penhascos Cai-Neve</span> acabaram envoltos em um invólucro gigante de gelo cintilante, antes de afundar nas profundezas do Mar de Slime, como um mundo vivo dentro de um globo de neve.';
const p3_penhascosCaiNeve = 'A causa desse fenômeno gélido é desconhecida, mas poderia indicar que os estranhos efeitos ds ondas prismáticas radiando da <span>Ilha Arco-Íris</span> datam um tempo antes dos registros históricos da <span>Borda Muito Distante</span>.';
const img_penhascosCaiNeve = '../imagens/recursos/flocoDeNevePerfeito.png';
const imgIcon_penhascosCaiNeve = '../imagens/mapa/IlhaNeve.webp';

//
const p1_valeEscaldante = 'O <span>Vale Escaldante</span> é sempre barulhento, com grandes gêiseres de água explodindo e lava em erupção por barrancos fumegantes. É um lugar primordial, com desfiladeiros esculpidos por ventos uivantes, deixando à mostra fósseis enormes de criaturas desconhecidas';
const p2_valeEscaldante = 'A combinação única de forte atividade geotérmica e solo vulcânico cria um terreno abundante em <span>óleo primordial</span> e <span>pó de lava</span>, além de ser o habitat natural de <span class="span_destaque_azul">slimes cristalinos</span>, <span class="span_destaque_laranja">ígneos</span> e <span class="span_destaque_vermelho">cabum</span>';
const p3_valeEscaldante = 'Estranhamente, essa natureza instável do <span>Vale Escaldante</span> parece ser um fenômeno recente, relativamente falando. A intensa atividade vulcânica não parece decorrente de eras de mudança, mas de algum tipo de catalisador desconhecido.';
const img_valeEscaldante = '../imagens/slimes/slime_igneo.webp';
const imgIcon_valeEscaldante = '../imagens/mapa/valeEscaldante.png';

const p1_costaEstrelada = 'A <span>Costa Estrelada</span> é um mundo de contradições: um terreno entecortado de forma irregular pelo <span>Mar de slime</span>, com escarpas e falésias imponentes se elevando sobre os densos pântanos ao nível do mar.';
const p2_costaEstrelada = 'Além disso, o local é misteriosamente dividido em duas partes com paletas de cor opostas em coral e lavanda. Inclusive, a própria atmosfera parece mudar um pouco à medida que você passa de uma parte para outra.'; 
const p3_costaEstrelada = 'A costa é uma fantasia floral, o que a torna um lar ideal para <span>slimes mel</span> e <span>panapapã</span>, que adoram néctar, e as copas das árvores estão repletas de colmeias onde <span>mel selvagem</span> e <span>cera zum-zum</span> podem ser coletados.';
const img_costaEstrelada = '../imagens/recursos/melSelvagem.png';;
const imgIcon_costaEstrelada = '../imagens/mapa/costaEstrelada.webp';



//funcao para trocar o conteudo pa pagina mapa de acordo com o botao ativo.

function trocaConteudo(lugarMapa) {
    //objetos para trocar o conteudo da página mapa.html 
    //recuperando os objetos titulos, textos e imagem
    const tituloBtMapa = document.querySelector('#titulo__mapa');
    const paragMapa1 = document.querySelector('#p1mapa');
    const paragMapa2 = document.querySelector('#p2mapa');
    const paragMapa3 = document.querySelector('#p3mapa');
    const imgMapaConteudo = document.querySelector('#img_mapa_conteudo');
    const imgMapaIcon = document.querySelector('#img_icon_mapa_lugar');


    //removendo as classes ativas de todoa so elementos da lista
    for(botao_mapa of listaBtMapa){
        botao_mapa.classList.remove('ativo');
        
    }
    //adicionando a classe .ativo para deixar a imagem colorida(ativa)
    lugarMapa.classList.add('ativo');

    //animação de pulsar ao clicar
    imgMapaIcon.setAttribute('class', 'clique_pulsar');
    setTimeout(function() {imgMapaIcon.classList.remove('clique_pulsar');}, 400);
    
    //barulho ao clicar no botao
    tocaSom(som_plop);
    
    //trocando o titulo conforme o botao clicado
    tituloBtMapa.innerHTML = lugarMapa.alt.toUpperCase();

    //verificando qual botao foi clicado  e selecionando o conteúdo de acordo com o botao
    if (lugarMapa.alt == 'Solário'){
        //trocando para o conteudo dos paragrafos para quando o lugarMapa (o botao que foi clicado) for o solário
        paragMapa1.innerHTML = p1_solario;
        paragMapa2.innerHTML = p2_solario;
        paragMapa3.innerHTML = p3_solario;
        imgMapaConteudo.setAttribute('src', img_solario );
        imgMapaIcon.setAttribute('src', imgIcon_solario);

        console.log('solario');
    }

    //trocando conteudo paraa campos de arco iris
    if (lugarMapa.alt == 'Campos de Arco-Íris'){
        //trocando para o conteudo dos paragrafos para quando o lugarMapa (o botao que foi clicado) for o campos arco iris
        paragMapa1.innerHTML = p1_campoArco;
        paragMapa2.innerHTML = p2_campoArco;
        paragMapa3.innerHTML = p3_campoArco;
        imgMapaConteudo.setAttribute('src', img_campoArco);
        imgMapaIcon.setAttribute('src', imgIcon_campoArco);

        console.log(lugarMapa.alt);
    }

    //trocando para penhascos cai neve
    if (lugarMapa.alt == 'Penhascos Cai Neve'){
        //trocando para o conteudo dos paragrafos para quando o lugarMapa (o botao que foi clicado) for o penhascs cai neve
        paragMapa1.innerHTML = p1_penhascosCaiNeve;
        paragMapa2.innerHTML = p2_penhascosCaiNeve;
        paragMapa3.innerHTML = p3_penhascosCaiNeve;
        imgMapaConteudo.setAttribute('src', img_penhascosCaiNeve);
        imgMapaIcon.setAttribute('src', imgIcon_penhascosCaiNeve);

        console.log(lugarMapa.alt);
    }

    //trocando para vale escaldante
    if (lugarMapa.alt == 'Vale Escaldante'){
        //trocando para o conteudo dos paragrafos para quando o lugarMapa (o botao que foi clicado) for o vale escaldante
        paragMapa1.innerHTML = p1_valeEscaldante;
        paragMapa2.innerHTML = p2_valeEscaldante;
        paragMapa3.innerHTML = p3_valeEscaldante;
        imgMapaConteudo.setAttribute('src', img_valeEscaldante);
        imgMapaIcon.setAttribute('src', imgIcon_valeEscaldante);

        console.log(lugarMapa.alt);
    }

    //costa estrelada
    if (lugarMapa.alt == 'Costa Estrelada'){
        //trocando para o conteudo dos paragrafos para quando o lugarMapa (o botao que foi clicado) for a costa estrelada
        paragMapa1.innerHTML = p1_costaEstrelada;
        paragMapa2.innerHTML = p2_costaEstrelada;
        paragMapa3.innerHTML = p3_costaEstrelada;
        imgMapaConteudo.setAttribute('src', img_costaEstrelada);
        imgMapaIcon.setAttribute('src', imgIcon_costaEstrelada);

        console.log(lugarMapa.alt);
    }
}


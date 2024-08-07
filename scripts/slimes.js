//VARIAVEIS DA PAGINA SLIME
//recuperando os botoes de controle do carossel
const bt_car_esque = document.querySelector('#bt_carrossel_esque');
const bt_car_direi = document.querySelector('#bt_carrossel_direi');

//card para animar ao clicar nos botoes de controle
const slimeCard = document.querySelector('.card');
//variavel que ira dar inicipo a trocar de conteudo do card após as animacoes de trasnlacao


//recuperando os elementos que iremos alterar com a funcao trocarCOnteudoSLime
const slimeCardTitulo = document.querySelector('.slime__card__titulo');
const slimeCardImg = document.querySelector('.card img');
const slimeCardParag = document.querySelector('#slime_parag_conteudo');
const slimeCardDieta = document.querySelector('#slime_dieta');
const slimeCardComida = document.querySelector('#slime_Comida_favorita');

//variavel quie vai guiar os conteudos do card do carrossel
let contador_slime_conteudo = 0;


//informações sobre os slimes
const slime_card_titulos = [
    'Slime Rosa',
    'Slime Algodão',
    'Slime Panapanã',
    'Slime Cabum',
    'Slime Cristal',
    'Slime Dentes de Sabre',
    'Slime Florescente',
    'Slime Ígneo',
    'Slime Morcegueta',
    'Slime Pescador',
    'Slime Tigrado',
    'Slime Torvelinho'
];

const slime_card_imgs = [
    '../imagens/slimes/pink_slime.webp',
    '../imagens/slimes/slime_algodao.png',
    '../imagens/slimes/slime_borboleta.webp',
    '../imagens/slimes/slime_cabum.webp',
    '../imagens/slimes/slime_cristal.webp',
    '../imagens/slimes/slime_dentedesabre.webp',
    '../imagens/slimes/slime_florescente.webp',
    '../imagens/slimes/slime_igneo.webp',
    '../imagens/slimes/slime_morcegueta.webp',
    '../imagens/slimes/slime_pescador.webp',
    '../imagens/slimes/slime_tigrado.webp',
    '../imagens/slimes/slime_torvelinho.webp'
];

const slime_card_parags = [
    'Slimes Rosa são os slimes mais comuns de se encontrar. Podem aparecer em praticamente qualquer lugar fora do solário',
    'Os slimes Algodão estão entre os mais fofinhos e felpudos slimes de toda a Borda. Eles são facilmente identificados pela sua cor amarela, orelhas e rabinhos de ponpons',
    'Slimes Panapanã, os mais curiosos de todos os slimes. Sempre vão voar em direção a objetos e criaturas novos, farão você apreciar as paredes de vidro do solário pois se não fosse eles logo fugiriam',
    'Slime Cabum normalmente são ouvidos antes de serem avistados. estão fazendo cabum pra lá e pra ca, mas sempre saem ilesos de suas explosões, as vezes só ficam um pouco tontos.',
    'Slimes Cristal estão sempre nas cavernas, criando espinhos no chão quando rolam, eles podem parecer fofinhos, mas se não tomar cuidado pode acabar se espetandonos espinhos.',
    'Pensava-se que eles já estavam extintos há muito tempo, porém pelas análises dos cientista els apenas estavam tirando uma longa soneca nas geleriras da <span>Ilha Arco-Íris</span>.',
    'Os Slimes florecentes apenas aparecem à noite, voando no alcance da luz da lua com sua asas brilhantes. Eles possuem um núcleo brilhante dentro de seus corpos, fazendo parecer vagalumes no meio da noite, porém, eles são muito mais fofos.',
    'Como uma mini fogueira, exceto que se mexe e é um slime. São os Slimes Ígneos, encontrados nas banheiras de lava do <span>Vale Escaldante</span>. Só se aimentam de cinzas.',
    'Um perseguidor diabólico da noite, sempre faminto... por frutas. Esse é o <span>Slime Morcegueta</span>, adora se esconder nos tetos das cavernas para assustar os outros com seus olhos vermelhos e suas presas pontudas.',
    'Slime Pescador, os slimes fofinhos que possuem uma pequena luz pendurada em suas cabeças, elas são usadas para atrair gagalinhas para alimentar sua enorme fome.',
    'Os Slimes Tigrados, que coisinhas mais fofas! Sempre são confundidos com gatinhos domésticos, a não ser pelo fato de serem um pouquinho mais pegajosos, porque são slimes.',
    'Slime Torvelinho!!! Suas carinhas fofas enganam, eles sempre aparecem para causar uma tremenda bagunça. Com um anél em volta de seus corpos eles podem produzir tornados se acabrem ficando muito agitados, portanto, não edixe eles bravos.'
]

const slime_card_dietas = [
    'Tudo',
    'Legumes',
    'Néctar',
    'Carne',
    'Legumes',
    'Carne',
    'Frutas',
    'Cinzas',
    'Frutas',
    'Carne',
    'Carne',
    'Frutas',
]

const slime_card_comidas = [
    'Nenhuma',
    'Alface-Dágua',
    'Néctar',
    'Galinha da Roseira',
    'Rabanete Coração',
    'Galinha Trovejante',
    'Cuborango',
    'Cinzas',
    'Romã Rocha',
    'Galinha da Praia',
    'Galinha Pedregosa',
    'Pêra Espinhosa',
]



//PAGINA SLIME LOGICA
//logica dos cliques de avncar e voltar no carrossel
//BOTAO ESQUERDO    
bt_car_esque.addEventListener('click', function() {
    //animacao de pulsar o botao ao clicar
    bt_car_esque.setAttribute('class', 'clique_pulsar_forte');
    setTimeout( function() {
        bt_car_esque.classList.remove('clique_pulsar_forte');
    }, 400);
    //funcao de tocar o som ao clicar
    tocaSom(som_bolum);

    //animacao de mover o card para a direita ao clicar no botao esquerdo
    slimeCard.classList.add('mexe_card_esquerda1');
    setTimeout( function() {
        //removendo a animacao ao terminar
        slimeCard.classList.remove('mexe_card_esquerda1');
        //adicionando a segundo animação(no novo card chegando)
        slimeCard.classList.add('mexe_card_esquerda2');

        //adiciona contador
        contador_slime_conteudo--;
        //quando o contador passar do começo da lista ela vai pro final
        if (contador_slime_conteudo < 0){contador_slime_conteudo = 11;}
        trocaConteudoSlime(contador_slime_conteudo);
    }, 480);

    //segunda parte da animação
    setTimeout( function() {
        //animacao de mexer o card pra esquerda ao clicar no botao direito
        slimeCard.classList.remove('mexe_card_esquerda2');
    }, 1000)
    
})

//BOTAO DIREITO
bt_car_direi.addEventListener('click', function() {
    //animaçoes
    bt_car_direi.setAttribute('class', 'clique_pulsar');
    setTimeout( function() {
        //animacao de pulsar o botao ao clicar
        bt_car_direi.classList.remove('clique_pulsar');
    }, 400);
    //funcao de tocar o som ao clicar
    tocaSom(som_bolum);

    //animacao de mover o card para a esquerda ao clicar no botao direito
    slimeCard.classList.add('mexe_card_direita1');
    setTimeout( function() {
        //animacao de mexer o card pra esquerda ao clicar no botao direito
        slimeCard.classList.remove('mexe_card_direita1');
        //adiciona a segunda animação apos remover a 1
        slimeCard.classList.add('mexe_card_direita2');
        //trocar conteudo
        //icrementar o contador para avancar o conteudo dop card
        contador_slime_conteudo++;
        //ao chegar ao final da lista retornar ao começo
        if (contador_slime_conteudo > 11){contador_slime_conteudo = 0;}
        //chamando a funcao que troca o conteudo
        trocaConteudoSlime(contador_slime_conteudo);

    }, 480);

    //segunda parte da animação
    setTimeout( function() {
        //animacao de mexer o card pra esquerda ao clicar no botao direito
        slimeCard.classList.remove('mexe_card_direita2');
    }, 1000);

})

//logica de clique para mudar o conteudo do card e fazer a animação de mover
function trocaConteudoSlime(conteudo) {
    //trocando o conteudo da pagina de acordo com o contador e acessando o conteudo nas listas criadas
    slimeCardTitulo.innerHTML = slime_card_titulos[conteudo];
    slimeCardImg.setAttribute('src', slime_card_imgs[conteudo]);
    /*slimeCardImg.setAttribute('class', 'clique_pulsar');
    setTimeout(function() {slimeCardImg.classList.remove('clique_pulsar');}, 400);*/
    slimeCardParag.innerHTML = slime_card_parags[conteudo];
    slimeCardDieta.innerHTML = slime_card_dietas[conteudo];
    slimeCardComida.innerHTML = slime_card_comidas[conteudo];

}

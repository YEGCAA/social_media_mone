export type PostFormat = 'Reels' | 'Carrossel' | 'Post Estático';
export type FunnelStage = 'Topo' | 'Meio' | 'Fundo' | 'Identidade' | 'Bastidor' | 'Desejo' | 'Conversão' | 'Autoridade';

export interface Comment {
  id: string;
  text: string;
  date: string;
}

export interface Post {
  id: number;
  date: string;
  dayOfWeek: string;
  format: PostFormat;
  theme: string;
  funnel: FunnelStage;
  status: string;
  description: string;
  hook: string;
  reference: string;
  referenceUrl: string;
  script: string;
  comments?: Comment[];
}

export const posts: Post[] = [
  {
    id: 1,
    date: '01/04/2026',
    dayOfWeek: 'Quarta-feira',
    format: 'Carrossel',
    theme: '5 sinais que você não está pronto para comprar',
    funnel: 'Topo',
    status: 'A gravar',
    description: 'Conteúdo de topo de funil que ataca o maior medo do público: comprar no momento errado. Altamente compartilhável e salvável. Estabelece a M One como quem fala verdade num mercado que só empurra.',
    hook: '5 sinais de que você ainda não está pronto para comprar um imóvel. O terceiro vai te surpreender.',
    reference: '@kleverson.passos — "Mas eu não quero lidar com corretor" (28.457 views)',
    referenceUrl: 'https://www.instagram.com/p/DU3B9Lmjvbm/',
    script: `SLIDE 1 (Capa):
TEXTO: "5 sinais de que você ainda não está pronto para comprar um imóvel"
SUBTEXTO: "O 3 vai te surpreender"
VISUAL: Fundo escuro elegante, tipografia limpa, logo M One no canto inferior

SLIDE 2:
TEXTO: "Sinal 1 — Você está comprando para escapar de um aluguel"
DESENVOLVIMENTO: Sair do aluguel é um objetivo emocional, não estratégico. Quem compra por esse motivo aceita qualquer imóvel que caiba no orçamento — e perde a chance de comprar o imóvel certo.
VISUAL: Ícone de contrato + seta vermelha

SLIDE 3:
TEXTO: "Sinal 2 — Você não sabe o que vai acontecer na sua vida nos próximos 3 anos"
DESENVOLVIMENTO: Casamento, mudança de cidade, filhos, troca de emprego. Imóvel é compromisso de longo prazo. Se o horizonte está nublado, esperar é mais inteligente do que comprar com pressa.
VISUAL: Ícone de calendário com ponto de interrogação

SLIDE 4:
TEXTO: "Sinal 3 — Você tem a entrada, mas não tem reserva de emergência"
DESENVOLVIMENTO: Esse é o sinal que mais gente ignora. Usar toda a reserva na entrada é a decisma que transforma o sonho do imóvel no início de uma crise financeira.
VISUAL: Ícone de cofre aberto e vazio

SLIDE 5:
TEXTO: "Sinal 4 — Você já se arrependeu de duas visitas por motivos diferentes"
DESENVOLVIMENTO: Quando cada imóvel parece errado por uma razão nova, o problema não é o imóvel — é a falta de clareza sobre o que você realmente quer. Clareza vem antes da compra.
VISUAL: Ícone de mapa com caminhos divergentes

SLIDE 6:
TEXTO: "Sinal 5 — Você nunca falou com um especialista que te deu um 'não'"
DESENVOLVIMENTO: Corretor que nunca disse 'não compre agora' não está orientando — está vendendo. Se todos concordam com tudo que você quer, você está sem orientação real.
VISUAL: Ícone de conversa com X

SLIDE 7 (CTA):
TEXTO: "Quando os 5 sinais sumirem da sua vida, é a hora certa."
SUBTEXTO: "Salva esse post. Quando estiver pronto, me chama."
VISUAL: Logo M One + @handle

LEGENDA:
O mercado imobiliário incentiva pressa. Eu incentivo clareza. 🏠
Comprar no momento errado é uma das decisões mais caras que existem — e ninguém te conta isso antes de você assinar.
Salva esse post. Ele vai te poupar de uma dor de cabeça enorme.
Quando você eliminar esses 5 sinais da sua vida, me manda uma mensagem. Aí a gente conversa de verdade. 👇
#imóveis #mercadoimobiliário #comprarimovel #patrimônio #investimento #dicas #altopadrão #medioealtopadadrao #salvador #saopablo #mone`
  },
  {
    id: 2,
    date: '02/04/2026',
    dayOfWeek: 'Quinta-feira',
    format: 'Reels',
    theme: 'A diferença entre imóvel e patrimônio',
    funnel: 'Topo',
    status: 'A gravar',
    description: 'Reel de topo de funil que diferencia compra de imóvel versus construção de patrimônio. Produção simples mas com ritmo dinâmico. Objetivo: reposicionar a categoria na cabeça do público.',
    hook: 'A maioria das pessoas compra imóvel. Poucos constroem patrimônio. A diferença é essa.',
    reference: '@falacom.andressa — "O que eu falaria pra uma amiga" (16.743 views, 4,8% eng rate)',
    referenceUrl: 'https://www.instagram.com/p/DVPHwWvjm-x/',
    script: `CENA 1 — Câmera frontal, tom direto, sem rodeios
FALA: "A maioria das pessoas compra imóvel. Poucos constroem patrimônio. E a diferença entre uma coisa e a outra não é o dinheiro — é o critério."

CENA 2 — Corte rápido, postura mais didática
FALA: "Quem compra imóvel olha para preço, tamanho e localização no mapa. Quem constrói patrimônio olha para outra coisa."

CENA 3 — Sequência de 3 elementos em cortes rápidos (pode usar texto na tela)
FALA: "Olha para o potencial de valorização da região nos próximos 5 anos. Olha para a liquidez futura — quantas pessoas vão querer esse imóvel daqui a 10 anos. Olha para o alinhamento com o momento de vida — porque imóvel certo no momento errado também é desperdício."

CENA 4 — Pausa, olhar direto para câmera
FALA: "A diferença entre quem compra e quem constrói está na pergunta que faz. E na orientação que recebe."

CALL TO ACTION FINAL:
FALA: "Me segue. Aqui a gente pensa diferente sobre imóvel."
TEXTO NA TELA: "Constrói patrimônio. Não compra qualquer imóvel." + logo M One`
  },
  {
    id: 3,
    date: '04/04/2026',
    dayOfWeek: 'Sábado',
    format: 'Reels',
    theme: 'Apresentação da fundadora + posicionamento',
    funnel: 'Identidade',
    status: 'A gravar',
    description: 'Apresentação da fundadora e do posicionamento boutique da M One. Tom pessoal, direto e sem exagero de produção. Objetivo: criar o primeiro vínculo de confiança com quem está chegando no perfil pela primeira vez.',
    hook: '17 anos de mercado imobiliário. Aqui tá o que eu aprendi — e o que eu parei de fazer.',
    reference: '@falacom.andressa — "O que eu falaria pra uma amiga" (16.743 views, 4,8% eng rate)',
    referenceUrl: 'https://www.instagram.com/p/DVPHwWvjm-x/',
    script: `CENA 1 — Câmera frontal, ambiente profissional ou externo elegante
FALA: "17 anos nesse mercado me ensinaram uma coisa que nenhum treinamento entrega: saber quando dizer não."

CENA 2 — Corte, tom mais pessoal
FALA: "Tem cliente que eu olho no olho e falo: não é a hora de comprar. Tem imóvel que eu não apresento porque não faz sentido para aquela pessoa naquele momento. Isso não é prejuízo. Isso é o meu trabalho."

CENA 3 — Pausa intencional
FALA: "Num mercado que incentiva todo mundo a fechar a qualquer custo, escolher profundidade em vez de volume é quase uma rebeldia."

CENA 4 — Tom mais direto, quase confidencial
FALA: "A M One não é pra todo cliente. E não é pra qualquer imóvel. Somos seletivos porque acreditamos que a decisão certa vale mais do que a decisão rápida."

CALL TO ACTION FINAL:
FALA: "Se você quer quem pensa antes de vender, me segue. É aqui."
TEXTO NA TELA: "Seletiva. Estratégica." + logo M One`
  },
  {
    id: 4,
    date: '05/04/2026',
    dayOfWeek: 'Domingo',
    format: 'Post Estático',
    theme: 'Médio ou alto padrão: não é sobre preço',
    funnel: 'Topo',
    status: 'A gravar',
    description: 'Post educativo que quebra a crença de que a escolha entre médio e alto padrão é uma questão de orçamento. Posiciona a M One como quem orienta com lógica, não com julgamento.',
    hook: 'Médio ou alto padrão: a resposta não está no preço.',
    reference: '@kleverson.passos — "Edifício Praia Vermelha vs Cap Ferrat vs JK Leblon" (19.814 views)',
    referenceUrl: 'https://www.instagram.com/p/DVRWjBiDv6F/',
    script: `ELEMENTO VISUAL:
Fundo branco ou creme. Tipografia elegante e clean.
Divisão visual em dois blocos: "MÉDIO PADRÃO" vs "ALTO PADRÃO" com elementos que mostram que não é só sobre o preço.

TEXTO PRINCIPAL (sobreposto na imagem):
"Médio ou alto padrão?
A resposta não está no preço."

LEGENDA:
Essa é uma das perguntas que mais aparecem aqui. E a resposta quase sempre surpreende quem pergunta.
A diferença entre médio e alto padrão não é só o valor do imóvel.
É objetivo de vida. É o que você planeja fazer com esse imóvel em 5, 10, 20 anos. É liquidez. É localização. É o nível de acabamento que o mercado da sua região vai absorver na hora da venda.
Quem compra médio padrão achando que está comprando alto padrão perde na hora de revender.
Quem entende a diferença toma a decisão certa para o seu momento — não para impressionar.
Me manda uma mensagem. A gente descobre junto qual é o seu. 👇
#mediopadrao #altopadrao #imóveis #patrimônio #investimentoimobiliário #salvador #saopablo #mone #curadoriadeimoveis`
  },
  {
    id: 5,
    date: '07/04/2026',
    dayOfWeek: 'Segunda-feira',
    format: 'Reels',
    theme: '#vidadecorretor — A ligação de domingo',
    funnel: 'Bastidor',
    status: 'A gravar',
    description: 'Bastidor com humor — formato #vidadecorretor. Produção simples, câmera na mão ou selfie. Objetivo: relatabilidade e engajamento. Entra na segunda-feira para aproveitar o pico de uso da plataforma.',
    hook: 'Quando o cliente liga no domingo às 8h da manhã e você atende sorrindo porque é isso que você ama fazer.',
    reference: '@falacom.andressa — "Corretor no carnaval" (73.895 views)',
    referenceUrl: 'https://www.instagram.com/p/DU0rbI5joAE/',
    script: `CENA 1 — Câmera selfie, rindo ou com expressão irônica, pode ser em casa ou em trânsito
FALA: "Domingo. 8h da manhã. Telefone toca."

CENA 2 — Pausa cômica
FALA: (responder o telefone com voz ainda adormecida mas sorrindo)
"Oi! Bom dia! Pode falar!"

CENA 3 — Olhar para a câmera
FALA: "O cliente: 'Ei, você tem um minuto? Quero ver um imóvel hoje.'"

CENA 4 — Tom irônico mas afetuoso
FALA: "Hoje é domingo. São 8 da manhã. Mas tudo bem — porque é isso que a gente ama fazer. E honestamente? Esse cliente vai comprar. Eu sei quando eles ligam assim."

CALL TO ACTION FINAL:
FALA: "Quem é corretor aqui entende. Marca quem tá no mesmo barco. 👇"
TEXTO NA TELA: "#vidadecorretor #mone"`
  },
  {
    id: 6,
    date: '09/04/2026',
    dayOfWeek: 'Quarta-feira',
    format: 'Carrossel',
    theme: 'O que ninguém conta sobre comprar na planta',
    funnel: 'Topo',
    status: 'A gravar',
    description: 'Conteúdo de autoridade que revela o que corretores raramente explicam sobre compra na planta. Ataque ao vilão da falta de transparência. Alto potencial de compartilhamento e salvamento.',
    hook: 'Antes de comprar na planta, você precisa saber disso. Ninguém te conta.',
    reference: '@kleverson.passos — "Mas eu não quero lidar com corretor" (28.457 views)',
    referenceUrl: 'https://www.instagram.com/p/DU3B9Lmjvbm/',
    script: `SLIDE 1 (Capa):
TEXTO: "O que ninguém te conta sobre comprar na planta"
VISUAL: Fundo escuro, tipografia impactante, logo M One

SLIDE 2:
TEXTO: "1 — O preço que você vê hoje não é o que vai pagar"
DESENVOLVIMENTO: Imóveis na planta têm reajuste pelo INCC (Índice Nacional do Custo da Construção) durante toda a obra. Dependendo do prazo, o valor final pode ser 15 a 30% maior do que o contrato inicial. Poucos corretores explicam isso antes do contrato.
VISUAL: Gráfico simples de linha subindo

SLIDE 3:
TEXTO: "2 — O prazo de entrega é uma estimativa, não uma promessa"
DESENVOLVIMENTO: A lei prevê tolerância de até 180 dias de atraso sem penalidade para a construtora. Em obras complexas, atrasos de 1 a 2 anos são mais comuns do que o mercado admite. Verifique o histórico de entregas da incorporadora antes de assinar.
VISUAL: Ícone de calendário com seta de atraso

SLIDE 4:
TEXTO: "3 — O decorado não vai ser o seu apartamento"
DESENVOLVIMENTO: O apartamento decorado usa móveis planejados, iluminação estratégica e truques visuais que fazem o espaço parecer maior. O que você assina é a planta — não o que você viu. Leve quem entende de espaço e metragem real na visita.
VISUAL: Comparação simples: "decorado" vs "real"

SLIDE 5:
TEXTO: "4 — A construtora importa tanto quanto o imóvel"
DESENVOLVIMENTO: Histórico de entregas, solidez financeira, reputação no mercado. Uma construtora com obra parada transforma o imóvel dos sonhos em anos de processos. Pesquise antes — não depois.
VISUAL: Ícone de construtora com sinal de pesquisa

SLIDE 6:
TEXTO: "5 — Você pode desistir — mas tem custo"
DESENVOLVIMENTO: A lei permite a rescisão do contrato, mas a construtora pode reter até 25% do valor pago em alguns casos. Antes de assinar, entenda o cenário de saída — mesmo que você não planeje sair.
VISUAL: Ícone de contrato rasgado

SLIDE 7 (CTA):
TEXTO: "Informação é o que diferencia uma boa decisão de uma arrependida."
SUBTEXTO: "Salva. E antes de qualquer lançamento, me chama."
VISUAL: Logo M One + @handle

LEGENDA:
Comprar na planta pode ser excelente. Ou pode ser um erro caro.
A diferença está no que você sabe antes de assinar — não depois. 📋
Esses são os pontos que eu reviso com cada cliente antes de qualquer lançamento. Porque meu trabalho não é fechar. É orientar.
Salva esse carrossel. Compartilha com quem está pensando em comprar na planta agora. 👇
#comprarnaplanta #mercadoimobiliario #lancamento #imoveis #dicas #transparencia #mone #salvador #saopablo`
  },
  {
    id: 7,
    date: '11/04/2026',
    dayOfWeek: 'Sexta-feira',
    format: 'Reels',
    theme: 'Por que eu digo "não compre agora"',
    funnel: 'Meio',
    status: 'A gravar',
    description: 'O conteúdo mais diferenciador da M One em formato de Reels. Relato real da postura de orientação contrária à venda. Destrói o vilão do corretor que pressiona e posiciona a M One como o oposto.',
    hook: 'Eu já disse pra cliente na frente do imóvel dos sonhos dela: não compra agora. E ela agradeceu.',
    reference: '@falacom.andressa — "Quem quis mudar primeiro" (15.689 views)',
    referenceUrl: 'https://www.instagram.com/p/DVMmPq9Dswv/',
    script: `CENA 1 — Câmera frontal, tom sério mas caloroso
FALA: "Eu já disse pra cliente na frente do imóvel dos sonhos dela: não compra agora. Ela ficou me olhando sem entender."

CENA 2 — Pausa, respiração
FALA: "O imóvel era lindo. A localização era excelente. Mas o momento de vida dela não era esse. Ela estava num processo de transição — mudança de emprego, relação em definição, incerteza de cidade. Aquele imóvel naquele momento ia se tornar uma âncora, não uma conquista."

CENA 3 — Tom mais direto
FALA: "Num mercado onde todo corretor quer fechar, dizer não é o ato mais desconfortável que existe. Mas é o que me diferencia."

CENA 4 — Resolução da história
FALA: "Seis meses depois, ela me mandou uma mensagem. Tinha clareza sobre o que queria. Comprou um imóvel melhor, no momento certo, com muito mais segurança. E ainda me indicou duas amigas."

CALL TO ACTION FINAL:
FALA: "Se você quer alguém que pensa em você antes de pensar na comissão, me chama. É assim que a M One trabalha."
TEXTO NA TELA: "Orientação real. Não pressão." + logo M One`
  },
  {
    id: 8,
    date: '12/04/2026',
    dayOfWeek: 'Sábado',
    format: 'Post Estático',
    theme: 'O que acontece quando você vai sozinho ao decorado',
    funnel: 'Meio',
    status: 'A gravar',
    description: 'Post de geração de consciência sobre o que acontece quando o cliente vai sozinho ao decorado. Revela as táticas do mercado e posiciona a M One como o guia que falta nessa situação.',
    hook: 'Você foi sozinho no decorado. Aqui está o que aconteceu.',
    reference: '@monica.poplawski — "80 milhões em 1 minuto e meio" (226.822 views)',
    referenceUrl: 'https://www.instagram.com/p/DU6aswzEcAL/',
    script: `ELEMENTO VISUAL:
Foto de ambiente decorado de alto padrão. Texto sobreposto em tipografia forte.

TEXTO PRINCIPAL:
"Você foi sozinho no decorado.
Aqui está o que aconteceu."

LEGENDA:
O decorado é um ambiente projetado para vender. Não para informar.
A iluminação está estrategicamente posicionada para esconder o que é menor e iluminar o que é maior. Os móveis planejados estão em escala reduzida para ampliar visualmente o espaço. O vendedor foi treinado para fechar na visita — e a pressão do ambiente ajuda nisso.
Não estou dizendo que o imóvel é ruim. Estou dizendo que ir sozinho te coloca em desvantagem.
Quem entende o mercado vê o que o olho emocionado não vê.
Na próxima visita, me leva junto. Pode ser online. 📲
#decorado #compradeimovel #imovelcerto #mone #curadoriadeimoveis #altopadrao #salvador #saopablo`
  },
  {
    id: 9,
    date: '14/04/2026',
    dayOfWeek: 'Segunda-feira',
    format: 'Reels',
    theme: 'Manda pra quem você imagina vendo o mar daqui',
    funnel: 'Desejo',
    status: 'A gravar',
    description: 'Reel de distribuição orgânica com gatilho relacional. Usa o padrão mais viral da análise de concorrentes — adaptado para o produto com maior potencial emocional do portfólio da M One (Nouvelle Bossa). Objetivo: fazer o lead mandar para o parceiro/cônjuge, dobrando o alcance orgânico.',
    hook: 'Manda pra quem você imagina vendo o mar daqui todos os dias.',
    reference: '@falacom.andressa — "achei essa casa a cara da nossa família" (550.897 views, 7,2% eng rate)',
    referenceUrl: 'https://www.instagram.com/p/DVQ8-7ujkHT/',
    script: `CENA 1 — Imagem aérea ou drone de orla/vista do Nouvelle Bossa ao amanhecer ou pôr do sol
TEXTO NA TELA: "Manda pra quem você imagina vendo isso todo dia."
SEM NARRAÇÃO nos primeiros 5 segundos — deixar a imagem falar.

CENA 2 — Câmera frontal ou voz em off com imagens do imóvel
FALA (voz em off ou câmera): "Em Salvador, o mar não é cenário. É parte da rotina de quem escolheu bem."

CENA 3 — Imagens do apartamento, área de lazer, vista
FALA: "Nouvelle Bossa — um apartamento por andar, orla de Jaguaribe. Não é pra todo mundo. É pra quem entende o que está escolhendo."

CENA 4 — Câmera frontal, tom direto
FALA: "Antes de qualquer decisão assim, a gente conversa. Sem pressa. Sem pressão. Com estratégia."

CALL TO ACTION FINAL:
TEXTO NA TELA: "Manda pra quem você imagina aqui. 💙"
FALA: "Me chama pra saber mais. Link na bio."`
  },
  {
    id: 10,
    date: '15/04/2026',
    dayOfWeek: 'Terça-feira',
    format: 'Carrossel',
    theme: 'Como a M One seleciona um imóvel',
    funnel: 'Meio',
    status: 'A gravar',
    description: 'Carrossel de meio de funil que revela o processo de curadoria da M One passo a passo. Reforça o atributo Curadora com prova de processo — diferencia radicalmente da imobiliária comum que apresenta volume.',
    hook: 'Antes de você ver qualquer imóvel comigo, eu já fiz essa análise. Todo. Único.',
    reference: '@kleverson.passos — "Mas eu não quero lidar com corretor" (28.457 views)',
    referenceUrl: 'https://www.instagram.com/p/DU3B9Lmjvbm/',
    script: `SLIDE 1 (Capa):
TEXTO: "Antes de você ver qualquer imóvel comigo, eu já fiz essa análise"
VISUAL: Fundo elegante, logo M One

SLIDE 2:
TEXTO: "Passo 1 — Entendo o seu momento de vida, não o seu orçamento"
DESENVOLVIMENTO: A primeira conversa não é sobre dinheiro. É sobre onde você está, para onde vai, e o que precisa que esse imóvel faça por você. Comprar como investimento exige critério diferente de comprar para morar. A curadoria começa aqui.

SLIDE 3:
TEXTO: "Passo 2 — Filtro o portfólio pelo que faz sentido para você"
DESENVOLVIMENTO: Não trago 15 opções para você escolher. Trago 1 a 3 imóveis que sobreviveram à análise completa de alinhamento com o seu perfil. Menos opções, mais clareza.

SLIDE 4:
TEXTO: "Passo 3 — Analiso o potencial de valorização da região"
DESENVOLVIMENTO: Infraestrutura planejada, expansão urbana, histórico da incorporadora, liquidez futura. Cada indicação tem um raciocínio de patrimônio por trás — não só uma característica de produto.

SLIDE 5:
TEXTO: "Passo 4 — Verifico a documentação antes de você se apaixonar"
DESENVOLVIMENTO: Matrícula, débitos, regularidade da construção, reputação da construtora. Problemas jurídicos e documentais são invisíveis numa visita — e muito caros de resolver depois que você já assinou.

SLIDE 6:
TEXTO: "Passo 5 — Às vezes, o resultado é: não compra agora"
DESENVOLVIMENTO: Se a análise mostra que o momento não é esse ou que o imóvel não é o certo, eu digo. Porque o meu trabalho não é fechar — é orientar. Isso é curadoria de verdade.

SLIDE 7 (CTA):
TEXTO: "Quer sentir essa diferença na prática?"
SUBTEXTO: "Me chama. A primeira conversa é sem compromisso."
VISUAL: Logo M One + @handle

LEGENDA:
Imobiliária de volume apresenta tudo. A M One apresenta o certo.
Não é falta de portfólio. É excesso de critério. 🔍
Me chama quando estiver pensando em comprar. A conversa é gratuita — o erro de comprar sem orientação, não.
#curadoriadeimoveis #processodemone #imoveis #patrimônio #orientacaoimobiliaria #altopadrao #mone`
  },
  {
    id: 11,
    date: '17/04/2026',
    dayOfWeek: 'Quinta-feira',
    format: 'Reels',
    theme: '#vidadecorretor — O cliente com 20 imóveis salvos',
    funnel: 'Bastidor',
    status: 'A gravar',
    description: 'Bastidor com humor — segundo post da série #vidadecorretor. Tom mais elaborado do que o post 5, com situação mais específica e reconhecível. Objetivo: engajamento e marcações.',
    hook: 'O cliente chegou com 20 imóveis salvos. Saiu com 1 decisão. Deixa eu te contar.',
    reference: '@falacom.andressa — "Corretor no carnaval" (73.895 views)',
    referenceUrl: 'https://www.instagram.com/p/DU0rbI5joAE/',
    script: `CENA 1 — Câmera selfie, tom de cumplicidade com a câmera
FALA: "Meu cliente chegou na reunião com 20 imóveis salvos no celular. Vinte. Eu pedi o telefone emprestado — pra não rir na frente dele."

CENA 2 — Pausa, sorriso genuíno
FALA: "Cada um era de uma cidade diferente. Estilos completamente opostos. Alguns eram apartamentos, outros eram casas, um era numa fazenda. Claramente ele não sabia o que queria — sabia que queria comprar."

CENA 3 — Tom mais sério mas ainda caloroso
FALA: "Mas sabe o que é engraçado? Isso não é falta de critério. É excesso de informação e falta de orientação. É o que acontece quando o mercado te joga milhares de opções sem nenhum filtro."

CENA 4 — Resolução
FALA: "Uma hora de conversa. Três perguntas certas. Saímos com clareza sobre o que ele precisava de verdade. Dois meses depois, comprou o certo."

CALL TO ACTION FINAL:
FALA: "Quantos imóveis você tem salvos agora? Me conta nos comentários. 👇"
TEXTO NA TELA: "Clareza antes. Imóvel depois." + logo M One`
  },
  {
    id: 12,
    date: '18/04/2026',
    dayOfWeek: 'Sexta-feira',
    format: 'Carrossel',
    theme: 'Imóvel valoriza? Depende de quem olha',
    funnel: 'Meio',
    status: 'A gravar',
    description: 'Educação financeira imobiliária — conteúdo que eleva a percepção do investidor e reforça o atributo Estratégica. Toca diretamente no desejo oculto de investir com inteligência.',
    hook: 'Tem imóvel que valoriza. Tem imóvel que só parece que vai valorizar. A diferença é essa.',
    reference: '@kleverson.passos — "Edifício Praia Vermelha vs Cap Ferrat vs JK Leblon" (19.814 views)',
    referenceUrl: 'https://www.instagram.com/p/DVRWjBiDv6F/',
    script: `SLIDE 1 (Capa):
TEXTO: "Imóvel valoriza? Depende de quem olha."
VISUAL: Fundo elegante com gráfico estilizado ascendente

SLIDE 2:
TEXTO: "Fator 1 — Infraestrutura planejada, não instalada"
DESENVOLVIMENTO: Imóvel que vai valorizar está perto de infraestrutura em expansão — metrô chegando, shopping em obras, nova avenida projetada. Imóvel que "tem tudo" já precificou esse valor. A oportunidade está no antes.

SLIDE 3:
TEXTO: "Fator 2 — Histórico real da região, não promessa"
DESENVOLVIMENTO: Algumas regiões crescem. Outras estacionam. O dado que importa é quanto o metro quadrado valorizou nos últimos 5 anos naquela localização — não o que o corretor projeta para os próximos 5.

SLIDE 4:
TEXTO: "Fator 3 — Quem construiu importa muito"
DESENVOLVIMENTO: A incorporadora define entrega, qualidade e reputação. Um imóvel de construtora sólida vende mais rápido e com menos desconto. Um imóvel de incorporadora com histórico problemático pode levar anos para encontrar comprador.

SLIDE 5:
TEXTO: "Fator 4 — Liquidez: quantas pessoas vão querer isso?"
DESENVOLVIMENTO: Imóvel de nicho muito específico tem liquidez baixa. A pergunta não é 'eu gosto disso?' mas 'quanta gente vai querer isso em 10 anos?'. Tamanho, localização e tipologia definem o tamanho do mercado comprador.

SLIDE 6:
TEXTO: "Fator 5 — Você está comprando emoção ou estratégia?"
DESENVOLVIMENTO: Imóvel bonito e imóvel que valoriza não são sempre a mesma coisa. O mais bonito é o mais desejável — mas o mais estratégico é o que entrega retorno real. Os dois podem coexistir. Mas precisam ser avaliados separadamente.

SLIDE 7 (CTA):
TEXTO: "Antes de comprar como investimento, fala comigo."
VISUAL: Logo M One + @handle

LEGENDA:
Todo corretor fala que o imóvel vai valorizar. Poucos mostram por quê. 📊
A M One não vende imóvel. Vende a decisão certa.
Se você está pensando em comprar como investimento, me chama antes de qualquer visita.
#investimentoimobiliário #valorizacao #imoveis #patrimônio #estrategia #mone #salvador #saopablo #mercadoimobiliario`
  },
  {
    id: 13,
    date: '22/04/2026',
    dayOfWeek: 'Terça-feira',
    format: 'Reels',
    theme: 'Depoimento: ela disse pra não comprar',
    funnel: 'Fundo',
    status: 'A gravar',
    description: 'Depoimento em vídeo — a prova social mais poderosa para o segmento. Converte quem já está quente após três semanas de conteúdo.',
    hook: 'Ela me disse para não comprar. Seis meses depois, entrei em contato para agradecer.',
    reference: '@falacom.andressa — "Quem quis mudar primeiro" (15.689 views)',
    referenceUrl: 'https://www.instagram.com/p/DVMmPq9Dswv/',
    script: `[FORMATO: Depoimento real de cliente. Se disponível, gravar o cliente falando. Se não, a fundadora narra o caso como história em terceira pessoa.]

OPÇÃO A — Cliente fala direto para câmera:
CENA 1:
CLIENTE: "Eu estava 100% decidida a comprar aquele apartamento. Tinha visitado três vezes. Já estava pensando na decoração."

CENA 2:
CLIENTE: "Ela [a fundadora da M One] me ligou e disse: 'Preciso que a gente converse antes.' Eu fui meio relutante. Mas fui."

CENA 3:
CLIENTE: "Ela me mostrou três coisas sobre aquele imóvel que eu não tinha visto. E me perguntou sobre a minha vida nos próximos dois anos. Eu me dei conta que não estava no momento certo."

CENA 4:
CLIENTE: "Hoje, seis meses depois, eu comprei outro imóvel. Melhor, no momento certo, com muito mais segurança. E indiquei a M One para duas pessoas da minha família."

OPÇÃO B — Fundadora narra (se cliente não puder gravar):
CENA 1:
FALA: "Essa cliente estava decidida. Imóvel escolhido, entrada calculada, data de mudança na cabeça. Faltava só assinar."

CENA 2:
FALA: "Quando a gente conversou, eu percebi três coisas que ela não tinha visto. E uma delas era sobre o momento de vida dela — não sobre o imóvel em si."

CENA 3:
FALA: "Disse a ela: não compra agora. Ela não gostou de ouvir. Mas seis meses depois me mandou uma mensagem de agradecimento."

CALL TO ACTION FINAL:
FALA: "Esse é o tipo de relação que a M One constrói. Link na bio. Vamos conversar sobre o seu momento."
TEXTO NA TELA: "Orientação real. Resultado real." + logo M One`
  },
  {
    id: 14,
    date: '23/04/2026',
    dayOfWeek: 'Quarta-feira',
    format: 'Carrossel',
    theme: '3 clientes que decidiram errado antes de nos encontrar',
    funnel: 'Fundo',
    status: 'A gravar',
    description: 'Prova social negativa — o conteúdo de fundo de funil mais poderoso do planejamento. Narra histórias reais (anonimizadas) de clientes que compraram sem orientação e pagaram caro. Gera urgência sem pressão.',
    hook: '3 histórias reais. 3 decisões que custaram caro. Antes de nos encontrar.',
    reference: '@monica.poplawski — "Sala de jogos como essa" (130.695 views)',
    referenceUrl: 'https://www.instagram.com/p/DVMAZinDZhd/',
    script: `SLIDE 1 (Capa):
TEXTO: "3 clientes. 3 decisões que custaram caro."
SUBTEXTO: "(antes de chegarem até a M One)"
VISUAL: Fundo escuro, impacto visual direto

SLIDE 2 — HISTÓRIA 1:
TEXTO: "O cliente que comprou rápido por pressão"
DESENVOLVIMENTO: Estava em negociação com outro corretor que colocou um prazo: "Tem mais dois interessados, preciso de resposta hoje." Assinou sem verificar a documentação. Dois meses depois, descobriu uma irregularidade na matrícula que atrasou a escritura por quase um ano e gerou custos jurídicos que não estavam no orçamento.
LIÇÃO: Urgência de corretor não é urgência real. Prazo artificial é tática de fechamento — não dado de mercado.

SLIDE 3 — HISTÓRIA 2:
TEXTO: "A cliente que escolheu pelo preço"
DESENVOLVIMENTO: Encontrou o imóvel mais barato da região. Parecia uma oportunidade. Comprou sem avaliar a infraestrutura planejada do entorno. Três anos depois, a valorização foi metade da média da cidade. Na hora de vender, precisou baixar o preço mais do que esperava para encontrar comprador.
LIÇÃO: Imóvel barato e imóvel com boa relação custo-benefício não são a mesma coisa. O mais barato hoje pode ser o mais caro amanhã.

SLIDE 4 — HISTÓRIA 3:
TEXTO: "O casal que foi sozinho no decorado"
DESENVOLVIMENTO: Foram numa tarde de sábado. O ambiente estava perfeito, o vendedor estava preparado. Assinaram o pré-contrato na mesma visita. Quando o apartamento ficou pronto, os móveis que caberiam naquele espaço não eram os que tinham imaginado. A metragem real era diferente da sensação do decorado.
LIÇÃO: Decorado vende emoção. Planta vende realidade. São duas coisas diferentes.

SLIDE 5 (CTA):
TEXTO: "Você não precisa ser a próxima história."
SUBTEXTO: "A primeira conversa com a M One é sem compromisso. E pode mudar tudo."
VISUAL: Logo M One + @handle

LEGENDA:
Essas histórias são reais. Os nomes, não. 🔒
Compartilhei com permissão — porque se uma pessoa ler isso antes de cometer o mesmo erro, valeu.
Decisão imobiliária é cara e difícil de reverter. Orientação certa antes é o melhor investimento que você pode fazer antes de qualquer compra.
Me chama. A conversa é gratuita. O erro, não. 👇
#imoveis #erroimobiliario #decisaoimobiliaria #orientacao #mone #compradeimovel #patrimônio #altopadrao`
  },
  {
    id: 15,
    date: '25/04/2026',
    dayOfWeek: 'Sexta-feira',
    format: 'Reels',
    theme: 'IA recomenda imóvel em Salvador',
    funnel: 'Fundo',
    status: 'A gravar',
    description: 'Formato IA como personagem — tendência cultural ainda não replicada no mercado de Salvador. Janela de primeiro movimento. Combina curiosidade cultural com apresentação do Art Studio Tancredo (ou outro lançamento do portfólio).',
    hook: 'Pedi pra IA encontrar o melhor investimento em Salvador pra quem trabalha na Tancredo Neves. Olha o que ela apontou.',
    reference: '@falacom.andressa — "IA recomenda imóvel no Parque Flamboyant" (19.608 views)',
    referenceUrl: 'https://www.instagram.com/p/DU6iaxkjmI0/',
    script: `CENA 1 — Câmera frontal, tom casual de descoberta
FALA: "Fiz um teste. Pedi pra IA encontrar o melhor investimento imobiliário em Salvador para quem trabalha no corredor da Tancredo Neves. Olha o que ela apontou."

CENA 2 — Tela do celular ou computador mostrando simulação de prompt de IA
TEXTO NA TELA (simulado como resposta de IA):
"Com base em localização estratégica, liquidez futura e perfil de valorização histórico da região, o Art Studio Tancredo se destaca como opção alinhada ao perfil de investidor que prioriza praticidade, patrimônio e qualidade de vida. Um apartamento por andar. No coração financeiro de Salvador."

CENA 3 — Câmera frontal, comentando o resultado
FALA: "Olha que interessante. A IA chegou ao mesmo ponto que eu chego na análise manual: localização estratégica + liquidez + potencial de valorização. Não é sorte. É critério."

CENA 4 — Tom direto, humanizando a recomendação
FALA: "Mas a diferença é que eu consigo ir além do dado. Eu analiso o seu momento de vida, o seu objetivo e o que esse imóvel vai fazer pelo seu patrimônio em 10 anos. A IA não faz isso. Eu faço."

CALL TO ACTION FINAL:
FALA: "Quer saber se o Art Studio Tancredo faz sentido para o seu perfil? Me chama. Conversa sem compromisso."
TEXTO NA TELA: "Critério humano + estratégia real." + logo M One`
  },
  {
    id: 16,
    date: '26/04/2026',
    dayOfWeek: 'Sábado',
    format: 'Post Estático',
    theme: 'Atendemos em BA e SP',
    funnel: 'Conversão',
    status: 'A gravar',
    description: 'Post de alcance geográfico que ativa o segmento de São Paulo e expande o território de conversão. Reforça o posicionamento boutique com abrangência.',
    hook: 'Curadoria exclusiva em BA e SP. Presencialmente ou online.',
    reference: '@kleverson.passos — "Condomínio Aldeia Pedra da Cebola, Mata da Praia" (25.983 views)',
    referenceUrl: 'https://www.instagram.com/p/DVOKzTjDutq/',
    script: `ELEMENTO VISUAL:
Layout clean com mapa estilizado ou visual das duas cidades (Salvador e SP).
Tipografia elegante, paleta da marca.

TEXTO PRINCIPAL:
"Salvador. São Paulo.
Onde você estiver, a curadoria é a mesma."

LEGENDA:
A M One atende em Salvador e São Paulo — presencialmente ou online.
O processo não muda: escuta real, curadoria criteriosa, orientação que coloca o seu momento de vida acima de qualquer comissão.
Se você está em SP buscando imóvel em Salvador — ou em Salvador buscando entender o mercado de SP — me chama.
A primeira conversa é sem compromisso. E é de graça começar. 📲
#salvador #saopablo #imoveis #altopadrao #curadoriadeimoveis #imobiliariaboutique #mone #atendimentoonline`
  },
  {
    id: 17,
    date: '28/04/2026',
    dayOfWeek: 'Segunda-feira',
    format: 'Carrossel',
    theme: 'Como é a primeira conversa com a M One',
    funnel: 'Fundo',
    status: 'A gravar',
    description: 'Carrossel de quebra de barreira — remove o medo do primeiro contato. Desmistifica o processo da M One mostrando que é seguro, sem pressão e sem compromisso.',
    hook: 'Você não precisa saber de nada ainda. A primeira conversa com a M One é assim.',
    reference: '@kleverson.passos — "Mas eu não quero lidar com corretor" (28.457 views)',
    referenceUrl: 'https://www.instagram.com/p/DU3B9Lmjvbm/',
    script: `SLIDE 1 (Capa):
TEXTO: "Você não precisa saber de nada ainda."
SUBTEXTO: "É assim que começa a primeira conversa com a M One."
VISUAL: Fundo claro e acolhedor, logo M One

SLIDE 2:
TEXTO: "Passo 1 — Você me manda uma mensagem (isso é tudo)"
DESENVOLVIMENTO: Não precisa ter certeza do que quer. Não precisa saber o bairro, o tipo, o preço. Pode ser uma dúvida vaga, uma curiosidade ou "não sei bem o que quero, mas quero comprar algo". Esse é o começo certo.

SLIDE 3:
TEXTO: "Passo 2 — A gente conversa. Sem roteiro, sem pressão"
DESENVOLVIMENTO: A primeira conversa dura entre 30 e 60 minutos. Eu pergunto sobre o seu momento de vida, seus planos, o que esse imóvel precisa fazer por você. Sem lista de imóveis. Sem urgência. Sem meta minha.

SLIDE 4:
TEXTO: "Passo 3 — Você recebe uma curadoria, não um catálogo"
DESENVOLVIMENTO: Depois da conversa, se fizer sentido, apresento 1 a 3 opções reais que passaram pelo meu filtro de alinhamento com o seu perfil. Não 20 opções. Não volume. O certo.

SLIDE 5:
TEXTO: "Passo 4 — Às vezes o resultado é: ainda não é a hora"
DESENVOLVIMENTO: Se a análise mostrar que o momento não é esse, eu digo. Sem constrangimento. Sem pressão para fechar. Isso é o que diferencia orientação de venda.

SLIDE 6 (CTA):
TEXTO: "Manda uma mensagem. É de graça começar."
VISUAL: Logo M One + @handle + ícone de DM

LEGENDA:
O primeiro passo mais difícil costuma ser esse: entrar em contato com um corretor sem saber se vai ser pressionado.
Na M One, não vai. 🤍
A primeira conversa é sua — sem compromisso, sem urgência, sem lista de imóveis jogada na sua frente.
Só uma conversa real sobre o que você precisa. Me manda uma mensagem. 👇
#primeiroapartamento #imoveis #compradeimovel #mone #orientacaoimobiliaria #sempressa #curadoriadeimoveis #altopadrao`
  },
  {
    id: 18,
    date: '29/04/2026',
    dayOfWeek: 'Terça-feira',
    format: 'Reels',
    theme: 'O que eu falaria pra uma amiga',
    funnel: 'Identidade',
    status: 'A gravar',
    description: 'Reel de posicionamento pessoal da fundadora — "o que eu falaria para uma amiga". Constrói autoridade e identidade em tom íntimo. Fecha o mês consolidando quem é a pessoa por trás da marca.',
    hook: 'O que eu falaria pra uma amiga que está pensando em comprar o primeiro imóvel agora.',
    reference: '@falacom.andressa — "O que eu falaria pra uma amiga" (16.743 views, 4,8% eng rate)',
    referenceUrl: 'https://www.instagram.com/p/DVPHwWvjm-x/',
    script: `CENA 1 — Câmera frontal, tom íntimo, como se fosse uma conversa real
FALA: "Se uma amiga minha chegasse agora e dissesse: 'Quero comprar meu primeiro imóvel, por onde eu começo?' — eu ia falar assim:"

CENA 2 — Tom de confidente
FALA: "Antes de olhar qualquer imóvel, entenda o que você precisa que ele faça por você. Não o que você quer agora — o que você vai precisar em 5 anos. Esses dois são diferentes."

CENA 3 — Mais direta
FALA: "Desconfie de qualquer corretor que não faz perguntas sobre a sua vida antes de mostrar opções. Eles estão vendendo — não orientando. Isso é normal no mercado. Mas você merece mais."

CENA 4 — Tom de encerramento, mais suave
FALA: "E não tenha pressa. O imóvel certo para o momento errado ainda é um erro. O timing importa tanto quanto o produto."

CALL TO ACTION FINAL:
FALA: "Se você está nesse momento agora, me manda uma mensagem. Vou te tratar como eu trataria uma amiga — com honestidade."
TEXTO NA TELA: "Honestidade antes. Imóvel depois." + logo M One`
  },
  {
    id: 19,
    date: '30/04/2026',
    dayOfWeek: 'Quarta-feira',
    format: 'Carrossel',
    theme: '5 perguntas antes de assinar qualquer contrato',
    funnel: 'Autoridade',
    status: 'A gravar',
    description: 'Carrossel de educação estratégica que fecha o mês com autoridade máxima. As perguntas certas a fazer antes de assinar qualquer contrato imobiliário — conteúdo de alto potencial de salvamento.',
    hook: 'Você pesquisou meses. Visitou vários imóveis. Mas fez essas 5 perguntas?',
    reference: '@monica.poplawski — "Dois andares, duas masters" (114.229 views)',
    referenceUrl: 'https://www.instagram.com/p/DU_UmdBkZeF/',
    script: `SLIDE 1 (Capa):
TEXTO: "5 perguntas que você precisa fazer antes de assinar qualquer contrato"
SUBTEXTO: "Salva — você vai precisar"
VISUAL: Fundo escuro, tipografia clara, logo M One

SLIDE 2:
TEXTO: "Pergunta 1 — Qual é o histórico de entrega desta construtora?"
DESENVOLVIMENTO: Taxa de atraso, qualidade de acabamento nas últimas obras entregues, processos na justiça. Essa informação está disponível — mas raramente é apresentada voluntariamente.

SLIDE 3:
TEXTO: "Pergunta 2 — Qual é o potencial de valorização desta região em 5 anos?"
DESENVOLVIMENTO: Não a promessa do corretor — os dados. Obras de infraestrutura previstas, expansão urbana, histórico de valorização do metro quadrado nos últimos anos. Esses dados existem. Exija.

SLIDE 4:
TEXTO: "Pergunta 3 — Se eu precisar vender em 2 anos, qual o cenário?"
DESENVOLVIMENTO: Liquidez real do imóvel. Quantos compradores potenciais existem para esse produto nessa faixa de preço. Imóvel bonito e imóvel líquido não são sempre o mesmo imóvel.

SLIDE 5:
TEXTO: "Pergunta 4 — Há pendências na documentação ou no IPTU?"
DESENVOLVIMENTO: Débitos de IPTU, regularidade da matrícula, ITBI já calculado, questões condominiais em aberto. Problemas documentais não aparecem na visita. Aparecem depois que você assinou.

SLIDE 6:
TEXTO: "Pergunta 5 — Este imóvel está alinhado com o meu objetivo em 10 anos?"
DESENVOLVIMENTO: Essa é a mais ignorada. Imóvel para morar tem critério diferente de imóvel para investir. Imóvel para família tem critério diferente de imóvel para casal sem filhos. O alinhamento com o futuro vale mais do que qualquer característica presente.

SLIDE 7 (CTA):
TEXTO: "Quem responde essas perguntas antes de assinar toma a decisão certa."
SUBTEXTO: "Me chama antes da visita. Não depois."
VISUAL: Logo M One + @handle

LEGENDA:
Eu faço essas perguntas por você — e por conta própria — antes de indicar qualquer imóvel. 🔍
Porque meu trabalho não é apresentar opções. É garantir que a opção que você escolhe é a certa para o seu momento.
Salva. E se estiver pesquisando agora, me manda uma mensagem. 👇
#compradeimovel #dicas #documentacaoimobiliaria #imoveis #patrimônio #orientacaoimobiliaria #altopadrao #mone #mercadoimobiliario`
  }
];

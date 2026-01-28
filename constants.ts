import { AppState } from './types';

// Helper for image paths
const img = (name: string) => `imagens/${name}`;

export const INITIAL_STATE: AppState = {
  version: 'v3.0',
  sections: [
    {
      id: 'sec-1',
      title: 'Introdução',
      blocks: [
        {
          id: 'b-1-1',
          type: 'paragraph',
          content: 'Este manual apresenta as funcionalidades da ferramenta <strong>Consulta de XMLs</strong>, parte integrante do sistema PSA Elevate. A ferramenta permite buscar, visualizar, exportar e baixar documentos fiscais eletrônicos (NFe e CTe) de forma centralizada.'
        },
        {
          id: 'b-1-2',
          type: 'paragraph',
          content: 'O objetivo deste documento é orientar analistas fiscais na utilização eficiente de todos os recursos disponíveis, desde a aplicação de filtros até a exportação de dados para análise.'
        },
        {
          id: 'b-1-3',
          type: 'tip',
          content: 'Certifique-se de que seu perfil de usuário possui as permissões necessárias para acessar o módulo de Consulta de XMLs antes de prosseguir.'
        }
      ]
    },
    {
      id: 'sec-2',
      title: 'Acessando o Sistema',
      blocks: [
        {
          id: 'b-2-1',
          type: 'h3',
          content: '2.1 Acesso ao PSA Elevate'
        },
        {
          id: 'b-2-2',
          type: 'paragraph',
          content: 'Acesse o site do PSA Elevate através do navegador. Na página inicial, localize o ícone de equipe no canto superior direito da tela.'
        },
        {
          id: 'b-2-img-1',
          type: 'image',
          imageState: {
            src: img('01_acesso_site.png'),
            caption: 'Página inicial do PSA Elevate',
            zoom: 1,
            pan: { x: 0, y: 0 },
            markers: []
          }
        },
        {
            id: 'b-2-3',
            type: 'paragraph',
            content: 'Posicione o cursor sobre o ícone para visualizar o menu suspenso e clique em <strong>Equipe</strong>.'
        },
        {
            id: 'b-2-img-2',
            type: 'image',
            imageState: {
              src: img('02_acesso_menu_equipe.png'),
              caption: 'Menu Equipe no canto superior direito',
              zoom: 1,
              pan: { x: 0, y: 0 },
              markers: []
            }
        },
        {
            id: 'b-2-4',
            type: 'h3',
            content: '2.2 Seleção de Área'
        },
        {
            id: 'b-2-5',
            type: 'paragraph',
            content: 'Na tela de seleção de área, escolha o setor correspondente às suas atividades. Para acessar as ferramentas de consulta fiscal, selecione a opção <strong>Digital</strong>.'
        },
        {
            id: 'b-2-img-3',
            type: 'image',
            imageState: {
              src: img('03_selecao_area.png'),
              caption: 'Seleção da área de atuação',
              zoom: 1,
              pan: { x: 0, y: 0 },
              markers: []
            }
        },
        {
            id: 'b-2-6',
            type: 'h3',
            content: '2.3 Login'
        },
        {
            id: 'b-2-7',
            type: 'paragraph',
            content: 'Insira suas credenciais de acesso nos campos correspondentes. No campo <strong>Email</strong>, digite seu endereço de e-mail corporativo. No campo <strong>Senha</strong>, insira sua senha. Em seguida, clique em <strong>Entrar</strong>.'
        },
        {
            id: 'b-2-img-4',
            type: 'image',
            imageState: {
              src: img('04_login.png'),
              caption: 'Tela de login com credenciais',
              zoom: 1,
              pan: { x: 0, y: 0 },
              markers: []
            }
        },
        {
            id: 'b-2-8',
            type: 'h3',
            content: '2.4 Seleção de Ambiente'
        },
        {
            id: 'b-2-9',
            type: 'paragraph',
            content: 'Após o login, selecione o ambiente de trabalho apropriado. Para acessar as ferramentas de consulta e desenvolvimento, clique em <strong>Digital Dev</strong>.'
        },
        {
            id: 'b-2-img-5',
            type: 'image',
            imageState: {
              src: img('05_selecao_ambiente.png'),
              caption: 'Escolha entre Digital Rotina e Digital Dev',
              zoom: 1,
              pan: { x: 0, y: 0 },
              markers: []
            }
        }
      ]
    },
    {
        id: 'sec-3',
        title: 'Navegação até Consulta de XMLs',
        blocks: [
            {
                id: 'b-3-1',
                type: 'h3',
                content: '3.1 Dashboard e Menu Lateral'
            },
            {
                id: 'b-3-2',
                type: 'paragraph',
                content: 'No Dashboard Dev, localize o menu lateral à esquerda da tela. Clique na opção <strong>Consulta de XMLs</strong> para acessar a ferramenta de busca de documentos fiscais.'
            },
            {
                id: 'b-3-img-1',
                type: 'image',
                imageState: {
                    src: img('06_dashboard_dev.png'),
                    caption: 'Dashboard Dev — menu lateral com opção Consulta de XMLs',
                    zoom: 1,
                    pan: { x: 0, y: 0 },
                    markers: []
                }
            }
        ]
    },
    {
        id: 'sec-4',
        title: 'Visão Geral da Interface',
        blocks: [
            { id: 'b-4-1', type: 'h3', content: '4.1 Estrutura da Tela' },
            { id: 'b-4-2', type: 'paragraph', content: 'A interface da Consulta de XMLs está organizada em duas áreas principais: a área de <strong>Filtros</strong> na parte superior, onde você define os critérios de busca, e a área de <strong>Documentos</strong> na parte inferior, onde os resultados são exibidos em formato de tabela.' },
            { id: 'b-4-3', type: 'paragraph', content: 'Na barra de ações, você encontra os botões <strong>Limpar Filtros</strong>, <strong>Baixar XMLs</strong>, <strong>Exportar Excel</strong> e <strong>Buscar</strong>.' },
            { 
                id: 'b-4-img-1', type: 'image', 
                imageState: { src: img('07_tela_inicial.png'), caption: 'Visão geral da interface — filtros e área de documentos', zoom: 1, pan: {x:0,y:0}, markers: [] }
            }
        ]
    },
    {
        id: 'sec-5',
        title: 'Utilizando os Filtros',
        blocks: [
             { id: 'b-5-1', type: 'h3', content: '5.1 Cliente' },
             { id: 'b-5-2', type: 'paragraph', content: 'O filtro <strong>Cliente</strong> permite selecionar a empresa ou grupo empresarial cujos documentos serão consultados. Clique no campo e selecione o cliente desejado na lista suspensa.' },
             { id: 'b-5-img-1', type: 'image', imageState: { src: img('08_filtro_cliente.png'), caption: 'Dropdown do filtro Cliente', zoom: 1, pan: {x:0,y:0}, markers: [] } },
             { id: 'b-5-3', type: 'h3', content: '5.2 Contribuinte' },
             { id: 'b-5-4', type: 'paragraph', content: 'Após selecionar o cliente, o filtro <strong>Contribuinte</strong> exibe os estabelecimentos vinculados. Selecione o contribuinte específico (identificado pelo CNPJ) para filtrar os documentos relacionados.' },
             { id: 'b-5-img-2', type: 'image', imageState: { src: img('09_filtro_contribuinte.png'), caption: 'Seleção do contribuinte vinculado ao cliente', zoom: 1, pan: {x:0,y:0}, markers: [] } },
             { id: 'b-5-5', type: 'h3', content: '5.3 Tipo de Documento' },
             { id: 'b-5-6', type: 'paragraph', content: 'O filtro <strong>Tipo Doc.</strong> permite escolher entre NFe (Nota Fiscal Eletrônica) e CTe (Conhecimento de Transporte Eletrônico).' },
             { id: 'b-5-img-3', type: 'image', imageState: { src: img('10_filtro_tipo_doc.png'), caption: 'Opções NFe e CTe', zoom: 1, pan: {x:0,y:0}, markers: [] } },
             { id: 'b-5-7', type: 'h3', content: '5.4 Tipo de Movimento' },
             { id: 'b-5-8', type: 'paragraph', content: 'O filtro <strong>Tipo Mov.</strong> define a direção do movimento fiscal. Selecione <strong>Entrada</strong> para documentos recebidos, <strong>Saída</strong> para documentos emitidos, ou <strong>Todos</strong> para visualizar ambos.' },
             { id: 'b-5-img-4', type: 'image', imageState: { src: img('11_filtro_tipo_mov.png'), caption: 'Opções Todos, Entrada e Saída', zoom: 1, pan: {x:0,y:0}, markers: [] } },
             { id: 'b-5-9', type: 'h3', content: '5.5 Período' },
             { id: 'b-5-10', type: 'paragraph', content: 'Defina o intervalo de datas utilizando os campos <strong>Data Início</strong> e <strong>Data Fim</strong>. Clique no ícone de calendário para selecionar as datas.' },
             { id: 'b-5-img-5', type: 'image', imageState: { src: img('12_filtro_data_inicio.png'), caption: 'Seleção da data de início', zoom: 1, pan: {x:0,y:0}, markers: [] } },
             { id: 'b-5-img-6', type: 'image', imageState: { src: img('13_filtro_data_fim.png'), caption: 'Seleção da data de fim', zoom: 1, pan: {x:0,y:0}, markers: [] } },
             { id: 'b-5-11', type: 'h3', content: '5.6 CPF/CNPJ Emitente' },
             { id: 'b-5-12', type: 'paragraph', content: 'O campo <strong>CPF/CNPJ Emitente</strong> permite filtrar documentos por um emitente específico.' },
             { id: 'b-5-img-7', type: 'image', imageState: { src: img('14_filtro_emitente.png'), caption: 'Preenchimento do CPF/CNPJ do emitente', zoom: 1, pan: {x:0,y:0}, markers: [] } },
             { id: 'b-5-13', type: 'h3', content: '5.7 CPF/CNPJ Destinatário' },
             { id: 'b-5-14', type: 'paragraph', content: 'O campo <strong>CPF/CNPJ Destinatário</strong> funciona de forma similar. Utilize quando precisar localizar documentos enviados para um destinatário específico.' },
             { id: 'b-5-img-8', type: 'image', imageState: { src: img('15_filtro_destinatario.png'), caption: 'Preenchimento do CPF/CNPJ do destinatário', zoom: 1, pan: {x:0,y:0}, markers: [] } },
             { id: 'b-5-15', type: 'h3', content: '5.8 Executando a Busca' },
             { id: 'b-5-16', type: 'paragraph', content: 'Após configurar os filtros desejados, clique no botão <strong>Buscar</strong> para executar a consulta.' },
             { id: 'b-5-17', type: 'tip', content: 'Utilize combinações de filtros para otimizar o tempo de busca e obter resultados mais precisos.' }
        ]
    },
    {
        id: 'sec-6',
        title: 'Visualizando Resultados',
        blocks: [
            { id: 'b-6-1', type: 'h3', content: '6.1 Tabela de Documentos' },
            { id: 'b-6-2', type: 'paragraph', content: 'A tabela de resultados apresenta os documentos fiscais encontrados com as seguintes informações: CNPJ Emitente, Razão Social, Chave de Acesso, UF, Número, Data Emissão, Valor e quantidade de Produtos.' },
            { id: 'b-6-img-1', type: 'image', imageState: { src: img('16_resultados_busca.png'), caption: 'Tabela com documentos encontrados', zoom: 1, pan: {x:0,y:0}, markers: [] } }
        ]
    },
    {
        id: 'sec-7',
        title: 'Exportação para Excel',
        blocks: [
            { id: 'b-7-1', type: 'h3', content: '7.1 Abrindo o Modal de Exportação' },
            { id: 'b-7-2', type: 'paragraph', content: 'Para exportar os dados para Excel, clique no botão <strong>Exportar Excel</strong>.' },
            { id: 'b-7-img-1', type: 'image', imageState: { src: img('17_btn_exportar_excel.png'), caption: 'Botão Exportar Excel', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-7-3', type: 'h3', content: '7.2 Selecionando Colunas' },
            { id: 'b-7-4', type: 'paragraph', content: 'Na aba <strong>Colunas</strong>, escolha quais informações serão incluídas na exportação. As colunas estão organizadas em grupos temáticos.' },
            { id: 'b-7-img-2', type: 'image', imageState: { src: img('18_modal_colunas.png'), caption: 'Modal de exportação com grupos de colunas', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-7-5', type: 'h3', content: '7.3 Grupos de Colunas' },
            { id: 'b-7-6', type: 'paragraph', content: 'Os grupos disponíveis são: <strong>Documento</strong>, <strong>Emitente</strong>, <strong>Destinatário</strong>, <strong>Totais</strong>, <strong>Info Adicionais</strong>, <strong>Produtos</strong> e <strong>ICMS Produto</strong>.' },
            { id: 'b-7-img-3', type: 'image', imageState: { src: img('19_grupo_documento.png'), caption: 'Grupo Documento expandido', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-7-7', type: 'h3', content: '7.4 Marcar e Desmarcar Todos' },
            { id: 'b-7-8', type: 'paragraph', content: 'Utilize <strong>Marcar todos</strong> para selecionar todas as colunas ou <strong>Desmarcar todos</strong> para limpar a seleção.' },
            { id: 'b-7-img-4', type: 'image', imageState: { src: img('20_marcar_todos.png'), caption: 'Botão Marcar todos', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-7-img-5', type: 'image', imageState: { src: img('21_desmarcar_todos.png'), caption: 'Botão Desmarcar todos', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-7-9', type: 'h3', content: '7.5 Visualização Prévia' },
            { id: 'b-7-10', type: 'paragraph', content: 'Clique na aba <strong>Preview</strong> para visualizar como os dados aparecerão na planilha.' },
            { id: 'b-7-img-6', type: 'image', imageState: { src: img('25_preview_11col.png'), caption: 'Preview com 11 colunas', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-7-img-7', type: 'image', imageState: { src: img('26_preview_51col.png'), caption: 'Preview com 51 colunas', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-7-11', type: 'h3', content: '7.6 Executando a Exportação' },
            { id: 'b-7-12', type: 'paragraph', content: 'Clique em <strong>Exportar Excel</strong> para gerar e baixar o arquivo .xlsx.' },
            { id: 'b-7-img-8', type: 'image', imageState: { src: img('27_download_excel.png'), caption: 'Arquivo Excel baixado', zoom: 1, pan: {x:0,y:0}, markers: [] } }
        ]
    },
    {
        id: 'sec-8',
        title: 'Gerenciando Perfis de Exportação',
        blocks: [
            { id: 'b-8-1', type: 'h3', content: '8.1 Salvando um Perfil' },
            { id: 'b-8-2', type: 'paragraph', content: 'Para reutilizar uma configuração de colunas, clique no botão <strong>Salvar</strong> (ícone de disquete).' },
            { id: 'b-8-img-1', type: 'image', imageState: { src: img('23_btn_salvar_perfil.png'), caption: 'Botão Salvar perfil', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-8-3', type: 'h3', content: '8.2 Favoritando um Perfil' },
            { id: 'b-8-4', type: 'paragraph', content: 'Clique no botão <strong>Favoritar</strong> (ícone de estrela) para marcar um perfil como favorito.' },
            { id: 'b-8-img-2', type: 'image', imageState: { src: img('22_btn_favoritar.png'), caption: 'Botão Favoritar', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-8-5', type: 'h3', content: '8.3 Carregando Perfis Salvos' },
            { id: 'b-8-6', type: 'paragraph', content: 'Para utilizar um perfil existente, clique no seletor de perfis e escolha o perfil desejado.' },
            { id: 'b-8-img-3', type: 'image', imageState: { src: img('24_dropdown_perfis.png'), caption: 'Lista de perfis salvos', zoom: 1, pan: {x:0,y:0}, markers: [] } }
        ]
    },
    {
        id: 'sec-9',
        title: 'Download de XMLs',
        blocks: [
            { id: 'b-9-1', type: 'h3', content: '9.1 Selecionando Documentos' },
            { id: 'b-9-2', type: 'paragraph', content: 'Na tabela de resultados, marque os documentos que deseja baixar clicando na caixa de seleção à esquerda de cada linha.' },
            { id: 'b-9-img-1', type: 'image', imageState: { src: img('28_selecao_docs.png'), caption: 'Documentos selecionados na tabela', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-9-3', type: 'h3', content: '9.2 Executando o Download' },
            { id: 'b-9-4', type: 'paragraph', content: 'Com os documentos selecionados, clique no botão <strong>Baixar XMLs</strong>. O número entre parênteses indica a quantidade de arquivos.' },
            { id: 'b-9-img-2', type: 'image', imageState: { src: img('29_btn_baixar_xmls.png'), caption: 'Botão Baixar XMLs (9)', zoom: 1, pan: {x:0,y:0}, markers: [] } },
            { id: 'b-9-5', type: 'h3', content: '9.3 Arquivo ZIP Gerado' },
            { id: 'b-9-6', type: 'paragraph', content: 'O sistema gera um arquivo ZIP contendo todos os XMLs selecionados. O download inicia automaticamente.' },
            { id: 'b-9-img-3', type: 'image', imageState: { src: img('30_download_zip.png'), caption: 'Download concluído — arquivo ZIP com XMLs', zoom: 1, pan: {x:0,y:0}, markers: [] } }
        ]
    },
    {
        id: 'sec-10',
        title: 'Dicas e Boas Práticas',
        blocks: [
            {
                id: 'b-10-1',
                type: 'list',
                listItems: [
                    'Utilize filtros específicos para otimizar o tempo de busca e reduzir a quantidade de resultados.',
                    'Crie perfis de exportação para configurações que você utiliza frequentemente.',
                    'Ao exportar grandes volumes de dados, selecione apenas as colunas necessárias para reduzir o tamanho do arquivo.',
                    'Verifique sempre o período selecionado antes de executar a busca.',
                    'Utilize o filtro de CPF/CNPJ quando precisar localizar documentos de um parceiro comercial específico.',
                    'Favoritar um perfil de exportação garante que ele seja carregado automaticamente ao abrir o modal.'
                ]
            }
        ]
    }
  ]
};
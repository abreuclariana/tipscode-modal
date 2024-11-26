Projeto Modal Responsivo com HTML, CSS e JavaScript

Este projeto tem como objetivo a criação de um modal responsivo, utilizando exclusivamente HTML, CSS e JavaScript, com foco em funcionalidade, interatividade e adaptação para diferentes tamanhos de tela. O modal foi projetado para ser visualmente atraente e funcional, oferecendo uma experiência amigável para o usuário.

Descrição do Projeto
Um modal é uma janela que aparece sobre o conteúdo principal de uma página, geralmente para exibir informações importantes, coletar dados ou interagir com o usuário. Neste projeto, o modal contém um formulário simples com três campos (Nome, E-mail e Telefone) e um botão para envio. O design segue uma estética moderna com cores escuras e detalhes vibrantes, como o botão roxo e bordas azuis, proporcionando um contraste elegante.

O modal é ativado por meio de um botão centralizado na tela. O usuário pode fechá-lo de três maneiras:

Clicando fora da área do modal.
Clicando no botão de fechar (X).
Pressionando a tecla Escape no teclado.
Essas funcionalidades foram implementadas com event listeners em JavaScript, garantindo uma navegação intuitiva.

Recursos Técnicos
HTML
O HTML define a estrutura da página, contendo:

Um botão para abrir o modal.
Um contêiner para o modal com seus respectivos campos de entrada e botão de envio.
Um botão de fechamento (X) para encerrar o modal.
CSS
O CSS foi utilizado para estilizar o modal e garantir responsividade. Alguns destaques incluem:

Design Moderno: Com um esquema de cores que combina o fundo escuro (#181719), bordas azuis (#38B6FF) e um botão vibrante em roxo (#6F44FF), o modal é visualmente atraente.
Responsividade: Foram adicionadas media queries para adaptar o modal a diferentes tamanhos de tela. Em dispositivos menores, o modal ocupa quase toda a largura disponível, e os textos e botões são ajustados proporcionalmente para manter a legibilidade.
Interatividade: Transições suaves nos botões e nos elementos para melhorar a experiência do usuário.
JavaScript
A funcionalidade interativa foi implementada com JavaScript, permitindo:

Abrir o modal ao clicar no botão.
Fechar o modal ao clicar fora dele, no botão de fechar, ou pressionando a tecla Escape.
Garantir que o modal seja exibido centralizado na tela, independentemente do dispositivo.
Responsividade
A responsividade foi uma prioridade neste projeto para garantir que o modal funcione bem em smartphones, tablets e desktops. Usamos media queries no CSS para ajustar:

O tamanho e o espaçamento do modal.
A largura dos campos de entrada.
O tamanho dos botões e textos.
Dessa forma, o modal oferece uma experiência consistente, seja em uma tela pequena de smartphone ou em um monitor maior.

Aplicações Práticas
Este projeto pode ser adaptado para diversas finalidades, como:

Coleta de Dados: Formulários simples para capturar informações do usuário.
Alertas ou Mensagens Importantes: Exibir avisos ou confirmações.

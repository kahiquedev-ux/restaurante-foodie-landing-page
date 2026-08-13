================================================================================
                         RESTAURANTE FOODIE - LANDING PAGE
                         ================================
                         Versão: 1.0.0
                         Data: 13/08/2026
                         Desenvolvedor: Kahique Dev
                         Contato: kahique.dev@gmail.com
                         Curso: Desenvolvimento de Sistemas
                         Matéria: Programação Web I
                         Execução: Localhost (servidor local)
================================================================================

📋 SOBRE O PROJETO
------------------
Landing page desenvolvida para o restaurante Foodie como parte do curso de 
Desenvolvimento de Sistemas, na matéria de Programação Web I. O projeto 
apresenta um site completo para um restaurante com cardápio, carrinho de 
compras, avaliações, newsletter e área de login.

⚠️ IMPORTANTE: O site foi desenvolvido para ser executado APENAS via 
   servidor local (localhost). Não funciona abrindo diretamente o 
   arquivo HTML no navegador.

🎯 OBJETIVO
-----------
- Desenvolver uma landing page completa para um restaurante
- Aplicar conceitos de Programação Web I
- Criar um site funcional com carrinho de compras
- Praticar HTML, CSS e JavaScript
- Implementar interatividade com Swiper.js
- Trabalhar com navegação e layout responsivo

📚 DISCIPLINA: PROGRAMAÇÃO WEB I
--------------------------------
- Curso: Desenvolvimento de Sistemas
- Matéria: Programação Web I
- Projeto: Landing Page Restaurante Foodie
- Execução: Localhost (servidor local)

✨ FUNCIONALIDADES
-----------------
- Design Responsivo (Desktop, Tablet, Mobile)
- Menu Hambúrguer para dispositivos móveis
- Carrinho de Compras interativo
- Cards de produtos (cardápio)
- Sistema de avaliações com Swiper.js
- Formulário de Newsletter
- Área de Login (tela login)
- Animações e transições
- Redes Sociais integradas
- Footer com informações completas

🛠️ TECNOLOGIAS UTILIZADAS
--------------------------
Frontend:
  ✓ HTML5 - Estrutura semântica
  ✓ CSS3 - Estilização e layout responsivo
  ✓ JavaScript - Interatividade

Bibliotecas:
  ✓ Font Awesome - Ícones vetoriais
  ✓ Swiper.js - Carrossel de avaliações

Estrutura:
  ✓ CSS Modular (style.css)
  ✓ JavaScript Modular (main.js)
  ✓ Pasta de imagens (imagens/)
  ✓ Tela de Login (tela login/)

📁 ESTRUTURA DO PROJETO
-----------------------
restaurante-foodie/
│
├── index.html              # Página principal
│
├── css/
│   └── style.css          # Estilos personalizados
│
├── js/
│   └── main.js            # Scripts e interatividade
│
├── imagens/               # Todas as imagens do site
│   ├── delivery-boy.png
│   ├── delivery-boy-with-phone.png
│   ├── mobile-app.png
│   ├── easy-to-order.png
│   ├── fast-delivery.png
│   ├── best-quality.png
│   ├── profile1.jpeg
│   ├── profile2.jpeg
│   ├── profile3.jpeg
│   └── burger.png
│
├── tela login/            # Tela de login
│   └── index.html
│
└── README.txt             # Este arquivo

📋 SEÇÕES DO SITE
-----------------
1. Header (Cabeçalho)
   - Logo "Foodie."
   - Menu (Home, Menu, Serviço, Sobre Nós, Contatos)
   - Carrinho de compras com contador
   - Botão Entrar (tela login)
   - Menu hambúrguer para mobile

2. Hero (Página Inicial)
   - Título: "Aproveite Sua Deliciosa Comida"
   - Descrição do serviço
   - Botão "Faça seu pedido agora"
   - Redes sociais (Twitter, Instagram, Facebook, Google+)
   - Imagem do entregador

3. Serviços
   - Fácil de Encomendar
   - Entrega rápida
   - Melhor Qualidade

4. Cardápio
   - "Os Mais Populares"
   - Cards de produtos
   - Carrinho de compras (cart-tab)
   - Botões Fechar e Verificar

5. Avaliações
   - Depoimentos de clientes
   - Carrossel com Swiper.js
   - Fotos de perfil e avaliações com estrelas

6. Aplicativo
   - Chamada para baixar o app
   - Imagem do mobile app
   - Botão "Obtenha o aplicativo"

7. Newsletter
   - Título: "Inscreva-se Em Nossa Newsletter"
   - Campo de e-mail
   - Botão "Inscrever-se"

8. Footer (Rodapé)
   - Logo e descrição
   - Redes sociais
   - Menu: Nosso Cardápio, Empresa, Suporte
   - Links úteis

🚀 COMO EXECUTAR (APENAS LOCALHOST)
-----------------------------------
⚠️ ATENÇÃO: O site NÃO funciona abrindo diretamente o arquivo HTML.
   É necessário usar um servidor local (localhost).

Opção 1 - VS Code com Live Server (RECOMENDADO):
   1. Abra o projeto no VS Code
   2. Instale a extensão "Live Server"
   3. Clique com o botão direito no index.html
   4. Selecione "Open with Live Server"
   5. O site abrirá em: http://127.0.0.1:5500/

Opção 2 - Python (servidor embutido):
   1. Abra o terminal na pasta do projeto
   2. Execute: python -m http.server 8000
   3. Acesse: http://localhost:8000

Opção 3 - Node.js (http-server):
   1. Instale o http-server: npm install -g http-server
   2. Execute na pasta: http-server
   3. Acesse: http://localhost:8080

Opção 4 - XAMPP/WAMP:
   1. Coloque a pasta no htdocs (XAMPP) ou www (WAMP)
   2. Inicie o Apache
   3. Acesse: http://localhost/restaurante-foodie/

📱 RESPONSIVIDADE
-----------------
O site se adapta a:
  ✓ Desktop - Layout completo com todos os recursos
  ✓ Tablet - Ajustes de grid e tamanhos
  ✓ Mobile - Menu hambúrguer e conteúdo empilhado

🔧 PERSONALIZAÇÃO
-----------------
Cores e Estilos:
  - Editar no arquivo css/style.css

Conteúdo:
  - Textos: editar nas tags HTML do index.html
  - Imagens: substituir arquivos na pasta imagens/
  - Preços: alterar valores no JavaScript (main.js)
  - Links: atualizar URLs das redes sociais

📝 FUNCIONALIDADES DO JAVASCRIPT
--------------------------------
✓ Carrinho de compras com adição/remoção de itens
✓ Atualização automática do valor total
✓ Contador de itens no carrinho
✓ Navegação mobile com menu hambúrguer
✓ Carrossel de avaliações (Swiper.js)
✓ Máscara de formulário (newsletter)
✓ Eventos de clique e interatividade

👨‍💻 DESENVOLVEDOR
------------------
Nome: Kahique Dev
E-mail: kahique.dev@gmail.com
Curso: Desenvolvimento de Sistemas
Matéria: Programação Web I
Instituição: Etec
Copyright: © 2026 - Todos os direitos reservados

🔗 LINKS ÚTEIS
--------------
GitHub: https://github.com/kahiquedev-ux/restaurante-foodie-landing-page
GitHub https://github.com/kahiquedev-ux/restaurante-foodie-landing-page
VERCEL: restaurante-foodie-landing-page-744ya6vb5.vercel.app

📄 LICENÇA
----------
Uso educacional e demonstrativo.
Todos os direitos reservados.

🤝 CONTRIBUIÇÕES
----------------
Sugestões e melhorias são bem-vindas!
Entre em contato: kahique.dev@gmail.com

⚠️ AVISO IMPORTANTE
-------------------
Este projeto foi desenvolvido para fins educacionais na disciplina de 
Programação Web I. O site só funciona em servidor local (localhost) 
devido a restrições de segurança do navegador (CORS).

NÃO FUNCIONA:
  ❌ Abrindo diretamente o arquivo HTML no navegador
  ❌ Em servidores sem suporte a PHP (se houver)
  ❌ Em hospedagens estáticas sem configuração adequada

FUNCIONA APENAS:
  ✅ Servidor local (localhost)
  ✅ Live Server do VS Code
  ✅ Python http.server
  ✅ Node.js http-server
  ✅ XAMPP/WAMP

================================================================================
                    RESTAURANTE FOODIE - 2026
              "Aproveite Sua Deliciosa Comida com Entrega Rápida."
================================================================================

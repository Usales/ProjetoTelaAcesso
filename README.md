# ProjetoTelaAcesso

Aplicação web de rede social para desenvolvedores, permitindo compartilhamento de conhecimento e experiências na área de programação.

## 🔥 Funcionalidades

- Sistema de autenticação completo:
  - Cadastro de usuários
  - Login com validação
  - Logout seguro
  - Tokens JWT para autenticação
  - Senhas criptografadas
- Interface moderna e responsiva
- Área principal para compartilhamento de conteúdo
- Sistema de mensagens entre usuários

## 🚀 Tecnologias e técnicas utilizadas

### Frontend
- **HTML5** e **CSS3**
  - Flexbox para layout
  - Design responsivo
  - Tema escuro moderno
  - Fonte Prompt para melhor legibilidade
- **React.js**
  - Componentes reutilizáveis
  - Gerenciamento de estado
  - Validação de formulários
  - Integração com API

### Backend
- **Node.js**
  - Express.js para API REST
  - Middleware de autenticação
  - Validação de dados
  - Tratamento de erros
- **MongoDB Atlas**
  - Banco de dados na nuvem
  - Modelagem de dados
  - Queries otimizadas
- **Segurança**
  - Bcrypt para criptografia
  - JWT para autenticação
  - Proteção de rotas
  - Validação de dados

## 📁 Estrutura do Projeto

- `TelaLogin.html` - Página de login
- `TelaCadastro.html` - Página de cadastro
- `TelaPrincipal.html` - Página principal após autenticação
- `Style/` - Diretório com arquivos CSS
- `backend/` - Diretório do servidor
  - `src/` - Código fonte do backend
    - `controllers/` - Controladores da API
    - `models/` - Modelos do MongoDB
    - `routes/` - Rotas da API
    - `config/` - Configurações do servidor

## 🖼️ Layout

A interface é composta por:
- Tela de login com formulário de autenticação
- Tela de cadastro para novos usuários
- Tela principal com:
  - Botão de logout no canto superior direito
  - Área central para conteúdo
  - Design moderno com tema escuro

## 💡 Observações

- Sistema de autenticação completo e seguro
- Dados armazenados no MongoDB Atlas
- Interface moderna com tema escuro
- Foco em usabilidade e design responsivo
- API REST para comunicação frontend/backend

## 🔧 Como executar

1. Clone o repositório
2. Instale as dependências do backend:
   ```bash
   cd backend
   npm install
   ```
3. Configure o arquivo `.env` com suas credenciais do MongoDB
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. Abra o arquivo `TelaLogin.html` no navegador

---

Desenvolvido como projeto de estudo e prática de desenvolvimento web.

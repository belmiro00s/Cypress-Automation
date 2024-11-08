# Cypress Automation Project

Este projeto utiliza o **Cypress** para automação de testes end-to-end e de API. Ele foi desenvolvido para validar funcionalidades em um sistema com autenticação de usuários e gerenciamento de registros. Os testes foram realizados utilizando o site [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/). O projeto inclui testes de login, registro de usuários e uma estrutura de utilitários para facilitar a manipulação de elementos no frontend.
## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

# Cypress Automation Project

Este projeto utiliza o **Cypress** para automação de testes end-to-end e de API. Ele foi desenvolvido para validar funcionalidades em um sistema com autenticação de usuários e gerenciamento de registros. O projeto inclui testes de login, registro de usuários e uma estrutura de utilitários para facilitar a manipulação de elementos no frontend.

## 📂 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```plaintext
cypress
├── e2e
│   ├── integration
│   │   ├── login.cy.js
│   │   ├── users.cy.js
│   │   └── users-api.cy.js
│   ├── fixtures
│   │   ├── login.json
│   │   └── user.json
│   ├── plugins
│   │   └── index.js
│   ├── support
│   │   ├── pages
│   │   │   └── user
│   │   │       └── index.js
│   │   ├── utils
│   │   │   ├── dynamic-dropdown.js
│   │   │   ├── input-fields.js
│   │   │   └── static-dropdowns.js
│   │   └── commands.js
├── cypress.config.js
└── cypress.env.example

```

### Descrição das Pastas e Arquivos

- **e2e/integration**: Contém os arquivos de testes para funcionalidades específicas.
  - `login.cy.js`: Testes de funcionalidade de login.
  - `users.cy.js`: Testes de registro de usuários através da interface.
  - `users-api.cy.js`: Testes de registro de usuários através de requisições API.

- **fixtures**: Armazena dados estáticos que são usados nos testes.
  - `login.json`: Dados de login, incluindo username e password.
  - `user.json`: Dados para criação de um novo usuário, incluindo username, password, status, entre outros atributos.

- **support/pages/user**: Contém os métodos relacionados a operações de usuários.
  - `index.js`: Define métodos para criação de usuários, utilizando requisições POST para criar novos registros.

- **support/utils**: Contém funções utilitárias para manipulação de elementos na interface.
  - `dynamic-dropdown.js`: Seleção dinâmica de elementos dropdown.
  - `input-fields.js`: Função para preenchimento de campos de input.
  - `static-dropdowns.js`: Seleção de elementos estáticos de dropdown.

- **support/commands.js**: Custom commands do Cypress que facilitam ações de login e logout.

## Especificação dos Testes

### Testes de Login

O arquivo `login.cy.js` testa a funcionalidade de login do sistema. Ele cobre:

- **Login com sucesso**: Verifica se o usuário é redirecionado para a página principal ao inserir credenciais válidas.
- **Erro de login**: Verifica se uma mensagem de erro é exibida ao inserir credenciais inválidas.

### Testes de Registro de Usuário

O arquivo `users.cy.js` contém testes para o registro de novos usuários na interface. Inclui:

- **Registro de novos usuários**: Preenche os campos de formulário necessários para criar um novo usuário do tipo "Admin" e verifica se a criação foi bem-sucedida.

### Testes de API para Registro de Usuários

O arquivo `users-api.cy.js` realiza o registro de usuários através de chamadas API. Estes testes:

- **Criação de múltiplos usuários**: Usa dados gerados dinamicamente com a biblioteca faker para criar múltiplos usuários via requisições POST.

## Utilização

### Requisitos

- **Node.js** instalado.
- **Cypress** configurado no projeto.

### Instalação

1. **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

### Executando os Testes

- **Para abrir o Cypress e executar os testes:**

    ```bash
    npx cypress open
    ```

- **Para rodar os testes em modo headless:**

    ```bash
    npx cypress run
    ```

## Estrutura dos Métodos

### Comandos Customizados

Os comandos personalizados estão localizados em `support/commands.js`. Exemplos:

- **`login`**: Realiza o login com credenciais fornecidas.
- **`logoutRequest`**: Envia uma requisição para realizar o logout do sistema.

### Páginas e Utilitários

- **Métodos de criação de usuários (`support/pages/user/index.js`)**: Inclui a função `createNewUserRequest`, que faz uma requisição POST para criar novos usuários.
- **Utilitários de Dropdowns**: Arquivos `dynamic-dropdown.js` e `static-dropdowns.js` contêm funções para seleção de opções em dropdowns dinâmicos e estáticos.
- **Preenchimento de Inputs**: O arquivo `input-fields.js` inclui uma função para preenchimento de campos de input, facilitando a inserção de dados nos testes.

## Configuração de Ambiente

As variáveis de ambiente são configuradas no arquivo `cypress.env.example`. Ajuste os valores conforme necessário para o ambiente de teste.




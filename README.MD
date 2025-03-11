# Iniciando o Projeto

Para iniciar o projeto, siga os passos abaixo:

1. Comando para criar o arquivo `package.json`:
    ```sh
    npm init -y
    ```

2. Instale o Express:
    ```sh
    npm i express@4.19.2
    ```
    O Express é um framework para Node.js que facilita a criação de aplicações web e APIs.

3. Instale os tipos do Express para TypeScript:
    ```sh
    npm i --save-dev @types/express@4.17.21
    ```
    Esses são os tipos TypeScript para o Express, que ajudam na verificação de tipos e autocompletar.

4. Instale o TypeScript e os tipos do Node.js:
    ```sh
    npm i typescript@5.5.4 @types/node@20.14.12 -D
    ```
    O TypeScript é um superconjunto do JavaScript que adiciona tipagem estática. Os tipos do Node.js são necessários para usar as APIs do Node.js com TypeScript.

5. Instale o TSX:
    ```sh
    npm i tsx@4.16.2 -D
    ```
    O TSX é uma ferramenta para executar arquivos TypeScript diretamente.

6. Inicialize o TypeScript:
    ```sh
    npx tsc --init
    ```
    Este comando cria um arquivo `tsconfig.json` com as configurações do TypeScript.

7. Instale o express-async-errors:
    ```sh
    npm i express-async-errors@3.1.1
    ```
    O express-async-errors é uma biblioteca que facilita o tratamento de erros em rotas assíncronas do Express.

8. Instale o Zod:
    ```sh
    npm i zod@3.23.8
    ```
    O Zod é uma biblioteca de validação de esquemas para TypeScript.

    docker-compose up -d

    npx prisma init --datasource-provider postgresql

    npx prisma migrate dev

    create_tables

    npx prisma studio

 npx jest --init
## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
package.json
README.MD
src/
    app.ts
    controllers/
        users-controller.ts
    middlewares/
        error-handling.ts
    routes/
        index.ts
        users-routes.ts
    server.ts
    utils/
        AppError.ts
tsconfig.json
```

### Descrição das Pastas e Arquivos

- **package.json**: Contém as dependências e scripts do projeto.
- **README.MD**: Instruções para iniciar e configurar o projeto.
- **src/**: Diretório principal do código fonte.
  - **app.ts**: Configuração principal do aplicativo Express.
  - **controllers/**: Contém os controladores da aplicação.
    - **users-controller.ts**: Controlador para gerenciar usuários.
  - **middlewares/**: Contém os middlewares da aplicação.
    - **error-handling.ts**: Middleware para tratamento de erros.
  - **routes/**: Contém as definições de rotas da aplicação.
    - **index.ts**: Arquivo principal de rotas.
    - **users-routes.ts**: Rotas relacionadas a usuários.
  - **server.ts**: Arquivo para iniciar o servidor.
  - **utils/**: Contém utilitários da aplicação.
    - **AppError.ts**: Classe para tratamento de erros personalizados.
- **tsconfig.json**: Configurações do TypeScript.
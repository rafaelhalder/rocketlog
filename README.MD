# Iniciando o Projeto
Para construir este projeto, siga os passos detalhados abaixo:

1. **Criação do arquivo `package.json`**:
    ```sh
    npm init -y
    ```
    Este comando cria um arquivo `package.json` com as configurações padrão do projeto.

2. **Instalação do Express**:
    ```sh
    npm i express@4.19.2
    ```
    O Express é um framework para Node.js que facilita a criação de aplicações web e APIs.

3. **Instalação dos tipos do Express para TypeScript**:
    ```sh
    npm i --save-dev @types/express@4.17.21
    ```
    Esses são os tipos TypeScript para o Express, que ajudam na verificação de tipos e autocompletar.

4. **Instalação do TypeScript e dos tipos do Node.js**:
    ```sh
    npm i typescript@5.5.4 @types/node@20.14.12 -D
    ```
    O TypeScript é um superconjunto do JavaScript que adiciona tipagem estática. Os tipos do Node.js são necessários para usar as APIs do Node.js com TypeScript.

5. **Instalação do TSX**:
    ```sh
    npm i tsx@4.16.2 -D
    ```
    O TSX é uma ferramenta para executar arquivos TypeScript diretamente.

6. **Inicialização do TypeScript**:
    ```sh
    npx tsc --init
    ```
    Este comando cria um arquivo `tsconfig.json` com as configurações do TypeScript.

7. **Instalação do express-async-errors**:
    ```sh
    npm i express-async-errors@3.1.1
    ```
    O express-async-errors é uma biblioteca que facilita o tratamento de erros em rotas assíncronas do Express.

8. **Instalação do Zod**:
    ```sh
    npm i zod@3.23.8
    ```
    O Zod é uma biblioteca de validação de esquemas para TypeScript.

9. **Configuração do Docker Compose**:
    ```sh
    docker-compose up -d
    ```
    Este comando inicia os serviços definidos no arquivo `docker-compose.yml`.

10. **Inicialização do Prisma**:
    ```sh
    npx prisma init --datasource-provider postgresql
    ```
    Este comando inicializa o Prisma com o provedor de dados PostgreSQL.

11. **Migração do Prisma**:
    ```sh
    npx prisma migrate dev
    ```
    Este comando aplica as migrações do banco de dados.

12. **Criação das tabelas**:
    ```sh
    create_tables
    ```
    Este comando cria as tabelas no banco de dados.

13. **Abertura do Prisma Studio**:
    ```sh
    npx prisma studio
    ```
    Este comando abre a interface do Prisma Studio para gerenciar o banco de dados.

14. **Inicialização do Jest**:
    ```sh
    npx jest --init
    ```
    Este comando inicializa o Jest para testes unitários.

Seguindo esses passos, você terá o ambiente configurado e pronto para desenvolvimento.
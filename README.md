# 🛒 Laboratório de Software - Sistema de Vendas

## 📌 Sobre o Projeto
Este projeto é um **Sistema de Vendas** desenvolvido em **VS Code**, com o objetivo de gerenciar clientes, produtos, fornecedores e vendas de forma eficiente. 

## 🚀 Funcionalidades
- CRUD de produtos

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: Java (versão 17)
- **Framework**: Spring Boot
- **Banco de Dados**: MySQL
- **ORM**: JPA (Java Persistence API)
- **IDE**: Visual Studio Code
- **Bibliotecas**:
  - **Lombok** (para redução de código boilerplate)
  - **Spring Boot DevTools** (para desenvolvimento mais rápido)
- **Ferramenta de Build**: Maven
- **React**

## 📂 Descrição das Pastas
- **controle:** Contém as classes responsáveis pela lógica de controle do sistema.
- **servico:** Inclui os serviços de negócios que lidam com a execução das operações principais da aplicação.
- **repositorio:** Realiza a conexão com o banco de dados e as operações de persistência de dados.
- **modelo:** Define as classes de modelo que representam os objetos principais, como clientes, produtos, etc.
- **ProjetoCrudApplication.java:** Arquivo principal que inicializa e executa a aplicação.
- **frontend/front:** Onde fica a parte do frontend feita em react.

## ▶️ Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/rayssamorei/projeto_crud.git
   ```
2. Abra o projeto no **VS Code**
3. Configure o banco de dados MySQL
4. Compile e execute o projeto:
   ```bash
   javac -d bin src/**/*.java
   java -cp bin Main
   ```
5. instale as dependecias do react com o comando:
   ```bash
   npm install
   ```
6. execute o react com o comando:
   ```bash
   npm start
   ```

## 📌 Contribuição
Contribuições são bem-vindas! Para isso:
1. Faça um **fork** do projeto
2. Crie uma **branch** com sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Envie para o repositório remoto (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

## 📜 Licença
Este projeto está licenciado sob a MIT License.

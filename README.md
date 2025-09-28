# 🛒 Vendas Backend - Sistema de E-commerce

Este é um projeto de aprendizado desenvolvido para aprofundar conhecimentos em **TypeScript** e **NestJS**. Acredito que colocar a mão na massa é a melhor forma de aprender novas tecnologias!

## 🎯 Objetivo do Projeto

Este projeto foi criado com o objetivo de:

- Aprender e praticar **TypeScript** de forma mais avançada
- Dominar o framework **NestJS** e seus conceitos
- Aplicar boas práticas de desenvolvimento backend
- Entender arquitetura de APIs REST robustas

## 📚 Sobre o Curso

Este projeto foi desenvolvido seguindo o curso de NestJS da **Udemy**, criado pelo instrutor **Júlio Souza Sena**. O curso aborda desde conceitos básicos até tópicos avançados do framework.

## 🛠️ Tecnologias Utilizadas

- **NestJS** - Framework Node.js progressivo
- **TypeScript** - Superset tipado do JavaScript
- **PostgreSQL** - Banco de dados relacional
- **TypeORM** - ORM para TypeScript
- **JWT** - Autenticação e autorização
- **Class Validator** - Validação de dados
- **Bcrypt** - Criptografia de senhas

## 🚀 Funcionalidades Implementadas

- ✅ Sistema de autenticação com JWT
- ✅ Gerenciamento de usuários (Admin/User)
- ✅ CRUD de endereços
- ✅ Sistema de permissões com Guards
- ✅ Validação de dados com decorators
- ✅ Migrations para controle do banco
- ✅ Cache para otimização de consultas

## 📁 Estrutura do Projeto

```
src/
├── auth/           # Autenticação JWT
├── user/           # Gerenciamento de usuários
├── address/        # Sistema de endereços
├── city/           # Cidades
├── state/          # Estados
├── guards/         # Guards de segurança
├── decorators/     # Decorators customizados
├── migration/      # Migrations do banco
└── utils/          # Utilitários
```

## 🔧 Como Executar

1. **Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd vendas-backend
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o banco de dados:**

- Configure as variáveis de ambiente no arquivo `.env`
- Execute as migrations: `npm run migration:run`

4. **Execute o projeto:**

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod
```

## 🎓 Aprendizados

Durante o desenvolvimento deste projeto, foi possível aprender:

- Arquitetura modular do NestJS
- Dependency Injection na prática
- Implementação de Guards e Decorators
- Validação robusta com class-validator
- Migrations e relacionamentos com TypeORM
- Boas práticas de segurança em APIs

## 📝 Notas

Este é um projeto educacional focado no aprendizado. O código pode conter comentários explicativos e diferentes abordagens para facilitar o entendimento dos conceitos.

---


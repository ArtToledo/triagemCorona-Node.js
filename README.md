# TriagemCorona - Backend
###### Backend em Node.js criado com intuito de fornecer os dados necessários para renderização do aplicativo com React Native.


-> Principais bibliotecas instaladas: Express, mongoose, e socket.io

     Express - Utilizado para a criação/inicialização do servidor afim de fornecer uma resposta através das requisições feitas; 
     
     Mongoose - Dependência utilizada para fazer a conexão e facilitar as queries feitas no banco de dados MongoDB;

     Socket.io - Criação de eventos para comunicação entre o servidor e o cliente em tempo real, utilizado para criação do chat entre "paciente" e médico (a).
     

-> Objetivo: 
     
     Integração com o banco de dados MongoDB para criação de usuários, novas mensagens e consumo dos dados;
     
     Criação de uma API capaz de fornecer todos os dados necessários em real time para utilização dos mesmos no app mobile, utilizando o padrão de projetos MVC para models para tratar a parte de banco de dados, views não sendo necessário para o projeto em si e os controllers para servir como função sempre que uma rota é chamada.
     
     Reforçar meu conhecimento em Node.js.

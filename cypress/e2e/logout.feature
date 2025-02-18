#language: pt

Funcionalidade: Logout

  Cenário: Logout bem-sucedido
    Dado que estou na página de login
    E insiro um nome de usuário "user" e senha "12345"
    E clico no botão Entrar
    Quando clico no botão Sair
    Então devo ser redirecionado para a página "/index"

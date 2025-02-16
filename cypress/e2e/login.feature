#language: pt

Funcionalidade: Login

  Cenário: Login bem-sucedido
    Dado que estou na página de login
    E eu insiro um nome de usuário válido e senha válida
    Quando clico no botão Entrar
    Então eu devo ser redirecionado para a página inicial
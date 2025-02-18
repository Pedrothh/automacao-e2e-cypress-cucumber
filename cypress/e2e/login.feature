#language: pt

Funcionalidade: Login

  Cenário: Login bem-sucedido
    Dado que estou na página de login
    E insiro um nome de usuário "user" e senha "12345"
    Quando clico no botão Entrar
    Então devo ser redirecionado para a página "/home"
    E devo visualizar a mensagem "Você fez login com sucesso."
    E devo visualizar o nome do usuário logado na mensagem de Boas Vindas

  Cenário: Login com senha inválida
    Dado que estou na página de login
    E insiro um nome de usuário "user" e senha "123456"
    Quando clico no botão Entrar
    Então não devo ser redirecionado para a página "/home"
    E devo visualizar uma mensagem de erro "Credenciais incorretas."
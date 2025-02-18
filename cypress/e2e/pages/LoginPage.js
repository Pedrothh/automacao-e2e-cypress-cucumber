import BasePage from "./BasePage";

const userNameInput = '#username'
const passwordInput = '#password'
const submitBtn = 'button[type="submit"]'
const loginSuccessfullyMessageMapping = '.home-container > p'
const loginPageUsername = '#username'
const loginFailMessageMapping = '#message'



class LoginPage extends BasePage {

  typeUserName(username) {    
    this.limparEPreencherCampo(userNameInput, username);
  }

  typePassword(password) {    
    this.limparEPreencherCampo(passwordInput, password);
  }

  pressSubmit() {    
    this.click(submitBtn);
  }

  shouldSeeTheLoginSuccessfullyMessage(loginMessage) {
    this.validarText(loginSuccessfullyMessageMapping, loginMessage);
  }

  shouldSeeTheLoginFailMessage(loginMessage) {
    this.validarText(loginFailMessageMapping, loginMessage);
  }

  shouldSeeTheLoginPageUsername(username) {
    this.validarText(loginPageUsername, username);
  }

}

export default LoginPage;
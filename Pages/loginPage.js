var SimpleCrypto = require("simple-crypto-js").default;
var _secretKey = "Alert1234"; 
var simpleCrypto = new SimpleCrypto(_secretKey);
var cipherText = '9aaf0151cb28127abf95a8c33aa61bd64a338cb97057dc379b2a65b2bbb36facldh7Ov6+aNTo/MmPYo0OFw==';

var passwordText = simpleCrypto.decrypt(cipherText);
var emailText = 'himanshudhar6@gmail.com';

var loginPage = function(){};

//var accountsAndLists = "//span[@class='nav-line-2'  and text()='Account & Lists']";
var signInSecurely = "//a[text()='Sign in securely']";
var email = "//input[@name='email']";
var password = "//input[@name='password']";
var continueButton = "//input[@type='submit']";
var login = "//input[@id='signInSubmit']";

loginPage.prototype = Object.create({},{
    accountsAndLists: {
        get: function(){
            return element(By.xpath(accountAndLists));
        }
    },
    signInSecurely: {
        get: function(){
            return element(By.xpath(signInSecurely));
        }
    },
    username: {
        get: function(){
            return element(by.xpath(email));
        }
    },
    continueButton: {
        get: function(){
            return element (by.xpath(continueButton));
        }
    },
    password: {
        get: function(){
            return element(by.xpath(password));
        }
    },
    loginButton: {
        get: function(){
            return element (by.xpath(login));
        }
    },
    clickSignInSecurely: {
        value: function(){
            webHelper.click(this.signInSecurely);
        }
    },
    enterEmail: {
        value: function(){
            webHelper.sendKeys(this.username,emailText);
        }
    },
    enterPassword: {
        value: function(){
            webHelper.sendKeys(this.password,passwordText);
        }
    },
    clickContinueButton: {
        value: function(){
            webHelper.click(this.continueButton);
        }
    },
    clickLoginButton: {
        value: function(){
            webHelper.click(this.loginButton);
        }
    }
});

module.exports = loginPage;
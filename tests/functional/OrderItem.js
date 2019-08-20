var loadModule = require('../loadModules.js');
var loadedModuleObject = new loadModule();
loadedModuleObject.loadFiles();

var EC = protractor.ExpectedConditions;

describe('Order Kindle E-Reader',function(){
    it('Login to the application',()=>{
        browser.ignoreSynchronization=true;
        browser.waitForAngularEnabled(false);
        browser.get('https://www.amazon.in/').then(()=>{
            browser.driver.manage().window().maximize();
            loginPage.clickSignInSecurely();
            loginPage.enterEmail();
            loginPage.clickContinueButton();
            loginPage.enterPassword();
            loginPage.clickLoginButton();
        });
    });

    it('Search Item', function(){
            searchPage.typeInSearchBoxElement('Amazon Kindle');
          //  searchPage.clearSearchBoxElement();
            searchPage.clickOnSearchButton();
    });

    it('Click on the item',function(){
            var toFind = itemsListPage.itemElement;
            var isVisible = webHelper.ECVisibilityOf(toFind,'Waiting to click on the item');
            //browser.wait(isVisible,2000,'Waiting to click on the item');
            itemsListPage.clickItemElement();
    });

    

    it('Select Quantity of the item', function(){
        browser.getAllWindowHandles().then((handles)=>{
            browser.switchTo().window(handles[1]).then(() => {
                itemsPage.setQuantityOfItem(2);
                });
         });
    });

    it('Add the item to the cart',function(){
            itemsPage.clickOnAddToCart;
        });
});
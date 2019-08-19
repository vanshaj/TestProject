var loadModule = require('../loadModules.js');
var loadedModuleObject = new loadModule();
loadedModuleObject.loadFiles();

var EC = protractor.ExpectedConditions;

describe('Order Kindle E-Reader',function(){
    it('Search Item', function(){
        browser.ignoreSynchronization=true;
        browser.waitForAngularEnabled(false);
        browser.get('https://www.amazon.in/').then(()=>{
            browser.driver.manage().window().maximize();
            searchPage.typeInSearchBoxElement('Amazon Kindle');
          //  searchPage.clearSearchBoxElement();
            searchPage.clickOnSearchButton();
        });
    });

    it('Click on the item',function(){
            var toFind = itemsListPage.itemElement;
            var isVisible = EC.visibilityOf(toFind);
            browser.wait(isVisible,2000,'Waiting to click on the item');
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
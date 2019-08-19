var itemsPage = function(){

};

var addToCartLocator = `//input[@id='add-to-cart-button']`;
var quantityLocator = `//select[@name='quantity']`;
var buyNowLocator = ``;

itemsPage.prototype = Object.create({},{
    addTocartItem: {
        get: function(){
            return element(by.xpath(addToCartLocator));
        }
    },
    quantityItem: {
        get: function(){
            return  element(by.xpath(quantityLocator));
        }
    },
    clickOnAddToCart: {
        get: function(){
            this.addTocartItem.click();
        }
    },
    setQuantityOfItem: {
        value: function(quantity){
            this.quantityItem.click();
            element(by.xpath(`//select[@name='quantity']/option[@value='${quantity}']`)).click();
        }
    }
});

module.exports = itemsPage;
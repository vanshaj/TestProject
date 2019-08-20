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
            webHelper.click(this.addTocartItem);
        }
    },
    setQuantityOfItem: {
        value: function(quantity){
            webHelper.click(this.quantityItem);
            element(by.xpath(`//select[@name='quantity']/option[@value='${quantity}']`)).click();
        }
    }
});

module.exports = itemsPage;
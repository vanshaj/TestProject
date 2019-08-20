//span[text()='All-New Kindle (10th Gen), 6" Display now with Built-in Light, 4 GB, Wi-Fi (Black)']

var itemsListPage = function(){};

//locators
var itemLocator = `//span[text()='All-New Kindle (10th Gen), 6" Display now with Built-in Light, 4 GB, Wi-Fi (Black)']`;

itemsListPage.prototype = Object.create({},{
    itemElement : {
      get: function() { return element(by.xpath(itemLocator)); }
    },
    clickItemElement: {
        value: function(){
            webHelper.click(this.itemElement);
            // this.itemElement.click();
        }
    }
});

module.exports = itemsListPage;
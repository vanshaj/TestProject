var searchPage = function(){

};

//locator 
var searchBox = "//input[@id = 'twotabsearchtextbox']";
var searchButton = "//input[@type = 'submit' and @class = 'nav-input']";

searchPage.prototype = Object.create({},{
    searchBoxElement: {
        get: function(){ return element(by.xpath(searchBox)); }
    },
    searchButtonElement: {
        get: function(){ return element(by.xpath(searchButton));}
    },
    typeInSearchBoxElement: {
        value: function(item){
           webHelper.sendKeys( this.searchBoxElement,item);
        }
    },
    clickOnSearchButton: {
        value: function(){
            webHelper.click(this.searchButtonElement);
        }
    },
    clearSearchBoxElement: {
        value: function(){
            this.searchBoxElement.clear();
        }
    }
});

module.exports = searchPage;
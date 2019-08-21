var Wrapper = function(){};
var maxTimeToLook = 10000;
var EC = protractor.ExpectedConditions;

Wrapper.prototype.ECVisibilityOf = (element,msg) => {
    browser.wait(EC.visibilityOf(element), maxTimeToLook, msg);
};

Wrapper.prototype.ECToBeClickable = (element, msg) => {
    browser.wait(EC.elementToBeClickable(element), maxTimeToLook, msg)
};

Wrapper.prototype.click = function(element){
    this.ECToBeClickable(element);
    element.click();
};

Wrapper.prototype.clearText = function(element){
    this.click(element);
    element.clear();
}

Wrapper.prototype.sendKeys = function(element,msg){
    this.clearText(element);
    element.sendKeys(msg);
    element.getAttribute('value').then((text)=>{
        if(!text === msg ){
            this.clearText(element);
            element.sendKeys(msg);
        }
    });
}

module.exports = Wrapper;
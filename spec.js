describe('Testing SNAP product',function(){
   // beforeEach();
    it('Login to the application',function(){
       browser.get("http://snappautomain.inqa.soti.net");
       element(by.model("login.username")).sendKeys('himanshudhar6@gmail.com');
       element(by.model("login.password")).sendKeys('Soti1234');
       element(by.xpath("//div[@class='login-frm-btn']/button[@type='submit']")).click();
       var EC = protractor.ExpectedConditions;
       var toFind = element(by.xpath("//li[@ng-repeat='item in sideBarMenu.Items']/parent::ul"));
       var isVisible = EC.visibilityOf(toFind);
       browser.wait(isVisible,5000);
    });
    it('Login to the application',function(){
      browser.get("http://snappautomain.inqa.soti.net");
   });
});
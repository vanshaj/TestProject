var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    defaultTimeoutInterval: 5000,
    allScriptsTimeout: 10000,
    specs: ['./tests/functional/OrderItem.js'],
    capabilities: {
        // chromeOptions: {
        // 	args: [ "--headless" ]
        // },
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 1			
    },
    getPageTimeout: 480000,
		allScriptsTimeout: 480000,
		rootElement: 'body',
   // specs: ['spec.js'],
    seleniumServerJar: 'C:/Users/vdhar/workspace/SnappWebConsole/Drivers/selenium-server-standalone-2.53.1.jar',
    baseUrl: 'http://snappauto.inqa.soti.net',
    chromeDriver: 'C:/Users/vdhar/workspace/SnappWebConsole/Drivers/chromedriver.exe',
    jasmineNodeOpts:{
        onComplete: null,
			isVerbose: true,
			showColors: true,
			includeStackTrace: true,
			defaultTimeoutInterval: 100000,
    },
    onPrepare: function () {

        browser.getCapabilities().then(function (cap) {
            //browser.browserName = cap.caps_.browserName + cap.get("version");;
           // name = browser.browserName;
            //global.serverName = 'snappauto.inqa.soti.net';
            global.serverName = 'snappauto.inqa.soti.net';

        });

        require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmine.JUnitXmlReporter('./xmloutput.xml', true, true)				
                );
    }
}

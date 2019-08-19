var LoadFiles = function(){};

function loadHelperModules(){
    searchPage = require('../Pages/searchPage.js');
    itemsListPage = require('../Pages/itemslistPage.js');
    itemsPage = require('../Pages/itemsPage.js')
}

function exposeModules(){
    searchPage = new searchPage();
    itemsListPage = new itemsListPage();
    itemsPage = new itemsPage();
}

LoadFiles.prototype.loadFiles = function(){
    loadHelperModules();
    exposeModules();
}

module.exports = LoadFiles;

//exports.LoadFiles = new LoadFiles();
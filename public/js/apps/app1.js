/**
 * 定义独立模块
 */
define(function () {

    function getApp() {
        var appDom = document.getElementById('app1');
        appDom.innerHTML = '<ul><li>' + navigator.appName + '</li><li>' + navigator.appVersion + '</li></ul>';
        console.info('\t app1.js getApp() executed');
    };

    return {
        getApp: getApp//将变量对外公开
    };
});



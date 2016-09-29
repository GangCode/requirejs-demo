define(['js/apps/app2'], function (app2) {//别名跟引入模块的顺序对应，最后一个引入的模块可省略别名

    function getWindowInf() {
        var content = [];
        content.push('浏览器窗口宽度：' + window.innerWidth);
        content.push('浏览器窗口高度：' + window.innerHeight);
        var html = app2.getList(content);//调用app2.js中的对外公开的函数
        $('#app2').html(html);//jquery是通过全局引入，可直接使用
        console.info('\t app3.js getWindowInf() executed');
    }
    return {
        windowInfo: getWindowInf
    };
});
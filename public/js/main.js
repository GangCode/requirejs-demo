
require.config({
    baseUrl: '',//指定js文件的基目录
    paths: {//全局引入模块【可在其他模块中使用全局引入的模块】
        'test1': 'js/apps/app1',
        'test2': 'js/apps/app3',
        'jQuery':'js/libs/jquery.3.1.0.min'
    }
});


require(['test1', 'test2','jQuery'], function (t1, t2) {//别名跟引入模块的顺序对应，最后一个引入的模块可省略别名
    console.info('main.js executed');
    t1.getApp();
    console.info('main.js executed');
    t2.windowInfo();
});


// 开启simple插件
fis.config.set('modules.postpackager', 'simple');

// 设置CSS打包规则，CSS打包的同时会进行图片合并
fis.config.set('pack', {
    '/js/compatible.js': [
        'js/focus.js',
        'js/html5.js',
    ],
    '/style/main.css': '**.css'
});


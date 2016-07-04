define(function(require, exports, module) {
    var $ = require('jquery');
    require('./jquery.color.js');

    module.exports = {
         // 处理鼠标移入移出事件
        onEnterAndLeave: function() {
            $('#profession-content').find('li').each(function(index, el) {
                var _this = $(this);

                _this.on('mouseenter', function() {
                    _this.find('span').animate({
                        backgroundColor: "#35B558",
                    }, 500, function() {
                        _this.stop();
                    });
                });

                _this.on('mouseleave', function() {
                    _this.find('span').animate({
                        backgroundColor: "#F3FFF6",
                    }, 500, function() {
                        _this.stop();
                    });
                });
            })
        },
    };
})

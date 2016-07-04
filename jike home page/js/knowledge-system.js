define(function(require, exports, module) {
    var $ = require('jquery');

    module.exports = {
         // 处理鼠标移入移出事件
        onEnterAndLeave: function() {
             $('#knowledge-content').find('li').each(function(index, el) {
                var _this = $(this);

                _this.on('mouseenter', function() {
                   _this.find('.front').css("transform", "rotateY(-180deg)");
                });

                _this.on('mouseleave', function() {
                   _this.find('.front').css("transform", "rotateY(0deg)");
                });
            })
        },
    };
})

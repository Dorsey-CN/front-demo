define(function(require, exports, module) {
    var $ = require('jquery');

    module.exports = {
        // 处理鼠标移入移出事件
        onHoverAndOut: function() {
            $('#boutique-content').find('.item-box').each(function(index, eel) {
                var _this = $(this);
                _this.on('mouseover', function() {
                    _this.find('.course-info').show();
                });

                _this.on('mouseout', function() {
                    _this.find('.course-info').hide();
                });
            });
        },
    }
})

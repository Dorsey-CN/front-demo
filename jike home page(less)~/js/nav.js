define(function(require, exports, module) {
    var $ = require('jquery');
    module.exports = {
         // 处理鼠标移入移出事件
        onHoverAndOut: function() {
            $('#nav-box').on('mouseover', function() {
                $('.seond-list-box').show();
            });

            $('#nav-box').on('mouseout', function() {
                $('.seond-list-box').hide();
            });
        },
    }
})

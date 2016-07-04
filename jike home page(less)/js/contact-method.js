define(function(require, exports, module) {
    var $ = require('jquery');

    module.exports = {
         // 处理鼠标移入移出事件
        onHoverAndOut: function() {
            $('.microblog').on('mouseover', function() {
                $(this).css("background-position-y", "-35px");
            });

            $('.microblog').on('mouseout', function() {
                $(this).css("background-position-y", "5px");
            });

            $('.post-bar').on('mouseover', function() {
                $(this).css("background-position-y", "-35px");
            });

            $('.post-bar').on('mouseout', function() {
                $(this).css("background-position-y", "5px");
            });

            $('.WeChat').on('mouseover', function() {
                $(this).css("background-position-y", "-117px");
            });

            $('.WeChat').on('mouseout', function() {
                $(this).css("background-position-y", "-77px");
            });
        }
    }
})

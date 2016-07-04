define(function(require, exports, module) {
	var $ = require('jquery');
    module.exports = {
         // 处理鼠标移入事件
        onHover: function() {
            $("#course-nav").find('li').each(function(index, el) {
                var _this = $(this);
                _this.on('mouseover', function() {
                    $("#course-recommend").children().each(function(index, el) {
                        $(this).hide();
                    });
                    $("#course-recommend").children().eq(index).show();
                });
            });

        },
    }
})

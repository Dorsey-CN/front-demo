define(function(require, exports, module) {
    var $ = require('jquery');
    var leftBtn = $('#small-focus').find('.left-btn'),
        rightBtn = $('#small-focus').find('.right-btn'),
        show = $('#small-focus').find('.show');

    module.exports = {
    	i:0,
        // 处理鼠标移入移出事件
        onHoverAndOut: function() {
            var _this = this;
            $('#small-focus').on('mouseover', function() {
                leftBtn.show();
                rightBtn.show();
            });

            $('#small-focus').on('mouseout', function() {
                leftBtn.hide();
                rightBtn.hide();
            });
        },
        //处理点击事件
        onClick: function() {
            var _this = this;
            leftBtn.on('click', function() {
                _this.rightMove();
            });

            rightBtn.on('click', function() {
                _this.leftMove();
            });
        },
        leftMove: function() {
            var value = 206;
            this.i = this.i + 1;
            if (this.i >= 4) {
                this.i = 0;
            }
            value = this.i * value;
            this.val = value;
            show.animate({
                left: "-" + value + "px"
            }, 1000);
        },
        rightMove: function() {
            var value = 206;
            if (this.i <= 0) {
                this.i = 4;
            }
            value = (this.i - 1) * value;
            this.val = value;
            show.animate({
                left: "-" + value + "px"
            }, 1000);
            this.i = this.i - 1;
        }
    }
})

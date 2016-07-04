define(function(require, exports, module) {
    var $ = require('jquery');
    var leftBtn =$('#company-list').find('.left-btn'),
        rightBtn = $('#company-list').find('.right-btn'),
        show = $('#company-list').find('.show');

    module.exports = {
    	i:0,
        // 处理鼠标移入移出事件
        onHoverAndOut: function() {
            var _this = this;
            $('#company-list').on('mouseover', function() {
                leftBtn.show();
                rightBtn.show();
            });

            $('#company-list').on('mouseout', function() {
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
            var value = 164;
            this.i = this.i + 1;
            if (this.i >= 7) {
                this.i = 0;
            }
            value = this.i * value;
            this.val = value;
            show.animate({
                left: "-" + value + "px"
            }, 1000);
        },
        rightMove: function() {
            var value = 164;
            if (this.i <= 0) {
                this.i = 7;
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

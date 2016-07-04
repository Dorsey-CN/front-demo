define(function(require, exports, module) {
    var $ = require('jquery');
    var show = $('#big-focus').find('.show'),
        leftBtn = $('#big-focus').find('.left-btn'),
        rightBtn = $('#big-focus').find('.right-btn');

    module.exports = {
        i: 0,
        val: 560,
        // 计时器开始
        start: function() {
            var _this = this;
            timer = setInterval(function() {
                _this.leftMove();
            }, 3000);
        },
        // 计时器结束
        stop: function() {
            clearInterval(timer);
            this.val = 560;
        },
        animationMove: function() {
            var _this = this;
            timer = setInterval(function() {
                _this.leftMove(560);
            }, 3000);
        },
        // 处理鼠标移入移出事件
        onHoverAndOut: function() {
            var _this = this;
            $('#big-focus').on('mouseover', function() {
                leftBtn.show();
                rightBtn.show();
                _this.stop();
            });

            $('#big-focus').on('mouseout', function() {
                leftBtn.hide();
                rightBtn.hide();
                _this.start();
            });

            leftBtn.on('mouseover',function(){
                $(this).css("background-position-y", "-60px");
            });

            leftBtn.on('mouseout',function(){
                $(this).css("background-position-y", "0px");
            });

            rightBtn.on('mouseover',function(){
                $(this).css("background-position-y", "-60px");
            });

            rightBtn.on('mouseout',function(){
                $(this).css("background-position-y", "0px");
            });
        },
        //处理点击事件
        onClick:function(){
            var _this = this;
            leftBtn.on('click',function(){
                _this.rightMove();
            });

            rightBtn.on('click',function(){
                _this.leftMove();
            });
        },
        leftMove: function() {
        	var value = 560;
            this.i = this.i + 1;
            if (this.i >= 6) {
                this.i = 0;
            }
            value = this.i * value;
            this.val = value;
            show.animate({
                left: "-" + value + "px"
            }, 1000);
        },
        rightMove: function() {
        	var value = 560;
            if (this.i <= 0) {
                this.i = 6;
            }
            value = (this.i - 1) * value;
            this.val = value;
            show.animate({
                left: "-" + value + "px"
            }, 1000);
            this.i = this.i - 1;
        }
    };
})

define(function(require, exports, module) {
    var text = "";
    var $ = require('jquery');
    module.exports = {
        // 处理获得和失去焦点事件
        onFocusAndBlur: function() {
            // 搜索框focus事件
            $('#search-input').on('focus', function() {
                text = $(this).attr('value');
                $(this).attr('value', ' ');
                $('#tags').hide();
                $('#search-btn').css({
                    "background-color": "#35B558",
                    "background-image": "url(images/search2.png)"
                });
            });

            // 搜索框blur事件
            $('#search-input').on('blur', function() {
                $(this).attr('value', text);

                $('#tags').show();
                $('#search-btn').css({
                    "background-color": "#fff",
                    "background-image": "url(images/search1.png)"
                });

                $('#search-btn').hover(
                    function() {
                        $(this).css({
                            "background-color": "#35B558",
                            "background-image": "url(images/search2.png)"
                        });
                    },
                    function() {
                        $(this).css({
                            "background-color": "#fff",
                            "background-image": "url(images/search1.png)"
                        });
                    }
                );
            });

        },
         // 处理鼠标移入移出事件
        onHoverAndOut: function() {
            $('#user-box').on('mouseover', function() {
                $('#user-menu').show();
                $('#arrow').css("transform", "rotate(180deg)"); 
            });

            $('#user-box').on('mouseout', function() {
                $('#user-menu').hide();
                $('#arrow').css("transform", "rotate(0deg)");
            });
        },
    }
})

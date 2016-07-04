define(function(require, exports, module) {
    var $ = require('jquery');

    module.exports = {
        goTop: function() {
            if ($(window).scrollTop() <= 0) {
                $(".go-top").hide();
            }

            $(window).scroll(function() {
                if ($(window).scrollTop() > 0) {
                    $(".go-top").fadeIn(500);
                } else {
                    $(".go-top").fadeOut(500);
                }
            })

            $(".go-top").click(function() {
                $('body,html').animate({ scrollTop: 0 }, 300);
            });
        }
    }
})

define(function(require, exports, module) {
    var $ = require('jquery');

    module.exports = {
        onHoverAndOut: function() {
            $('.first-book,.second-book').each(function(index, ele) {
                var _this = $(this);
                _this.on('mouseover', function() {
                    _this.find('img').css({
                        "transform": "rotateY(-20deg)"
                    });
                });

                _this.on('mouseout', function() {
                    _this.find('img').css({
                        "transform": "rotateY(0deg)"
                    });

                });
            })
        },
    }
})

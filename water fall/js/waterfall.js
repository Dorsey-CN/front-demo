$(function() {
    $(window).on('load', function() {
        waterfall();

        //存储将要加载的图片路径集合	
        var dataInt = { 'data': [{ 'src': '0.jpg' }, { 'src': '1.jpg' }, { 'src': '2.jpg' }, { 'src': '3.jpg' }] };

        $(window).on("scroll", function() {
            if (ckeckScrollSlide()) { //判断是否需要加载图片
                $(dataInt.data).each(function(index, value) {
                    var mainBox = $('#main');
                    var oPin = $('<div>').addClass('pin').appendTo($(mainBox));
                    var oBox = $('<div>').addClass('box').appendTo($(oPin));
                    $('<img>').attr('src', './images/' + $(value).attr('src')).appendTo($(oBox));
                })
                waterfall();
            }
        });

        // 浏览器窗口大小发生改变时，重新布局
        $(window).resize(function(event) {
            waterfall();
        });
    });
});

//将图片瀑布流布局的函数
function waterfall() {
    var $oPins = $('#main>div');
    var pinW = $oPins.eq(0).outerWidth(); //包裹图片最外层盒子的宽度
    var cols = Math.floor($(window).width() / pinW); //图片排列的列数
    $('#main').width(cols * pinW).css('margin', '0 auto');
    var attrH = []; //放置每一个包裹图片最外层盒子的高度

    $oPins.each(function(index, value) {
    	value.style.cssText ='';
        if (index < cols) {
            attrH.push($oPins.eq(index).outerHeight()); //排列第一行
        } else {
            var minH = Math.min.apply(null, attrH); //找出高度中的最小值
            var minHIndex = $.inArray(minH, attrH); //最小值对应的索引
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * pinW + 'px'
            });
            attrH[minHIndex] += $oPins.eq(index).outerHeight(); //改变最小值的高度
        }
    })
}

//判断是否需要加载图片的函数
function ckeckScrollSlide() {
    var lastBox = $('#main>div').last();
    var lastDis = lastBox.offset().top + Math.floor($(lastBox).outerHeight() / 3);
    var scrollUp = $(window).scrollTop();
    var height = $(window).height();
    return (lastDis < scrollUp + height) ? true : false;
}

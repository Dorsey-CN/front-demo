$(function() {
    // 利用ajax进行交互函数
    function useAjax(type, cls) {
        $.ajax({
            url: 'http://localhost:3000/back/changeType',
            dataType: 'json',
            data: {
                newstype: type
            },
            success: function(data) {
                if (type == '图片') {
                    setImgNews(data, cls);
                } else {
                    setData(data, cls);
                }
            },
            error: function() {
                alert('connet failed!');
            }
        });
    }

    // 动态生成新闻内容
    function setData(data, cls) {
        $('.' + cls).empty();
        $.each(data, function(index, ele) {
            var year = new Date(data[index].addtime).getFullYear();
            var month = new Date(data[index].addtime).getMonth() + 1;
            var day = new Date(data[index].addtime).getDate();
            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            if (index == 0) {
                var imgNews = $('<div>').addClass('img-news');
                var a = $('<a>').attr('href', '$').appendTo($(imgNews));
                $('<img>').attr('src', data[index].imgsrc).appendTo($(a));
                $('<span>').addClass('describe-text').html(data[index].title).appendTo($(a));
                $(imgNews).appendTo($('.' + cls));
            } else {
                var item = $('<div>').addClass('news-list-item clearfix');
                var imBox = $('<div>').addClass('img-box').appendTo($(item));
                $('<img>').attr('src', data[index].imgsrc).appendTo($(imBox));
                var textBox = $('<div>').addClass('text-box').appendTo($(item));
                $('<p>').addClass('news-text').html(data[index].title).appendTo($(textBox));
                $('<span>').addClass('add-time').html(year+'-'+month+'-'+day).appendTo($(textBox));
                $(item).appendTo($('.' + cls));
            }
        });
    }

    // 动态生成图片新闻内容
    function setImgNews(data, cls) {
        $('.' + cls).empty();
        $.each(data, function(index, el) {
            var imgNews = $('<div>').addClass('img-news');
            var a = $('<a>').attr('href', '$').appendTo($(imgNews));
            $('<img>').attr('src', data[index].imgsrc).appendTo($(a));
            $('<span>').addClass('describe-text').html(data[index].title).appendTo($(a));
            $(imgNews).appendTo($('.' + cls));
        });
    }

    // 改变新闻类别
    function changeType(type, cls) {
        useAjax(type, cls);
        $('.' + cls).show();
    }

    // 为切换新闻类别绑定click事件
    $('.news-nav-list').find('a').each(function(index, ele) {
        _this = $(this);
        _this.on('click', function(e) {
            e.preventDefault();
            $('.news-content').find('.box-width').children().each(function(i, e) {
                $(this).hide();
            });

            //为点击项添加active类
            $('.news-nav-list').find('li').each(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            });
            $(this).parent().addClass('active');

            changeType($(this).html(), $(this).attr('id'));
        });
    })
})

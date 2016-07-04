$(function() {
    var flag = 0,
        flag2 = 0, //用来判断当前是否处于换肤状态的数值
        src = "", //存取图片的地址
        saveSkin = "saveSkin", //存取storage的键
        storage = window.localStorage, //得到localStorage对象
        cookie = document.cookie; //得到cookie对象

    //调用判断缓存函数，以便保留缓存样式
    onStart();

    //判断是否存在缓存函数
    function onStart() {
        if (storage && storage.getItem(saveSkin) != null) {
            changeSkin(storage.getItem(saveSkin));
            flag2 = storage.getItem(flag2);
        } else if (cookie && getCookie(saveSkin) != null) {
            changeSkin(getCookie(saveSkin));
            flag2 = getCookie(flag2);
        }
    }

    //更新缓存函数
    function behindCache(s, f) {
        if (storage) {
            storage.setItem(saveSkin, s);
            storage.setItem(flag2, f);
        } else {
            setCookie(saveSkin,s,30);
            setCookie(flag2,f,30);
        }
    }

    // 清除缓存
    function cancleCache() {
        if (storage) {
            storage.clear();
        } else {
            removeCookie(saveSkin);
        }
        flag2 = 0;
    }

    function setCookie(name, value, iDay) {
        var oDate = new Date();

        oDate.setDate(oDate.getDate() + iDay);

        document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
    }

    function getCookie(name) {
        var arr = document.cookie.split('; ');
        var i = 0;
        for (i = 0; i < arr.length; i++) {
            //arr2->['username', 'abc']
            var arr2 = arr[i].split('=');

            if (arr2[0] == name) {
                var getC = decodeURIComponent(arr2[1]);
                return getC;
            }
        }

        return '';
    }

    function removeCookie(name) {
        setCookie(name, '1', -1);
    }

    //为换肤盒子设置宽度
    $('#skinBox').css("width", $(document.body).width() + 10 + "px");

    // 通过ajax的API动态的得到天气情况等信息
    $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {
        if (remote_ip_info.ret == '1') {
            $.ajax({
                type: "GET",
                url: "http://wthrcdn.etouch.cn/weather_mini?city=" + remote_ip_info.city,
                data: "",
                success: function(msg) {
                    var msg1 = JSON.parse(msg);
                    $('#show-city').text(msg1.data.city);
                    $('#show-weather').text(msg1.data.forecast[0].type);
                    $('#low_tem').text(msg1.data.forecast[0].low);
                    $('#high_tem').text(msg1.data.forecast[0].high);
                }
            });
        }
    });

    // 为消息选项添加click事件
    $('#message').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!flag) {
            $('#showMessage').show();
            flag = 1;
        } else {
            $('#showMessage').hide();
            flag = 0;
        }
    })

    // 为body绑定click事件
    $('body').on('click', function() {
        $('#showMessage').hide();
        $('#skinBox').slideUp(500);
        flag = 0;
    })

    $('#chane_skin').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('#skinBox').slideDown(500);
    })

    $('#pack_up').on('click', function(event) {
        event.stopPropagation();
        $('#skinBox').slideUp(500);
    })

    // 切换皮肤及相应样式的函数
    function changeSkin(src) {
        $('.container').css({
            "background-image": "url(" + src + ")",
            "background-repeat": "no-repeat",
            "background-size": "cover"
        });
        $('#logo').find('img').attr('src', 'images/logo_white.png');
        $('#searchArea').css("margin-top", "50px");
        $('#search_input').css({
            "border": "none",
            "background-color": "#fff",
            "height": 37 + "px",
            "background-position": "500px 16px"
        });
        $('#search_btn').addClass('gradient');
        $('#search_btn').css("color", "#000");
        $('#topBar').addClass('trans');
        $('#topBar').css("border-bottom", "none");
        $('#weather,#rightArea,#conBox').find('*').css("color", "#fff");
        $("#more_list").find('a').css("color", "#666");
        $('#treasure,#chane_skin,#message').css("color", "#fff");
        $('#contentBox').addClass('trans2');

        $('.active').css({
            "background": 'transparent',
            "background": "rgba(70, 70, 70, .1)",
            "color": "#333"
        })

        $('#active').find('em').css("background-position", "-15px 0");
        flag2 = 1;
        behindCache(src, flag2);
    }

    //去除皮肤及相应样式的函数
    function cancleSkin() {
        $('.container').css("background-image", "none");
        $('#topBar').css("border-bottom", "1px solid #e8e8e8");
        $('#search_btn').removeClass('gradient');
        $('#search_input').css({
            "border": "1px solid #B8B8B8",
            "border-right": "none",
            "background-color": "#fff",
            "height": 35 + "px",
            "background-position": "500px 14px"
        });
        $('#conBox').find('*').css("color", "#999");
        $('#weather,#rightArea').find('*').css("color", "#000");
        $('#search_btn').css("color", "#fff");
        $('#treasure,#chane_skin,#message').css("color", "#000");
        $('#topBar').removeClass('trans');
        $('#logo').find('img').attr('src', 'images/logo.png');

        $('#contentNav').find('li').css({
            "background": "rgba(255, 255, 255,1)"
        })

        $('.active').css({
            "background-color": '#B3B6BB',
            "color": "#fff"
        });

        $('#active').find('em').css("background-position", "-145px 0");

        cancleCache();
    }

    // 为不使用皮肤选项添加click事件
    $('#cancle').on('click', function() {
        cancleSkin();
    })


    $('#skinBox').on('click', function(event) {
        event.stopPropagation();
    })

    // 当鼠标滑过皮肤图片，在预览区显示相应皮肤图片
    $('#checkSkin').find('img').each(function(index, el) {
        $(this).on('mouseover', function() {
            var src = $(this).attr('src');
            $('#previewSkin').css({
                "background-image": "url(" + src + ")",
                "background-size": "100%"
            });
        })
    });

    //为每个皮肤图片添加click事件，用于换肤
    $('#checkSkin').find('img').each(function(index, el) {
        $(this).on('click', function() {
            src = $(this).attr('src');
            changeSkin(src);
        })
    });

    // //鼠标滑过更多产品选项时弹出列表框
    // $('#more_li').on('mouseover', function() {
    //     $('#more_list').show();
    //     $("#more").css({
    //         "background-color": "#F9F9F9",
    //         "color": "#666"
    //     });
    // })

    // //鼠标移出更多产品选项时隐藏列表框
    // $('#more_li').on('mouseout', function() {
    //     $('#more_list').hide();
    //     $("#more").css({
    //         "background-color": "#317EF3",
    //         "color": "#fff",
    //     })
    // })

    $('#contentNav').find('li').each(function(i, e) {
        var lis = $('#contentNav').find('li');

        //点击切换内容选项，更改内容
        $(this).on('click', function() {
            $('.content').children().each(function(index, ele) {
                $(ele).css("display", "none");
            })

            $($('.content').children()[i]).css("display", "block");

            lis.each(function(index, el) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            });

            if (flag2 == 0) {
                lis.each(function(index, el) {
                    $(this).css({
                        "background-color": '#fff',
                        "font-weight": "normal",
                        "color": "#333"
                    })
                });

                $(this).css({
                    "background": 'transparent',
                    "background": "rgba(179,182,187,1)",
                    "font-weight": "bold",
                    "color": "#fff"
                })

                // 判断当前选项卡是否为第一项，以便修改图片
                if (i != 0) {
                    $('#active').find('em').css("background-position", "-15px 0");
                } else {
                    $('#active').find('em').css("background-position", "-145px 0");
                }
            } else {
                lis.each(function(index, el) {
                    $(this).css({
                        "background": 'transparent',
                        "background": "rgba(255, 255, 255, .2)",
                        "font-weight": "normal"
                    })
                });
                $(lis[i]).css({
                    "background": "transparent",
                    "background": "rgba(70, 70, 70,.1)",
                    "font-weight": "bold"
                })
            }
            $(this).addClass('active');
        });
    });

    //为导航的每个网址添加hover事件
    $(".first_websites").find('li').hover(function() {
        var h = $(this).height();
        var w = $(this).width();
        $(this).css({
            "border": "1px solid #f0f0f0",
            "width": w - 2 + "px",
            "height": h - 2 + "px"
        })
    }, function() {
        var h = $(this).height();
        var w = $(this).width();
        $(this).css({
            "border": "none",
            "width": parseInt(w) + 2 + "px",
            "height": parseInt(h) + 2 + "px"
        })
    })
})

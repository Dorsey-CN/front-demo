/***
 *使用了单例模式,优势:
 	1、提供了对唯一实例的受控访问。
	2、由于在系统内存中只存在一个对象，因此可以节约系统资源，对于一些需要频繁创建和销毁的对象单例模式无疑可以提高系统的性能。
	3、写法更加规范，让别人看到代码一目了然。
***/
$(function() {
	/***
		init：初始化对象
		render：获得dom节点
		bind：为相应dom节点绑定事件函数
		handle：处理事件函数
	***/

	/*body*/
    var body = {
        init: function() {
            var me = this;
            me.render();
            me.bind();
        },
        render: function() {
            var me = this;
            me.body = $('body');
        },
        bind: function() {
            var me = this;
            me.body.on('click', function() {
                me.handle();
            });
        },
        handle: function() {
            $('#showMessage').hide();
            $('#skinBox').slideUp(500);
        }
    }

    /*skin*/
    var skin = {
        init: function() {
            var me = this;
            me.render();
            me.bind();
            me.handle();
            me.onStart();
        },
        onStart: function() {
            var me = this;
            me.ckeckSkin();

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

            //为换肤盒子设置宽度
            me.skinBox.css("width", $(document.body).width() + 10 + "px");
        },
        render: function() {
            var me = this;
            me.flag = 0;
            me.flag2 = 0; //用来判断当前是否处于换肤状态的数值
            me.src = ""; //存取图片的地址
            me.saveSkin = "saveSkin"; //存取storage的键
            me.storage = window.localStorage; //得到localStorage对象
            me.cookie = document.cookie; //得到cookie对象
            me.changeSkin = $('#chane_skin');
            me.packUp = $('#pack_up');
            me.cancle = $('#cancle');
            me.skinBox = $('#skinBox');
            me.checkSkin = $('#checkSkin');
            me.cancle = $('#cancle');
        },
        bind: function() {
            var me = this;
            /*点击出现换肤盒子*/
            me.changeSkin.on('click', function(event) {
                me.showBox(event);
            });

            /*点击隐藏换肤盒子*/
            me.packUp.on('click', function(event) {
                me.cancleBox(event);
            });

            me.skinBox.on('click', function(event) {
                event.stopPropagation();
            });


            me.checkSkin.find('img').each(function(index, el) {
            	/*点击图片，将图片设置为皮肤*/
                $(this).on('click', function() {
                    me.src = $(this).attr('src');
                    me.changeSkin(me.src);
                })

                /*鼠标滑过图片，预览换肤效果*/
                $(this).on('mouseover', function() {
                    var src = $(this).attr('src');
                    $('#previewSkin').css({
                        "background-image": "url(" + src + ")",
                        "background-size": "100%"
                    });
                });
            })

            /*点击取消皮肤*/
            me.cancle.on('click', function(event) {
                me.cancleSkin();
            });
        },
        handle: function() {
            var me = this;

            /*检查皮肤是否存在缓存*/
            me.ckeckSkin = function() {
                if (me.storage && me.storage.getItem(me.saveSkin) != null) {
                    me.changeSkin(me.storage.getItem(me.saveSkin));
                    me.flag2 = me.storage.getItem(me.flag2);
                } else if (me.cookie && getCookie(me.saveSkin) != null) {
                    me.changeSkin(getCookie(me.saveSkin));
                    me.flag2 = getCookie(me.flag2);
                }
            }

            /*显示皮肤盒子函数*/
            me.showBox = function(event) {
                event.preventDefault();
                event.stopPropagation();
                $('#skinBox').slideDown(500);
            }

            /*隐藏皮肤盒子函数*/
            me.cancleBox = function(event) {
                event.stopPropagation();
                $('#skinBox').slideUp(500);
            }

            /*设置缓存*/
            me.behindCache = function(s, f) {
                if (me.storage) {
                    me.storage.setItem(me.saveSkin, s);
                    me.storage.setItem(me.flag2, f);
                } else {
                    setCookie(me.saveSkin, s, 30);
                    setCookie(me.flag2, f, 30);
                }
            }

            /*取消缓存*/
            me.cancleCache = function() {
                if (me.storage) {
                    me.storage.clear();
                } else {
                    removeCookie(me.saveSkin);
                }
                me.flag2 = 0;
            }

            /*换肤函数*/
            me.changeSkin = function(src) {
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
                me.flag2 = 1;
                me.behindCache(src, me.flag2);
            }

            /*取消皮肤函数*/
            me.cancleSkin = function() {
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

                me.cancleCache();
            }
        }
    }

    /*nav*/
    var nav = {
        init: function() {
            var me = this;
            me.render();
            me.bind();
            me.handle();
        },
        render: function() {
            var me = this;
            me.contentNav = $('#contentNav');
        },
        bind: function() {
            var me = this;
            me.contentNav.on('click', function() {
                me.changeTab();
            });
        },
        handle: function() {
            var me = this;
            me.changeTab = function() {
                me.contentNav.find('li').each(function(i, e) {
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

                        /*判断当前是否使用皮肤*/
                        if (skin.flag2 == 0) {
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
                })
            }
        }
    }

    body.init();
    skin.init();
    nav.init();
})

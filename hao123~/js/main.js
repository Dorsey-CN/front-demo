window.onload = function() {
    var list = document.getElementById("nav_list"),
        navs = list.getElementsByTagName('li'),  //得到所有的导航栏li元素
        color_box = document.getElementById('color_box'),
        colors = color_box.getElementsByTagName('span'), //得到选择颜色元素
        content = document.getElementById('content'),
        active = getByClass(content, 'active'),	//得到关键字元素
        saveColor = "saveColor",	//存取storage的键
        storage = window.localStorage, //得到localStorage对象
        Cookie = document.cookie;

   	//调用判断缓存函数，以便保留缓存样式
    onStart();

    // 为currentStyle做兼容，使Firefox和Google支持此属性
    HTMLElement.prototype.__defineGetter__("currentStyle", function() {
        return this.ownerDocument.defaultView.getComputedStyle(this, null);
    });

    //判断是否存在缓存函数
    function onStart() {
    	var defaultColor = "";
        if (storage.getItem(saveColor) != null) {
            defaultColor = storage.getItem(saveColor);
        } else if (Cookie && Cookie.read(saveColor) != null) {
            defaultColor = Cookie.read(saveColor);
        }

        for (var j = 0; j < navs.length; j++) {
            navs[j].style.backgroundColor = defaultColor;
        }

        for (var k = 0; k < active.length; k++) {
            active[k].style.color = defaultColor;
        }
    }

    //更新缓存函数
    function behindHuancun(color) {
        if (storage) {
            storage.setItem(saveColor, color);
        } else {
            Cookie.write(saveColor, color);
        }
    }

    //改变颜色函数
    function changeColor(obj) {
        var select_color = obj.currentStyle.backgroundColor;

        for (var j = 0; j < navs.length; j++) {
            navs[j].style.backgroundColor = select_color;
        }

        for (var k = 0; k < active.length; k++) {
            active[k].style.color = select_color;
        }

        behindHuancun(select_color);
    }

    //为每一个选择颜色元素添加click事件
    for (var i = 0; i < colors.length; i++) {
        eventUtil.addHandler(colors[i], 'click', function() {
            var _this = this;
            changeColor(_this);
        });
    }
}

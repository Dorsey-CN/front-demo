window.onload = function() {
    var inputs = document.getElementsByTagName('input'),
        tbody = document.getElementsByTagName('tbody')[0],
        show_area = document.getElementById('show_area'), //获取计算器显示区inpu对象
        numbers = getByClass(tbody, 'numbers'), //获取所有数字按钮
        del = document.getElementById('delete'), //获取删除按钮
        clear = document.getElementById('clear'), //获取清屏按钮
        pos_nega = document.getElementById('positive_negative'), //获取改变数值正负按钮
        /*获得加减乘除按钮*/
        add = document.getElementById('add'),
        subtraction = document.getElementById('subtraction'),
        multiplication = document.getElementById('multiplication'),
        division = document.getElementById('division'),
        equals = document.getElementById('equals'), //获取等于按钮
        reciprocal = document.getElementById('reciprocal'), //获取倒数按钮
        sqrt = document.getElementById('sqrt'), //获取平方根按钮
        sin = document.getElementById('sin'), //获取正弦函数按钮
        cos = document.getElementById('cos'), //获取余弦函数按钮
        percentage = document.getElementById('percentage'), //获取百分数按钮
        symbol = "", //用于存储当前运算符号
        firstValue = "", //用于计算的第一个值
        secondValue = "", //用于计算的第二个值
        result = 0, //存放运算结果
        text = "";

    //判断是否为数字的函数
    function IsNum(e) {
        var k = window.event ? e.keyCode : e.which;
        if (((k >= 48) && (k <= 57)) || k == 8 || k == 0) {

        } else {
            if (window.event) {
                window.event.returnValue = false;
            } else {
                e.preventDefault(); //for firefox 
            }
        }
    }

    //给显示区域添加keypress事件
    eventUtil.addHandler(show_area, 'keypress', function(e) {
        IsNum(event);
    });

    //为每一个按钮添加鼠标按下和松开事件 
    for (var i = 0; i < inputs.length; i++) {
        eventUtil.addHandler(inputs[i], 'mousedown', function(e) {
            this.style.backgroundPosition = 0 + ' ' + -44 + 'px';
        });

        eventUtil.addHandler(inputs[i], 'mouseup', function() {
            this.style.backgroundPosition = 0 + ' ' + 0 + 'px';
        });
    }

    //为退格按钮添加click事件
    eventUtil.addHandler(del, 'click', function(e) {
        var deleteChar = show_area.value.substr(0, show_area.value.length - 1);

        //判断是否删除到最后一个字符
        if (deleteChar == "") {
            deleteChar = "0";
            text = "";
            firstValue = "";
        } else {
            text = deleteChar;
        }

        show_area.value = deleteChar;
    });


    //为清屏按钮添加click事件	
    eventUtil.addHandler(clear, 'click', function(e) {
        show_area.value = "0";
        text = '';
        firstValue = "";
    });

    //为数字和.按钮添加click事件
    for (var i = 0; i < numbers.length; i++) {
        eventUtil.addHandler(numbers[i], 'click', function(e) {
            //判断当前输入的字符是否大于11位
            if (show_area.value.length <= 12) {
                var _this = this; //保存当前this对象
                show_area.value = ""; //第一次点击将显示区域清空

                // 判断显示区是否存在.字符且点击的是否为正负按钮
                if (text.indexOf('.') < 0 && _this.value != "+/-") {
                    text += _this.value;
                    show_area.value = text;
                } else {
                    // 判断当前点击的是否为.按钮或者为正负按钮
                    if (_this.value == "." || _this.value == "+/-") {
                        show_area.value = text;
                    } else {
                        text += _this.value;
                        show_area.value = text;
                    }
                }
            } else {
                alert('只允许输入不大于12位的字符！');
            }
        });
    }

    //为正负按钮添加click事件
    eventUtil.addHandler(pos_nega, 'click', function(e) {
        // 判断当前显示区域是否显示为0
        if (show_area.value != "0") {
            // 判断显示区是否存在-字符
            if (text.indexOf('-') < 0) {
                show_area.value = '-' + show_area.value;
                text = '-' + text;
            } else {
                show_area.value = show_area.value.substr(1, show_area.value.length - 1);
                text = text.substr(1, text.length - 1);
            }
        } else {
            show_area.value = '0';
        }
    });

    /*加减乘除等于五个运算的函数*/
    function addMethod(first, second) {
        first = first - 0;
        second = second - 0;
        return Number((first + second).toFixed(8));
    }

    function subMethod(first, second) {
        first = first - 0;
        second = second - 0;
        return Number((first - second).toFixed(8));
    }

    function mulMethod(first, second) {
        first = first - 0;
        second = second - 0;
        return Number((first * second).toFixed(10));
    }

    function divMethod(first, second) {
    	// 判断除数是否为零
    	if(second == "0"){
    		alert('除数不能为零!');
    	}
        first = first - 0;
        second = second - 0;
        return Number((first / second).toFixed(8));
    }

    function equalMethod() {
        if (symbol == "+") {
            result = addMethod(firstValue, secondValue);
            show_area.value = result;
        } else if (symbol == "-") {
            result = subMethod(firstValue, secondValue);
            show_area.value = result;
        } else if (symbol == "*") {
            result = mulMethod(firstValue, secondValue);
            show_area.value = result;
        } else if (symbol == "/") {
            result = divMethod(firstValue, secondValue);
            show_area.value = result;
        }
        return result;
    }

    // 为加减乘除等于五个按钮添加click事件
    eventUtil.addHandler(add, 'click', function(e) {
        var res = "";
        // 判断第一次运算是否为加法
        if (firstValue != "") {
            secondValue = show_area.value;
            // 判断是否连续多次点击加按钮而没有点击数字按钮
            if (secondValue == firstValue && res == "") {
                if (symbol == "+" || symbol == "-") {
                    secondValue = "0";
                } else if (symbol == "*" || symbol == "/") {
                    secondValue = "1";
                }
            }
            res = equalMethod();
            firstValue = res;

        } else {
            firstValue = show_area.value;
        }
        text = "";
        symbol = "+";
    });

    eventUtil.addHandler(subtraction, 'click', function(e) {
        var res = "";
        // 判断第一次运算是否为减法
        if (firstValue != "") {
            secondValue = show_area.value;
            // 判断是否连续多次点击减按钮而没有点击数字按钮
            if (secondValue == firstValue && res == "") {
                 if (symbol == "+" || symbol == "-") {
                    secondValue = "0";
                } else if (symbol == "*" || symbol == "/") {
                    secondValue = "1";
                }
            }
            res = equalMethod();
            firstValue = res;

        } else {
            firstValue = show_area.value;
        }
        text = "";
        symbol = "-";
    });

    eventUtil.addHandler(multiplication, 'click', function(e) {
        var res = "";
        // 判断第一次运算是否为乘法
        if (firstValue != "") {
            secondValue = show_area.value;
            // 判断是否连续多次点击乘按钮而没有点击数字按钮
            if (secondValue == firstValue && res == "") {
            	// 判断当前运算符号
                 if (symbol == "+" || symbol == "-") {
                    secondValue = "0";
                } else if (symbol == "*" || symbol == "/") {
                    secondValue = "1";
                }
            }
            res = equalMethod();
            firstValue = res;

        } else {
            firstValue = show_area.value;
        }
        text = "";
        symbol = "*";
    });

    eventUtil.addHandler(division, 'click', function(e) {
        var res = "";
        // 判断第一次运算是否为除法
        if (firstValue != "") {
            secondValue = show_area.value;
            // 判断是否连续多次点击除按钮而没有点击数字按钮
            if (secondValue == firstValue && res == "") {
                 if (symbol == "+" || symbol == "-") {
                    secondValue = "0";
                } else if (symbol == "*" || symbol == "/") {
                    secondValue = "1";
                }
            }
            res = equalMethod();
            firstValue = res;

        } else {
            firstValue = show_area.value;
        }
        text = "";
        symbol = "/";
    });


    eventUtil.addHandler(equals, 'click', function(e) {
        secondValue = show_area.value;
        equalMethod();
        // text = show_area.value;
        text = "";
        firstValue = "";
    });

    // 为倒数按钮添加click事件
    eventUtil.addHandler(reciprocal, 'click', function(e) {
        show_area.value = Number((1 / show_area.value).toFixed(8));
        text = "";
    });

    // 为平方根按钮添加click事件
    eventUtil.addHandler(sqrt, 'click', function(e) {
        show_area.value = Number((Math.sqrt(show_area.value)).toFixed(8));
        text = "";
    });

    // 为正弦函数按钮添加click事件
    eventUtil.addHandler(sin, 'click', function(e) {
        show_area.value = Number((Math.sin(show_area.value * Math.PI/180)).toFixed(8));
        text = "";
    });

    // 为余弦函数按钮添加click事件
    eventUtil.addHandler(cos, 'click', function(e) {
        show_area.value = Number((Math.cos(show_area.value * Math.PI/180)).toFixed(8));
        text = "";
    });

    // 为百分数函数按钮添加click事件
    eventUtil.addHandler(percentage, 'click', function(e) {
        show_area.value = Number((show_area.value / 100).toFixed(8));
        text = "";
    });
}

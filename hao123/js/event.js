var eventUtil = {
    addHandler: function(element, type, handle) {
        var h = function() {　　
            return handle.apply(element, arguments);
        };
        if (element.addEventListener) {
            element.addEventListener(type, h, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, h);
        } else {
            element['on' + type] = h;
        }
    },
    getElement: function(event) {
        return event || window.event;
    }
}

// 根据类名获取元素
function getByClass(parent, cls) {
    var elements = parent.getElementsByTagName('*');
    var numbers = [];

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className === cls) {
            numbers.push(elements[i]);
        }
    }

    return numbers;
}
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

function getByClass(parent, cls) {
    var inputs = parent.getElementsByTagName('input');
    var numbers = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].className === cls) {
            numbers.push(inputs[i]);
        }
    }

    return numbers;
}

window.onload = function() {
    // 得到按钮对象
    var btn = document.getElementById('btn');

    // 为按钮绑定点击事件
    btn.onclick = function() {
        //得到两个输入框s输入的值
        var firstValue = document.getElementById('first').value,
            seondValue = document.getElementById('second').value;

        // 调用计算函数
        calculation(firstValue, seondValue);
    }

    // 计算函数
    function calculation(first, second) {
        var symbol = document.getElementById('operation_symbol').value,
            result = document.getElementById('result');
        //判断输入的值是否存在空值
        if (first != "" && second != "") {
            first = first - 0;
            second = second - 0;
            if (symbol == "+") {
                result.value = Number((first + second).toFixed(2));
            } else if (symbol == "-") {
                result.value = Number((first - second).toFixed(2));
            } else if (symbol == "*") {
                result.value = Number((first * second).toFixed(2));
            } else if (symbol == "/") {
                // 判断除数是否为零
                if (second != 0) {
                    result.value = Number((first / second).toFixed(2));
                } else {
                    alert('除数不能为0！')
                    result.value = first/second;
                }
            }
        } else {
            alert('两个计算的值都不能为空!');
        }
    }
}

window.onload = function() {
    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"],
    	count = {},  //记录字母出现的次数对象
    	pos = {},	 //记录字母出现的索引对象
    	maxValue = 0,
    	letter = "";

    // 循环遍历记录每一个元素的值和所在位置
    arr.forEach(function(element, index) {
        if (count[element]) {
            count[element] ++;
            pos[element] += "," + index;
        } else {
            count[element] = 1;
            pos[element] = "" + index;
        }
    });


    // 遍历找出出现次数最多的字母及对应次数
    for (var i in count) {
        if (count[i] > maxValue) {
            maxValue = count[i];
            letter = i;
        }
    }

    document.write('出现次数最多的字母是' + letter + ',出现的次数为' + maxValue + ',出现的位置分别为' + pos[letter]);
}

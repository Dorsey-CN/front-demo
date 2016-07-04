window.onload = function() {
    //得到button对象h和input对象
    var btn = document.getElementById('searchBtn'),
        student = document.getElementById('searchInput');

    //在点击按钮时触发事件
    btn.onclick = function() {
        //得到input中输入的值
        var grade = student.value;

        if (grade == "") {
            alert('请输入学生成绩!');
        } else {
            //使用switch循环判断该学生所属等级
            var level = 10-Math.floor(grade/10);
            alert('该生为'+ level +'等生');
            // switch (true) {
            //     case grade <= 100 && grade > 90:
            //         alert('该生为1等生');
            //         break;
            //     case grade <= 90 && grade > 80:
            //         alert('该生为2等生');
            //         break;
            //     case grade <= 80 && grade > 70:
            //         alert('该生为3等生');
            //         break;
            //     case grade <= 70 && grade > 60:
            //         alert('该生为4等生');
            //         break;
            //     case grade <= 60 && grade > 50:
            //         alert('该生为5等生');
            //         break;
            //     case grade <= 50 && grade > 40:
            //         alert('该生为6等生');
            //         break;
            //     case grade <= 40 && grade > 30:
            //         alert('该生为7等生');
            //         break;
            //     case grade <= 30 && grade > 20:
            //         alert('该生为8等生');
            //         break;
            //     case grade <= 20 && grade > 10:
            //         alert('该生为9等生');
            //         break;
            //     case grade <= 10 && grade >= 0:
            //         alert('该生为10等生');
            //         break;
            //     default:
            //         alert('该学生输入的成绩信息有误，请重新输入！');
            // }
        }
    }
}

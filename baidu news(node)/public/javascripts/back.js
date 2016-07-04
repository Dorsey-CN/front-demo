$(function() {
    var oldTitle = "";

    // 点击添加选项，重置各个值
    $('#add').on('click', function() {
        $('#myModal').find('h2').html('新闻信息添加');
        $('#news-title').val('');
        $('#img-address').val('');
        $('#add-time').val('');
    })


    // 将选择修改的一行元素，显示在修改界面
    function addValue(obj) {
        var type = obj.parent().children().eq(1).find('a').text();
        var title = obj.parent().children().eq(2).find('a').html();
        var imgaddress = obj.parent().children().eq(3).find('a').html();
        var addtime = obj.parent().children().eq(4).find('a').html();
        $('#myModal').find('h2').html('新闻信息更改');
        $('#news-type').val(type);
        $('#news-title').val(title);
        $('#img-address').val(imgaddress);
        $('#add-time').val(addtime);
        oldTitle = title;
    }

    //增加信息函数
    function insertNews(type) {
        if (confirm('确定提交？')) {
            $.ajax({
                url: 'http://localhost:3000/back/' + type,
                data: {
                    newsType: $('#news-type').val(),
                    newsTitle: $('#news-title').val(),
                    imgAddress: $('#img-address').val(),
                    addTime: $('#add-time').val()
                },
                success: function(data) {
                    alert(data);
                    if (data != '输入信息有误！' && data != '标题和图片地址不能为空，请重新输入！') {
                        window.location = 'http://localhost:3000/back';
                    }
                },
                erorr: function() {
                    alert('error');
                }
            });
        }
    }

    // 删除信息函数
    function deleteNews(obj, type) {
        if (confirm('确定删除此条记录?')) {
            $.ajax({
                url: 'http://localhost:3000/back/' + type,
                data: {
                    title: obj.parent().parent().find('td').eq(2).children().html()
                },
                success: function(data) {
                    window.location = 'http://localhost:3000/back';
                    alert(data);
                },
                erorr: function() {
                    alert('error');
                }
            });
        }
    }

    // 更改信息函数
    function updateNews(t) {
        var type = $('#news-type').val();
        var title = $('#news-title').val();
        var imgaddress = $('#img-address').val();
        var addtime = $('#add-time').val();
        if (confirm('确认修改此条记录？')) {
            $.ajax({
                url: 'http://localhost:3000/back/' + t,
                data: {
                    newsType: type,
                    newsTitle: title,
                    imgAddress: imgaddress,
                    addTime: addtime,
                    oldTitle: oldTitle
                },
                success: function(data) {
                    alert(data);
                    if (data != '输入信息有误！' && data != '标题和图片地址不能为空，请重新输入！') {
                        window.location = 'http://localhost:3000/back';
                    }
                },
                error: function() {
                    alert('connect error');
                }
            });
        }
    }

    // 利用ajax进行交互函数
    function useAjax(type) {
        $.ajax({
            url: 'http://localhost:3000/back/changeType',
            dataType: 'json',
            data: {
                newstype: type
            },
            success: function(data) {
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
                    var tr = '<tr><td><a href="#">' + (index + 1) + '</a></td>' +
                        '<td><a href="#">' + data[index].type + '</a></td>' +
                        '<td><a href="#">' + data[index].title + '</a></td>' +
                        '<td><a href="#">' + data[index].imgsrc + '</a></td>' +
                        '<td><a href="#">' + year + '-' + month + '-' + day + '</a></td>' +
                        '<td class="operation"><a href="javascript:void(0);" datas="myModal" class="update">修改/</a><a href="#" class="delete">删除</a></td></tr>';
                    $(tr).appendTo('#tb');
                });
            },
            error: function() {
                alert('connet failed!');
            }
        });
    }

    function changeType(type) {
        $('#tb').empty();
        useAjax(type);
    }

    //切换新闻类别
    $('.nav-list').find('a').each(function(index, ele) {
        $(this).hover(function() {
            $(this).css('background-color', "#666");
        }, function() {
            $(this).css('background-color', "#222");
        });

        $(this).on('click', function(e) {
            e.preventDefault();
            changeType($(this).html());
        })
    });

    //为修改选项添加click事件
    $("#tb").delegate('.update', "click", function(e) {
        e.preventDefault();
        showView($(this));
        addValue($(this).parent());
    });

    //为删除选项添加click事件
    $("#tb").delegate('.delete', "click", function(e) {
        e.preventDefault();
        deleteNews($(this), 'delete');
    });

    // 为提交按钮添加click事件
    $('#sub').on('click', function() {
        if ($('#myModal').find('h2').html() == '新闻信息添加') {
            insertNews('add');
        } else {
            updateNews('update');
        }
    });
});

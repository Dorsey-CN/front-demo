$(function() {
    getData();

    var oldTitle = "";

    // 将数据库中的值在页面显示函数
    function getData() {
        $.ajax({
            url: './php/getData.php',
            method:'get',
            dataType: 'json',
            data:{
                newsType:'推荐'
            },
            success: function(data) {
                setData(data);
            },
            error: function() {
                alert('connet failed!');
            }
        });
    }

    // 向动态添加的元素中设置相应数据库中的值函数
    function setData(data) {
        var content = [];
        var i = 1;
        var j = 0;

        // 循环动态创建tr、td元素
        $(data).each(function(index, ele) {
            var tr = $('<tr>').appendTo($('#tb'));
            for (var i = 0; i < 6; i++) {
                var td = $('<td>').appendTo($(tr));
                if (i == 5) {
                    $('<a>').attr('href', 'javascript:void(0);').addClass('update').appendTo($(td)).on('click', function(e) {
                        e.preventDefault();
                        showView($(this));
                        addValue($(this).parent());
                    });
                    $('<a>').attr('href', '#').addClass('delete').appendTo($(td)).on('click', function(e) {
                        e.preventDefault();
                        deleteNews($(this).parent());
                    });
                } else {
                    $('<a>').attr('href','#').appendTo($(td));
                }
            }
            content.push(ele.type);
            content.push(ele.title);
            content.push(ele.imgsrc);
            content.push(ele.addtime);
        });

        //为每个td设置从数据库中取出的值
        $('#tb').children().each(function(index, ele) {
            var _this = $(this);
            _this.find('td').each(function(ind, e) {
                var a = $(this).find('a');
                if (ind == 0) {
                    a.html(i);
                    i++;
                } else if (ind == 5) {
                    $(a).eq(0).html('修改/');
                    $(a).eq(1).html('删除');
                } else {
                    a.html(content[j]);
                    a.attr('title',content[j]);
                    j++;
                }
            });
        });
    }

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
    function insertNews() {
        if (confirm('确定提交？')) {
            $.ajax({
                url: './php/newsInsert.php',
                data: {
                    newsType: $('#news-type').val(),
                    newsTitle: $('#news-title').val(),
                    imgAddress: $('#img-address').val(),
                    addTime: $('#add-time').val()
                },
                success: function(res) {
                    window.location = './back.html';
                    alert('添加成功!');
                },
                erorr: function() {
                    alert('error');
                }
            });
        }
    }

    // 删除信息函数
    function deleteNews(obj) {
        if (confirm('确定删除此条记录?')) {
            $.ajax({
                url: './php/newsDelete.php',
                data: {
                    title: obj.parent().find('td').eq(2).children().html()
                },
                success: function(data) {
                    window.location = './back.html';
                    alert('删除成功!');
                },
                erorr: function() {
                    alert('error');
                }
            });
        }
    }

    // 更改信息函数
    function updateNews() {
        var type = $('#news-type').val();
        var title = $('#news-title').val();
        var imgaddress = $('#img-address').val();
        var addtime = $('#add-time').val();
        if (confirm('确认修改此条记录？')) {
            $.ajax({
                url: './php/newsUpdate.php',
                data: {
                    newsType: type,
                    newsTitle: title,
                    imgAddress: imgaddress,
                    addTime: addtime,
                    oldTitle: oldTitle
                },
                success: function() {
                    window.location = './back.html';
                    alert('修改成功！');
                },
                error: function() {
                    alert('error');
                }
            });
        }
    }

    // 为提交按钮添加click事件
    $('#sub').on('click', function() {
        if ($('#myModal').find('h2').html() == '新闻信息添加') {
            insertNews();
        } else {
            updateNews();
        }
    });

    // 利用ajax进行交互函数
    function useAjax(type) {
        $.ajax({
            url: './php/getData.php',
            method: 'get',
            dataType: 'json',
            data:{
                newsType:type
            },
            success: function(data) {
                setData(data);
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
            // alert($(this).html());
            changeType($(this).html());
        })
    });


});

$(function(){
	//为提交按钮添加click事件
	$('#sub-btn').on('click',function(){
		//获得输入的邮箱和密码
		var email = $('#email').val(),
			password = $('#password').val();

		// 利用ajax验证邮箱和密码
		$.ajax({
			url:'http://localhost:3000/loginCheck',
			data:{
				email:email,
				pwd:password
			},
			success:function(data){
				if(data == 'success'){
					window.location = 'http://localhost:3000/back';
				}else{
					alert('用户邮箱或者密码错误，请重新输入！');
				}
			},
			error:function(){
				alert('connect error!');
			}
		});
	})
})
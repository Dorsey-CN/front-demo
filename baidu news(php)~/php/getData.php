<?php
	header("Content-type:application/json;charset=utf-8");
	// header("Content-type:text/html;charset=utf-8");、

	// 引入connect.php文件
	require('./connect.php');

	// 连接数据库
	$conndb = new connDB();
	$con = $conndb->getConn();
	
	mysql_query("set names 'utf8'",$con);

	// 接收前端传来的参数
	$type =  $_REQUEST['newsType'];


	$sql = "SELECT * FROM `news` where type='$type'";
	$result = mysql_query($sql,$con);

	$arr = array();
	while($row = mysql_fetch_array($result))
	{
  		array_push($arr, array("type"=>$row['type'],"title"=>$row['title'],"imgsrc"=>$row['imgsrc'],"addtime"=>$row['addtime']));
	}
	echo json_encode($arr);

	mysql_close($con);
?>
<?php
	header("Content-type:text/html;charset=utf-8");
	require('./connect.php');

	$conndb = new connDB();
	$con = $conndb->getConn();
	
	mysql_query("set names 'utf8'",$con);

	//解决输入字符问题函数
	function cleanString($str){
		return addslashes(htmlspecialchars($str));
	}

	$newstype = cleanString($_REQUEST['newsType']);
	$newstitle = cleanString($_REQUEST['newsTitle']);
    $imgsrc = cleanString($_REQUEST['imgAddress']);
    $addtime = $_REQUEST['addTime'];
    $oldtitle = cleanString($_REQUEST['oldTitle']);

    $sql = "UPDATE `news` SET type='$newstype',title='$newstitle',imgsrc='$imgsrc',addtime='$addtime' WHERE title='$oldtitle'";

    $result = mysql_query($sql,$con);
?>
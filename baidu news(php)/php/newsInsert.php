<?php
	header("Content-type:text/html;charset=utf-8");
	require('./connect.php');

	$conndb = new connDB();
	$con = $conndb->getConn();
	
	mysql_query("set names 'utf8'",$con);

	function cleanString($str){
		return addslashes(htmlspecialchars($str));
	}

	$newstype = cleanString($_REQUEST['newsType']);
	$newstitle = cleanString($_REQUEST['newsTitle']);
    $imgsrc = cleanString($_REQUEST['imgAddress']);
    $addtime = $_REQUEST['addTime'];

    $sql = "INSERT INTO `news`(`type`, `title`, `imgsrc`, `addtime`) VALUES ('$newstype','$newstitle','$imgsrc','$addtime')";

    $result = mysql_query($sql,$con);
?>
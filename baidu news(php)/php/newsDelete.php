<?php
	header("Content-type:text/html;charset=utf-8");
	require('./connect.php');

	$conndb = new connDB();
	$con = $conndb->getConn();
	
	mysql_query("set names 'utf8'",$con);

	$title = $_REQUEST['title'];

    $sql = "DELETE FROM `news` WHERE title='$title'";

    $result = mysql_query($sql,$con);
?>
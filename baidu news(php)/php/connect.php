<?php
	header("Content-type:text/html;charset=utf-8");
	class connDB{
		public function getConn(){
			$con = mysql_connect("localhost","root","");
			if(!$con){
				die('Could not connect: ' . mysql_error());
			}
			else{
				mysql_select_db('newsdb',$con);
				return $con;
			}
		}
	}
?>
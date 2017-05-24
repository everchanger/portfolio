<?php
	if(!isset($_GET['view']) || $_GET['view'] == null) {
		$view_file_name = 'home';
	} else {
		$view_file_name = $_GET['view'];
	}

	include "view/_template.php";
?>
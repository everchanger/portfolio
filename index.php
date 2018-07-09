<?php
	$descriptions = [];
	$descriptions['home'] = "Personal portfolio of Joakim Rosenstam, a software developer currently working at Webhallen AB as a fullstack developer in Stockholm, Sweden.";
	$descriptions['cv'] = "Curriculum vitae of Joakim Rosenstam";
	$descriptions['projects'] = "Current and old projects of Joakim Rosenstam";
	$descriptions['about'] = "Some more information about me, Joakim Rosenstam";

	if(!isset($_GET['view']) || $_GET['view'] == null) {
		$view_file_name = 'home';
	} else {
		$view_file_name = $_GET['view'];
	}

	$metaDescription = $descriptions[strtolower($view_file_name)];

	include "view/_template.php";
?>
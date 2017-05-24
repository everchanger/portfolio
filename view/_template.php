<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Joakim Rosenstam</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<!-- CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/bootstrap-journal-min.css">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

		<nav class="navbar navbar-default no-margin-bottom" id='main_navbar'>
		  <div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="navbar-brand" href="?view=home">Joakim Rosenstam</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			  <ul class="nav navbar-nav">
					<li>
						<a href="?view=home">My work</a>
					</li>
					<li>
						<a href="?view=cv">CV</a>
					</li>
					<li>
						<a href="?view=about">About me</a>
					</li>
			  </ul>
				
				<ul class="nav navbar-nav navbar-right">
					<li>
							<a target="_blank" href="https://www.linkedin.com/in/jrosenstam">LinkedIn</a>
					</li>
					<li>
							<a target="_blank" href="https://www.facebook.com/joakim.rosenstam">Facebook</a>
					</li>
					<li>
							<a target="_blank" href="https://github.com/everchanger">Github</a>
					</li>
			  </ul>
			</div>
		  </div>
		</nav>
				
		<div class="container-fluid main-content">
			<!-- INCLUDE THE SELECTED VIEW! -->
			<?php include 'view/'.$view_file_name.'.php';?>
		</div>


		<!--<footer class="footer">
			<div class="container-fluid footer-content">
				<p class="text-muted">Copyright Joakim Rosenstam 2017</p>
			</div>
		</footer>-->	

		<!-- JAVASCRIPT -->
		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/bootstrap3-typeahead.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
		<script type="text/javascript" src="js/common.js"></script>
	</body>
</html>
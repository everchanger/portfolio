<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Joakim Rosenstam - Portfolio</title>
		<meta name="description" content="<?= $metaDescription ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<!-- CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<link rel="stylesheet" href="css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	</head>
	<body>
		<nav class="navbar navbar-default no-margin-bottom" id='main_navbar'>
		  <div class="container">
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
					<li class="<?= $view_file_name == 'cv' ? 'active' : '' ?>">
						<a href="?view=cv">CV</a>
					</li>
					<li class="<?= $view_file_name == 'projects' ? 'active' : '' ?>">
						<a href="?view=projects">Projects</a>
					</li>
					<li class="<?= $view_file_name == 'about' ? 'active' : '' ?>">
						<a href="?view=about">About me</a>
					</li>
				</ul>			

				<ul class="nav navbar-nav navbar-right">
					<li>
							<a target="_blank" rel="noopener" href="https://www.linkedin.com/in/jrosenstam" title="LinkedIn"><i class="fab fa-linkedin fa-lg"></i></a>
					</li>
					<li>
							<a target="_blank" rel="noopener" href="https://www.facebook.com/joakim.rosenstam" title="Facebook"><i class="fab fa-facebook fa-lg"></i></a>
					</li>
					<li>
							<a target="_blank" rel="noopener" href="https://github.com/everchanger" title="Github"><i class="fab fa-github fa-lg"></i></a>
					</li>
			  </ul>
			</div>
		  </div>
		</nav>
				
		<div class="profile">
			<div class="profile-overlay"></div>
			<div class="container container-header">
			<div class="col-xs-12 profile-content">
					<img class="img-profile img-circle" src="/images/joakim.jpg" alt="Joakim Rosenstam - Software Developer" /> 
					<div class="profile-info">
							<h1 class="profile-name">Joakim Rosenstam</h1>
							<h1 class="profile-occupation">Software Developer</h1>
					</div>
			</div>
			</div>
    </div>

		<div class="container main-content">
			<!-- INCLUDE THE SELECTED VIEW! -->
			<?php include 'view/'.$view_file_name.'.html';?>
		</div>


		<footer class="footer">
			<div class="container footer-container">
				<div class="col-xs-12">
					<a href="mailto:joakim.rosenstam@gmail.com"><i class="fa fa-envelope"></i> joakim.rosenstam@gmail.com</a>
					<a href="tel:+46732628070"><i class="fa fa-phone"></i> +46 (0)73 262 80 70</a>
				</div>
			</div>
		</footer>

		<!-- JAVASCRIPT -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
		<script type="text/javascript" src="js/common.js"></script>
	</body>
</html>
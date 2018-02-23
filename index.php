<head>
  <meta charset="utf-8"/>
  <title>Intro</title>
</head>

<body>
	<h1>Intro-To-Web-Programming</h1>
	<hr/>
	<ul>
		<?php
		$startDir = "./";
		$files = glob($startDir + "*/index.html");
		foreach($files as $file){
			$expanded = explode("/" , substr($file, strlen($startDir) + 1));
			echo ("<li><a href='" . $file . "'>". $expanded[1] . "</a></li>";
		}
		unset($file);
		?>
	</ul>
</body>
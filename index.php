<!DOCTYPE html>

<html>
<head>
    <title>Index - Craigslist x Ebay</title>
    <meta name="viewport" content="width=device-width, initial-scale=.5">
    <link type="text/css" rel="stylesheet" href="assets/libraries/bootstrap/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="assets/libraries/font-awesome/css/font-awesome.css" />    
    <link type="text/css" rel="stylesheet" href="assets/libraries/slider/css/slider.css" />
    <link type="text/css" rel="stylesheet" href="assets/css/main.css"/>
    <script src="assets/js/main.js"></script>	
</head>

<body>
    <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">MiddleMan</a>
    </div>
  
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- This is where the user's curr loc will go -->
        <li><a href="#"><h3>Rochester</h3>
		<small>(change location) </small></a></li>
        <li><a href="#"><h3>Radius</h3></a></li>
		<small>
		<ul class ="slide"><input type="text" id="foo" class="span2" value="" data-slider-min="1" data-slider-max="300" data-slider-step="1" data-slider-value="-14" data-slider-orientation="horizontal" data-slider-selection="after"data-slider-tooltip="show">
		</ul>
		</small>
		

		<li> <a href = "#"><h3>Car</h3>
		<small>MPG, Fuel </small>
		</a></li>
		<li><a href = "#"><h3> Feeds </h3></a>
		<small>
		<ul class = "subtext">
		<!-- add these dynamically -->
		<a href = "#"><i class="fa fa-times"></i></a> things <br/>
		<a class = "highlighted" href = "#"><i class="fa fa-plus"></i> add feed </a>
		</ul>
		</small>
		</li>
	  </ul>
    </div><!-- /.navbar-collapse -->
    
  </header>
    
    <div id="main">
        <input class="input" id="searchBox"></input>
        <button class="btn btn-primary" type="button" onclick="$('#list').empty(); search(document.getElementById('searchBox').value);">Get info</button>
        
        <div class="panel-group" id="accordion">
            <div id="list"></div>
        </div>
    </div>
    
    
    <script src="assets/libraries/jquery/jquery-2.0.3.min.js"></script>
    <script src="assets/libraries/bootstrap/js/bootstrap.min.js"></script>  
    <script src="assets/libraries/slider/js/bootstrap-slider.js"></script>
    <script src="assets/js/sliderFile.js"></script>
    
    <script>
        //initialize keydown search
        $("#searchBox").keyup(function(e){
                if (e.keyCode == 13) {
                    $('#list').empty();
                    search(document.getElementById('searchBox').value);
                }
            });
    </script>
    
</body>

</html>

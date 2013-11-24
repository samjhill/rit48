<?php
    echo '
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
      
      <form role="form-search text-center">
        
	<div class="input-group">
	    <input class="search-query form-control" type="search" id="searchBox" placeholder="Search products"></input>
	    <span class="btn" type="submit" onclick="$(&apos;#list&apos;).empty(); search(document.getElementById(&apos;searchBox&apos;).value);"><i class="fa fa-search"></i></span>
	</div>
  
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- This is where the user&apos;s curr loc will go -->
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
    
  </header>';
?>
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
    
    <?php include ('assets/php/header.php'); ?>
    
    <div id="main">
       <div class = "page-header"><h1>Trending</h1></div>
	  
	  <h4><i class="fa fa-refresh"></i> Highest Turnover </h4>
	  <div class ="paragraphs">
		<div class = "row">
			<div class = "span4">
			<div style="clear:both">
			<img style="float:left" src = "http://www.blogcdn.com/www.engadget.com/media/2012/09/new-ipod-touch-2012.jpg" width = "200" height= "150" alt = "..." class = "img-thumbnail">
			<p><h4>iPod<br/><small>
			(5 miles)</small></h4>
			<br/>
			<small><font color = "red"> Cost: $20</font> </small><br/>
			<font color = "green"> Profit: $90</font></p>
			</div>
			</div>
		</div>
		</div>
		 <h4><i class="fa fa-usd"></i> Highest profit ratio </h4>
	  <div class ="paragraphs">
		<div class = "row">
			<div class = "span4">
			<div style="clear:both">
			<img style="float:left" src = "http://1.bp.blogspot.com/-FiGuEMCnmII/UEB8SFlaZJI/AAAAAAAAB7o/OpPTrRTM8OY/s1600/second-hand-car-4.jpg" width = "200" height = "150"	alt = "..." class = "img-thumbnail">
			<p><h4>Used Cars<br/><small>
			(30 miles)</small></h4>
			<br/>
			<small><font color = "red"> Cost: $3500</font> </small><br/>
			<font color = "green"> Profit: $2000</font></p>
			</div>
			</div>
		</div>
		</div>
		 <h4><i class="fa fa-google-plus"></i> Popular Search </h4>
	  <div class ="paragraphs">
		<div class = "row">
			<div class = "span4">
			<div style="clear:both">
			<img style="float:left" src = "http://4.bp.blogspot.com/-ZmLCYZ_4pgk/Tza8eEljcAI/AAAAAAAAGkM/fQRaoGxQKoE/s1600/3.jpg" width = "200" height = "200"			alt = "..." class = "img-thumbnail">
			<p><h4>Xbox 360<br/><small>
			(18 miles)</small></h4>
			<br/>
			<small><font color = "red"> Cost: $100</font> </small><br/>
			<font color = "green"> Profit: $50</font></p>
			</div>
			</div>
		</div>
		</div>
		 <h4><i class="fa fa-arrow-down"></i> Lowest Cost </h4>
	  <div class ="paragraphs">
		<div class = "row">
			<div class = "span4">
			<div style="clear:both">
			<img style="float:left" src = "http://uncrate.com/p/2012/03/carbon-fiber-sunglasses-xl.jpg" width = "200" height = "150" alt = "..." class = "img-thumbnail">
			<p><h4>Sunglasses<br/><small>
			(2 miles)</small></h4>
			<br/>
			<small><font color = "red"> Cost: $2</font> </small><br/>
			<font color = "green"> Profit: $8</font></p>
			</div>
			</div>
		</div>
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

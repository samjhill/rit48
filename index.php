<!DOCTYPE html>

<html>
<head>
    <title>MiddleMan - Flip items, make cash.</title>
    <meta name="viewport" content="width=device-width, initial-scale=.5">
    <link type="text/css" rel="stylesheet" href="assets/libraries/bootstrap/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="assets/libraries/font-awesome/css/font-awesome.css" />    
    <link type="text/css" rel="stylesheet" href="assets/libraries/slider/css/slider.css" />
    <link type="text/css" rel="stylesheet" href="assets/libraries/bootstrap-checkbox/css/bootstrap-checkbox.css" />
    <link type="text/css" rel="stylesheet" href="assets/css/main.css"/>
    <script src="assets/js/main.js"></script>	
</head>

<body>
    
    <?php include ('assets/php/header.php'); ?>
    <div id="welcome">
        <?php include ('assets/php/welcome.php'); ?>
    </div>
    
    <div id="main">
        
        <div class="panel-group" id="accordion" >
            <div id="list">
                
            </div>
        </div>
    </div>
    
    
    <?php include ('assets/php/footer.php'); ?>
    
    <script src="assets/libraries/jquery/jquery-2.0.3.min.js"></script>
    <script src="assets/libraries/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/libraries/bootstrap-checkbox/js/bootstrap-checkbox.js"></script>
    <script src="assets/libraries/slider/js/bootstrap-slider.js"></script>
    <script src="assets/js/sliderFile.js"></script>
    <script src="assets/js/jquery.sparkline.js"></script>
    
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

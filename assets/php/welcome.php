<?php
    echo '
    <div id="logo-place">
        <img src="assets/img/logo.png" alt="logo" />
        <h2>MiddleMan helps you find and flip items from Craigslist to eBay for profit.</h2>
    </div>
    
    <form class="well span8">
    <div class="row">
        <div class="span3">
            <label>Zipcode:</label>
            <input type="text" class="span3 form-control" placeholder="12345">
	</div>
	<div class="">
            <label>Distance willing to travel:</label>
	    <small>
		<ul class ="slide"><input type="text" id="foo" class="span2" value="" data-slider-min="1" data-slider-max="300" data-slider-step="1" data-slider-value="-14" data-slider-orientation="horizontal" data-slider-selection="after"data-slider-tooltip="show">
		</ul>
	    </small>
	</div>
	<div class="">
	    <label>Car MPG:</label>
	    <input type="text" class="span3 form-control"  placeholder="23.4">
        </div>
        <div class="">
            <label>Gas Price:</label>
            <input type="text" class="span3 form-control" placeholder="3.45">
        </div>
    </div>
    
    <div id="feeds">
        <label>I&apos;m interested in these feeds:</label> 
        <div class="checkbox">
            <label>
            <input type="checkbox" value="">
            Antiques
            </label>
        </div>    
            <div class="checkbox">
            <label>
            <input type="checkbox" value="">
            Autos
            </label>
        </div>
                <div class="checkbox">
            <label>
            <input type="checkbox" value="">
            Clothing
            </label>
        </div>
                    <div class="checkbox">
            <label>
            <input type="checkbox" value="">
            Electronics
            </label>
        </div>
    </div>
    
    <button type="button" class="btn btn-primary" onclick="$(&apos;#welcome&apos;).hide(); showHints();">Let&apos;s go!</button>    
</form>';
?>
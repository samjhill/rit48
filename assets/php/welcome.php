<?php
    echo '<h1>Welcome to MiddleMan.</h1>
    <h2>Please input your data so that we can begin finding you money making opportunities!</h2>
    
    <form class="well span8">
    <div class="row">
        <div class="span3">
            <label>Zipcode:</label>
            <input type="text" class="span3" placeholder="#####">
	</div>
	<div class="span3">
            <label>Distance willing to travel:</label>
	    <ul class ="slide"><input type="text" id="foo" class="span2" value="" data-slider-min="1" data-slider-max="300" data-slider-step="1" data-slider-value="-14" data-slider-orientation="horizontal" data-slider-selection="after"data-slider-tooltip="show">
		</ul>
	</div>
	<div class="span3">
	    <label>Car MPG:</label>
	    <input type="text" class="span3"  placeholder="##.#">
        </div>
        <div class="span3">
            <label>Gas Price:</label>
            <input type="text" class="span3" placeholder="#.##">
        </div>
    </div>
    <label>I&apos;m interested in these feeds:</label> 
    <div class="checkbox">
	<label>
	<input type="checkbox" value="">
	Option one
	</label>
    </div>    
        <div class="checkbox">
	<label>
	<input type="checkbox" value="">
	Option two
	</label>
    </div>
	    <div class="checkbox">
	<label>
	<input type="checkbox" value="">
	Option three
	</label>
    </div>
	        <div class="checkbox">
	<label>
	<input type="checkbox" value="">
	Option four
	</label>
    </div>    
    <button type="button" class="btn btn-default">Submit</button>    
</form>';
?>
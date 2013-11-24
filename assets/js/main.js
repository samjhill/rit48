//global vars
//

var numPosts = 0;
var craigslistItems = new Array();
var ebayHighPrice = 0;
var ebayAvgPrice = 0;
var ebayLowPrice = 0;

var priceList = new Array();
var clComplete = false;
var ebayComplete = false;



function search(_query){
    //replace commas
    _query = _query.replace(/,/g,"&");
    //replace apostrophes
    _query = _query.replace(/'/g,"&");
    //replace white space with & for search awesomeness
    _query = _query.replace(/ /g,"&");
    
    findCraigslistProducts(_query);
    findEbayItem(_query);
    $('#list').append('<i id="loading" class="fa fa-spinner fa-spin" style="font-size: 36pt; color: black;"></i>');
    $('#loading').hide();
    while(ebayComplete == false){
	$('#loading').show();
    }

}

//generates a post to append to the list
//then appends it to the list
// variables:
//  _link: standard href stuff, the entire post will link here so choose carefully
//  _price: the price to purchase the item
//  _title: title of the post
function generatePost(_link, _price, _title){
    
    //console.log('generate post called');
    
    //collapse code
	$("#list").append('<ul class = "nav nav-pills nav-stacked"><li><div onclick="location.href=&apos;#collapse' + numPosts + ';&apos;" class="panel panel-default"><div class="panel-heading"> <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse' + numPosts +'">' + '$' + _price + ' - ' + _title +'</a></h4></div></li></ul>');
	
    var body = '<a href="' + _link +'">Link to Craigslist post</a>';
    body += '<p>High: $<span class="highPrice">' + ebayHighPrice + '</span></p>';
    body += '<p>Average: $<span class="avgPrice">' + ebayAvgPrice + '</span></p>';
    body += '<p>Low: $<span class="lowPrice">' + ebayLowPrice + '</span></p>';
    body += '<p>Gas expenses: $x </p>';
    body += '<p>Profit: $<span class="profit">' + _price + '</span></p>';
    

    
    body += '<p id="customresult"><span class="chart"><canvas width="62" height="18" style="display: inline-block; width: 62px; height: 18px; vertical-align: top;"></canvas></span></p>';
    
    //item body
    $("#list").append('<div id="collapse' + numPosts +'" class="panel-collapse collapse"><div class="panel-body">' + body + '</div><button class="btn" data-toggle="collapse" data-parent="#accordion" href="#collapse' + numPosts + '">Close</button></div></div>');
    
    //$("#list").append('');
                      
    numPosts++;
}

function showHints(){
     $("#list").append('<div id="hints"> ' +
        '<h1>Hey there!</h1>' +
        '<p>Start by searching for an item in the search bar above.</p>' +
        '<p>Or, check out what items are trending in your area.</p>' +
    '</div>');
}

//////
//
//   START CRAIGSLIST STUFF
//
//////
function findCraigslistProducts(search){
    $.ajax({
        type: "GET",
        url: "assets/php/proxy.php?search=" + search,
        dataType: "xml",
        success: parseXml
     });
}

function parseXml(xml) {
    //console.log(xml);
    $(xml).find("item").each(function() {
        var title = $(this).find("title").text();
        var link = $(this).find("link").text();
        //parse title down so it's not super long
        var prettyTitle = title.substr(0, title.indexOf("$"));
        //parse price out of title
        var price = title.substr(title.indexOf("$"), title.indexOf(" ") + 1);
        
        
        var priceInt = parseInt(price.substr(1));
        
        var items = new Array();
        //this will get rid of TRADE items
        if ( priceInt >= 0 ) {
            generatePost(link, priceInt, prettyTitle);
            items.push( new Object(link, priceInt, prettyTitle));
            
        }
        ////console.log(items);
        craigslistItems = items;
        clComplete = true;
        
    });
}

//////
//
//   END CRAIGSLIST STUFF
//
//////



//////
//
//   START EBAY STUFF
//
//////
function findEbayItem(search){
            
            
            
           $.ajax({
		type: "GET",
		url: "assets/php/proxyEbay.php?search=" + search,
		dataType: "xml",
		success: parseEbayXml
	     });
	     
	     
        }
	
	function parseEbayXml(xml) {
	//console.log(xml);
	
	var items = Array();
	
	var numItems = 0;
	var price = 0;
	var maxPrice = -1;
	var minPrice = 99999999;
	
	
	
	$(xml).find("item").each(function() {
	    
	    var condition =  $(this).find("conditionDisplayName").text();
	    ////console.log(condition);
	    if((condition == 'New') || (condition == 'New other (see details)') || (condition == 'Manufacturer refurbished') || (condition == 'Used')){
		
		var currentPrice = $(this).find("currentPrice").text();
		currentPrice = parseFloat(currentPrice);
		priceList.push(currentPrice);
		
		if(currentPrice > maxPrice){
		    maxPrice = currentPrice;
		}
		if(currentPrice < minPrice){
		    minPrice = currentPrice;
		}
		price += currentPrice;
		numItems++;
	    }
	});
	var avgPrice = parseFloat(price / numItems);
	var sAvgPrice = 0;
	for( var i = 0; i < 30; i++){
	    sAvgPrice += priceList[i] / 30;
	}
	
	//calculate stDev
	var stddev = 0;
	var sum = 0;
	for( var i = 0; i < 30; i++){
	    var difference = priceList[i] - sAvgPrice;
	    sum += difference * difference/30;
	}
	
	stdev = Math.pow(sum, 1/2);
	////console.log('test of difference: ' + (priceList[1] - avgPrice));
	//console.log('sum: '+ sum);
	//console.log('avg price: ' + avgPrice);
	//console.log( 'price list before culling: ' + priceList.length );
	//console.log('stdev: ' + stdev);
	//console.log('price: ' + price);
	//console.log('num: ' + numItems);
	
	var higherThanAvg = 0;
	var lowerThanAvg = 0;
	
	for(var i = 0; i < priceList.length; i++){
	    if (priceList[i] > avgPrice) {
		higherThanAvg++;
	    }
	    if (priceList[i] < avgPrice) {
		lowerThanAvg++;
	    }
	}
	//go through price list, drop lower tail of stdev
	//anything that's less than the avg-(stdev*2)
	var standardizedSum = 0;
	
	var lowerTail = avgPrice - (lowerThanAvg/(lowerThanAvg + higherThanAvg) * stdev);
	//console.log('lower tail: ' + lowerTail);
	
	for( var i = 0; i < priceList.length; i++){
	    if (priceList[i] < lowerTail) {
		//find index of item
		var index = priceList.indexOf(priceList[i]);
		//remove the item
		priceList.splice(index, 1);
	    }
	    else{
		//the number is within boundaries, keep it
		standardizedSum += priceList[i];
	    }
	}
	//console.log( 'price list after culling: ' + priceList.length );
	////console.log( 'higher than average: ' + higherThanAvg);
	////console.log( 'lower than average: ' + lowerThanAvg);
	
        ebayHighPrice = Math.max.apply(Math, priceList);
        ebayAvgPrice = standardizedSum / priceList.length;
        ebayLowPrice = Math.min.apply(Math, priceList);
        
	ebayHighPrice = Math.round(ebayHighPrice * 100) / 100;
	ebayAvgPrice = Math.round(ebayAvgPrice * 100) / 100;
	ebayLowPrice = Math.round(ebayLowPrice * 100) / 100;
	//console.log( ebayHighPrice );
	//console.log( ebayLowPrice );
	
        $('.highPrice').each(function(){
            $(this).empty();
            $(this).append(ebayHighPrice);
        });
        
        $('.avgPrice').each(function(){
            $(this).empty();
            $(this).append(ebayAvgPrice);
        });
        
        $('.lowPrice').each(function(){
            $(this).empty();
            $(this).append(ebayLowPrice);
        });
        
        $('.profit').each(function(){
            var cost = parseInt($(this).text());
	    $(this).empty();
            $(this).append(ebayAvgPrice - cost);
        });
        
        ebayComplete = true;
	
	$('.chart').each (sparkline( [ 45,68,80,93,14,35 ] , {
	    type: 'box',
	    raw: false,
	    target: ebayAvgPrice,
	    minValue: ebayLowPrice,
	    maxValue: ebayHighPrice}));
		
	////console.log('Highest price: ' + maxPrice);
	////console.log('Average price: ' + avgPrice);
	////console.log('Lowest price: ' + minPrice);
	
	////console.log(numItems);
	
	//$('#content').append('<p>Highest price: '+ maxPrice + '</p>');
	//$('#content').append('<p>Average price: '+ avgPrice + '</p>');
	//$('#content').append('<p>Lowest price: '+ minPrice + '</p>');
}
//////
//
//   END EBAY STUFF
//
//////



    

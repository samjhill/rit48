//global vars
//

var numPosts = 0;
var craigslistItems = new Array();
var ebayItem = new Array();

var clComplete = false;
var ebayComplete = false;

function search(_query){
    findCraigslistProducts(_query);
    findEbayItem(_query);
    
    if (!clComplete) {
        setTimeout(search, 200);
    }
    else{
        console.log(craigslistItems);
    }
    
    if (!ebayComplete) {
        setTimeout(search, 200);
    }
    else{
        console.log(ebayItem);
    }
    
    
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
    console.log(xml);
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
            items.push( new Object(link, priceInt, prettyTitle));
        }
        //console.log(items);
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
	console.log(xml);
	
	var numItems = 0;
	var price = 0;
	var maxPrice = 0;
	var minPrice = 99999999;
	
	$(xml).find("item").each(function() {
	    var condition =  $(this).find("conditionDisplayName").text();
	    //console.log(condition);
	    if((condition == 'New') || (condition == 'New other (see details)') || (condition == 'Manufacturer refurbished') || (condition == 'Used')){
		var currentPrice = $(this).find("currentPrice").text();
		currentPrice = parseInt(currentPrice);
		
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
	var avgPrice = price / numItems;
	
        var item = new Array();
        item.push(maxPrice);
        item.push(avgPrice);
        item.push(minPrice);
        
        ebayItem = item;
        ebayComplete = true;
	//console.log('Highest price: ' + maxPrice);
	//console.log('Average price: ' + avgPrice);
	//console.log('Lowest price: ' + minPrice);
	
	//console.log(numItems);
	
	//$('#content').append('<p>Highest price: '+ maxPrice + '</p>');
	//$('#content').append('<p>Average price: '+ avgPrice + '</p>');
	//$('#content').append('<p>Lowest price: '+ minPrice + '</p>');
//////
//
//   END EBAY STUFF
//
//////


//generates a post to append to the list
//then appends it to the list
// variables:
//  _link: standard href stuff, the entire post will link here so choose carefully
//  _price: the price to purchase the item
//  _title: title of the post
function generatePost(_link, _price, _title){
    
    //collapse code
    $("#list").append(' <div onclick="location.href=&apos;#collapse' + numPosts + ';&apos;" class="panel panel-default"><div class="panel-heading"> <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse' + numPosts +'">' + '$' + _price + ' - ' + _title +'</a></h4></div>');
    
    var body = '<a href="' + _link +'">Link to Craigslist post</a>';
    body += '<p>Ebay average price: $x </p>';
    body += '<p>Gas expenses: $x </p>';
    body += '<p>Profit: $x </p>';

    //item body
    $("#list").append('<div id="collapse' + numPosts +'" class="panel-collapse collapse"><div class="panel-body">' + body + '</div><button class="btn" data-toggle="collapse" data-parent="#accordion" href="#collapse' + numPosts + '">Close</button></div></div>');
    
    $("#list").append('');
                      
    numPosts++;
}
    
}
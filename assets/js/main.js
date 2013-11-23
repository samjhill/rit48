//global vars
//

var numPosts = 0;


$.ajax({
    type: "GET",
    url: "assets/php/proxy.php",
    dataType: "xml",
    success: parseXml
 });

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
        
        //this will get rid of TRADE items
        if ( priceInt >= 0 ) {
            generatePost(link, priceInt, prettyTitle);
        }
        
    });
}

//generates a post to append to the list
//then appends it to the list
// variables:
//  _link: standard href stuff, the entire post will link here so choose carefully
//  _price: the price to purchase the item
//  _title: title of the post
function generatePost(_link, _price, _title){
    
    //collapse code
    $("#list").append(' <div onclick="location.href="#collapse' + numPosts + ';" class="panel panel-default"><div class="panel-heading"> <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse' + numPosts +'">' + '$' + _price + ' - ' + _title +'</a></h4></div>');
    
    var body = '<a href="' + _link +'">Link to Craigslist post</a>';
    body += '<p>Ebay average price: $x </p>';
    body += '<p>Gas expenses: $x </p>';
    body += '<p>Profit: $x </p>';

    //item body
    $("#list").append('<div id="collapse' + numPosts +'" class="panel-collapse collapse"><div class="panel-body">' + body + '</div><button class="btn" data-toggle="collapse" data-parent="#accordion" href="#collapse' + numPosts + '">Close</button></div></div>');
    
    $("#list").append('');
                      
    numPosts++;
}
    

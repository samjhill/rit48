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
        var price = title.substr(title.indexOf("$"), title.indexOf(" "));
        
        
        //var priceInt = parseInt(price.substr(1));
        
        //this will get rid of TRADE items
        //if ( priceInt >= 0 ) {
            generatePost(link, price, prettyTitle);
        //}
        
    });
}

//generates a post to append to the list
//then appends it to the list
// variables:
//  _link: standard href stuff, the entire post will link here so choose carefully
//  _price: the price to purchase the item
//  _title: title of the post
function generatePost(_link, _price, _title){
    $("#list").append('<a class="postLink" href="' + _link +'"><span class="post" style="display:block;"><h3 class="title">' + _title +'</h3><p>Price: ' + _price + '</p><i class="fa fa-caret-square-o-right pull-right"></i></span></a>');
}

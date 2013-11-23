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
        title = title.substr(title.indexOf("$") + 4);
        //parse price out of title
        var price = title.substr(title.indexOf("$"), title.indexOf(" "));
        
        var priceInt = parseInt(price.substr(1));
        
        //this will get rid of TRADE items
        if ( priceInt >= 0 ) {
            generatePost(link, price, title);
        }
        
    });
}

function generatePost(_link, _price, _title){
    $("#list").append('<a href="' + _link +'"><span class="post" style="display:block;"><h3 class="title">' + _title +'</h3><p>Price: ' + _price + '</p><i class="fa fa-caret-square-o-right pull-right"></i></span></a>');
}
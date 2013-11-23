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
        //parse cost out of title, need to update it out of +4 to something dynamic
        var title = title.substr(title.indexOf("$") + 4);
        var price = '100';
        $("#list").append('<a href="' + link +'"><span style="display:block;"><h2>' + title +'</h2><p>Price: ' + price + '</p><i class="fa fa-caret-square-o-right pull-right"></i></span></a>');
    });
}
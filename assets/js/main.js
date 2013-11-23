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
        $("#list").append('<div><h2>' + title +'</h2><a href="' + link +'"><i class="fa fa-caret-square-o-right pull-right"></i></a></div>');
    });
}
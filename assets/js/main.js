$.ajax({
    type: "GET",
    url: "assets/php/proxy.php",
    dataType: "xml",
    success: parseXml
 });

function parseXml(xml) {
    console.log(xml);
    $(xml).find("item").each(function() {
        var title = $(this).find("dc:title").text();
        var link = $(this).find("link").text();
        $("#list").append('<a href="' + link +'"><span style="display:block;"><h2>' + title +'</h2><i class="fa fa-caret-square-o-right pull-right"></i></span></a>');
    });
}
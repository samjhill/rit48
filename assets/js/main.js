$.ajax({
    type: "GET",
    url: "assets/php/proxy.php",
    dataType: "xml",
    success: parseXml
 });

function parseXml(xml) {
    console.log(xml);
    $(xml).find("item").each(function() {
        var content = $(this).find("title").text()
        $("#news_list").append('<li>' + content +'</li>');
    });
}
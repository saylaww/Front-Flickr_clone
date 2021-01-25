function left() {
    // number++;
    alert("shep");

}
function print(arr) {
    // for (var i = 0; i <arr.length; i++){
        console.log(arr);
    // }
    // for (var p of arr){
    // }
}
function klik(img, data) {
    console.log(data);
    $("#rasm").attr("src", img);
    // $("#modImg").attr("src", img);
    $("#title").text(data);

    $("#myModal").modal();
}
var pImages = 20;
var page = 1;
function inc(p){

// alert(p);
    p++;
    page =p;

}

$(document).ready(function () {

    var api = "8695ccdb9f07e897a1656a1723891143";

    $("#btn").click(function () {

        $(".row").text("");
        $(".end").text("");
        // inc(page)
        // console.log(page);


var datas = {};
        var input = document.getElementById("txt").value;
        var url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key="+api+"&tags='"+input+"'&format=json&nojsoncallback=1 &per_page="+(pImages*page)+"&page="+page;
        // console.log(input);
        $.getJSON(url, function(result){
            // console.log("bas="+result);
            var end = "<button type=\"button\" onclick='inc(page)' id=\"add\" class=\"btn btn-success rounded-circle size shadow\"><b><h3>+</h3></b></button>";
            $.each(result.photos.photo, function(i, data){
                print(data);
                var nomi = data.title;
                var imgUrl = "https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg";

                imgUrl = imgUrl.replace("{farm-id}", data.farm);
                imgUrl = imgUrl.replace("{server-id}", data.server);
                imgUrl = imgUrl.replace("{id}", data.id);
                imgUrl = imgUrl.replace("{secret}", data.secret);
                // imgUrl = imgUrl.replace("{size-suffix}", "m");
                // print(data);
                datas = data;
                var imgTag= "<div onclick=\"klik('"+imgUrl+"','"+data.title+"')\" class='col-md-3'>" +
                    "<img src='"+imgUrl+"' class='img-fluid foto'>" +
                    "</div>";
                    // "<a class=\"carousel-control-prev\" id=\"left\" onclick=\"left()\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">"+
                    // "<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>" +
                    // "<span class=\"sr-only\">Previous</span>"+
                    // "</a>"+
                    // "<a class=\"carousel-control-next\" id=\"right\"  href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">"+
                    // "<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>"+
                    // "<span class=\"sr-only\">Next</span>"+
                    // "</a>";
                // ;
                // var imgTag = "<img src=\"{imgUrl}\" >"
                imgTag = imgTag.replace("{imgUrl}", imgUrl);


                $(".row").append(imgTag);
            });
            $(".end").append(end);

            $("#total").text("All images : " + result.photos.total)
        });
// print(datas);
    });

});
window.onload = function() {
  
    $.ajax({
        method: "GET",
        url: "/articles",
    }).done(function(data) {
        // console.log(data)
        renderNews(data)
    })
function renderNews(data) {
    if(data.length !== 0) {
        $("#news").empty();
        $("#news").show();
        
        data.forEach(function(result) {
            // console.log("----------------------"+JSON.stringify(result))
        var div1 = $("<div>").append(
          "<div class='card-body'>" +
          "<h2>" + result.title + "</h2>" +
          "<p> Summary : " + result.summary + "</p>" +
          "<p> <a href='" + result.link + "'>" + "Article link" + '</a>' + "</p>" +
          "</div>"
                );
                
                $("#news").append(div1);
                
                
//                 <!--<div class="card" style="width: 18rem;">-->
// <!--  <img class="card-img-top" src="..." alt="Card image cap">-->
// <!--  <div class="card-body">-->
// <!--    <h5 class="card-title">Card title</h5>-->
// <!--    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
// <!--    <a href="#" class="btn btn-primary">Go somewhere</a>-->
// <!--  </div>-->
// <!--</div>-->



$(document).on("click", "delete", function() {
  // Grab the id associated with this note  

var articleId = $(this).attr("article");
  // Run DELETE method
  $.ajax({
      method: "DELETE",
      url: "/articles/deleteAll/",
    })
    window.location.reload();
    });

        })
        
      }
    
    }

    
}
  
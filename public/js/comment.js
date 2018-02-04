
  

$("#submit").on('click', handleFormSubmit);

  // A function for handling what happens when the form to create a new user
  function handleFormSubmit(event) {

    var name = $("#name").val().trim();
    var url = $("#url").val().trim();
    var text = $("#text").val().trim();
 
    
    event.preventDefault();
  
  var newComment = {
      name: name,
      url: url,
      text: text,
     
      
  }; // submit the new user 
    submitToApi(newComment);
   
    $("#name").val("")
    $("#comments").val("")
    $("#url").val("")

   };





function submitToApi(comment) {
    console.log("about to create comment");
    $.post("/api/comments", comment, function(data, err) {
      
         console.log(JSON.stringify(data));
         console.log(JSON.stringify(err));
      if (err != "success") {
        console.log(err)
      }
      else{
      // console.log("Great Success!  " + JSON.stringify(data));
      window.location.href='/comments';
      }
      // If there's an error, handle it by throwing up an alert
    }).catch(handleErr);
  }
  
  
    function handleErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
  

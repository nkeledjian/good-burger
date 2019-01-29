// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger-devoured").on("click", function(event) {
      var id = $(this).data("id");
      console.log("id", id)
      var newDevoured = $(this).data(newDevoured);
      console.log("newDevoured", newDevoured)
      var newDevouredState = {
        devoured: newDevoured
      };
      console.log('LOG newDevour',newDevoured.devoured);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("Before devouring")
          console.log("now devouring", newDevoured);
          // Reload the page to get the updated list
          location.reload();
          console.log("After devouring");
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event(allow user to press enter key to submit burger name).
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#brgr").val().trim(),
        
        // app error - 503 error with PUT http request -  may be related to the lack of data for devoured state Could we pass in the undevoured state as a defualt here? (without having the user provide input that the burger they entered is not devoured)

        // devoured: $("[name=devoured]:checked").val(newDevoured)
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
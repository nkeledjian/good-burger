// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger-devoured").on("click", function(event) {
      var id = $(this).data("id");
      console.log("id", id)
      
      var newDevouredState = {
        devoured: true
      };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          
          // Reload the page to get the updated list
          location.reload();
          
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event(allow user to press enter key to submit burger name).
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#brgr").val().trim(),
        
        devoured: false
      };
      console.log("New Burger Created", newBurger)
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
  
$(function() {
    $("#sign-up").on("click", function(event){
        event.preventDefault();

        var newSignup = {
            firstName: $("#firstName").val().trim(),
            lastName: $("#lastName").val().trim(),
            userName: $("#userName").val().trim(),
            password: $("#password").val().trim(),
            email: $("#email").val().trim(),
            phoneNumber: $("#phoneNumber").val().trim(),
        };

        $.ajax("/api/people", {
            type: "POST",
            data: newSignup
        }).then(function(){
            console.log("Created New User");
            // $.ajax("/api/people/:id", {
            //     type: "GET",

            // })
            location.reload(); 
        });
    })
})  

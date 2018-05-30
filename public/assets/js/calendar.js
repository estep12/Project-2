$(function(){
    $("#sign-up").on("click", function(event){
        event.preventDefault();

        var newSignup = {
            firstName: $("#validationCustom01").val().trim(),
            lastName: $("#validationCustom02").val().trim(),
            username: $("#validationCustomUsername").val().trim(),
            city: $("#validationCustom03").val().trim(),
            state: $("#validationCustom04").val().trim(),
            zip: $("#validationCustom05").val().trim(),
        };

        $.ajax("/api/")
    })
})
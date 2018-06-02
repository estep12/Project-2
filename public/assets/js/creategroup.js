$(function(){
    $("#").on("click", function(event){
        event.preventDefault();

        var newGroup = {
            name: $("#").val().trim(),

        };

        console.log(newEvent);

        $.ajax("/api/events", {
            type: "POST",
            data: newGroup
        }).then(function(){
            console.log("Created New Event");
            location.reload(); 
        });
    })
})
$(function(){
    $("#createEventNow").on("click", function(event){
        event.preventDefault();

        var newEvent = {
            name: $("#validationCustom02").val().trim(),
            organizer: "1",
            location_address: $("#validationCustom03").val().trim(),
            city: $("#validationCustom05").val().trim(),
            state: $("#validationCustom04").val().trim(),
            date: $("#date-input").val().trim(),
            time: $("#time-input").val().trim(),
            description: $("#exampleFormControlTextarea1").val().trim(),
            groupId: "1"

        };

        console.log(newEvent);

        $.ajax("/api/events", {
            type: "POST",
            data: newEvent
        }).then(function(){
            console.log("Created New Event");
            location.reload(); 
        });
    })
})
$(function(){
    $("#submit-group").on("click", function(event){
        event.preventDefault();
        console.log("HI");
        

        var newGroup = {
            name: $("#groupName").val().trim(),
            admin: "1"

        };

        console.log(newGroup);

        $.ajax("/api/groups", {
            type: "POST",
            data: newGroup
        }).then(function(){
            console.log("Created New Group");
            location.reload(); 
        });
    })

    $("#delete-member").on("click", function(event){
        event.preventDefault();
        console.log("HI");
        
        
        var id = $(this).data("id")

        $.ajax("/api/groups", {
            type: "DELETE",
            data: id
        }).then(function(){
            console.log("Deleted Member");
            location.reload();
        })
    });

    $("#add-new-member").on("click", function(event){
        event.preventDefault();
        console.log("Click");
        
        var newMember = {
            name: $("#add-username").val().trim(),
            admin: "1"
        }

        console.log(newMember);
        
        $.ajax("/api/groups", {
            type: "POST",
            data: newMember
        }).then(function(){
            console.log("created new member");
            location.reload();
        })
    })
});
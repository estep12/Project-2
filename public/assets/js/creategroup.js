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

    $("#edit-member").on("click", function(event){
        event.preventDefault();
        
        var editMember = {
            
        }
    })
});
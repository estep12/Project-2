$(function(){
    $("#add-new-group").on("click", function(event){
        event.preventDefault();
        // console.log("HI");
        

        var newGroup = {
            name: $("#new-group-name").val().trim(),
            admin: "1"

        };

        console.log(newGroup);

        var body = {newGroup: newGroup, peopleIds: [1,6]}

        $.ajax("/api/groups", {
            type: "POST",
            data: newGroup
        }).then(function(data){
            console.log("Created New Group");
            $("body").text(data)
            // location.reload(); 
        });
    })

    $("#delete-member").on("click", function(event){
        event.preventDefault();
        // console.log("HI");
        
        
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
        // console.log("Click");
        
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
            // location.reload();
        })
    })
}); 
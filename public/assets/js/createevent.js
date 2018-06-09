$(function () {
  var groupSelect = $("#group");
  var nameInput = $("#validationCustom02");
  var organizerInput = "1";
  var location_addressInput = $("#validationCustom03");
  var cityInput = $("#validationCustom05");
  var stateInput = $("#validationCustom04");
  var dateInput = $("#date-input");
  var timeInput = $("#time-input");
  var descriptionInput = $("#exampleFormControlTextarea1");
  var createeventForm = $("#createevent")

  $("#createevent").on("submit", handleFormSubmit);

  var url = window.location.search;
  var peopleId;
  var groupId;
  var updating = false;



  getGroups();

  function handleFormSubmit(event) {
    event.preventDefault();


    if (!groupSelect.val()) {
      return;
    }
    var newEvent = {
      name: nameInput.val().trim(),
      organizer: organizerInput,
      location_address: location_addressInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      date: dateInput.val().trim(),
      time: timeInput.val().trim(),
      description: descriptionInput.val().trim(),
      GroupId: groupSelect.val()
    };

    console.log(newEvent);

    if (updating) {
      newEvent.id = eventId;
      updateEvent(newEvent);
    }
    else {
      submitEvent(newEvent);
    }

    function submitEvent(event) {
      $.ajax("/api/events", {
        type: "POST",
        data: newEvent
      }).then(function () {
        console.log("Created New Event");
        window.location.href = "/";
      });
    }
  }



  function getEventData(id, name) {
    var queryURL;
    switch (name) {
      case "event":
        queryURL = "/api/events" + id;
        break;
      case "group":
        queryURL = "/api/groups/" + id;
        break;
      default:
        return;
    }
    $.get(queryURL, function (data) {
      if (data) {
        console.log(data.peopleId || data.id);
        nameInput.val(data.name);
        groupId = data.groupId || data.id;

        updating = true;
      }
    });
  }

  //these three functions create option elements in select group dropdown
  function getGroups() {
    $.get("/api/groups", renderGroupList);
  }

  function renderGroupList(data) {
    if (!data.length) {
      window.location.href = "/createGroup"
    }
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createGroupRow(data[i]))
    }
    groupSelect.empty();
    console.log(rowsToAdd);
    console.log(groupSelect);
    groupSelect.append(rowsToAdd);
    groupSelect.val(groupId)
  }

  function createGroupRow(group) {
    var listOption = $("<option>");
    listOption.attr("value", group.id);
    listOption.text(group.name);
    return listOption
  }


  // console.log(newEvent);
  function updateEvent(event) {
    $.ajax({
      method: "PUT",
      url: "/api/events",
      data: event
    })
      .then(function () {
        window.location.href = "/";
      })


  }
})


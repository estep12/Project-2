
$(function () {
  $("#sign-up").on("click", function (event) {
    event.preventDefault();

    let newSignup = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      userName: $("#userName").val().trim(),
      password: $("#password").val().trim(),
      email: $("#email").val().trim(),
      phoneNumber: $("#phoneNumber").val().trim(),
    };

    $.ajax("/api/people", {
      type: "POST",
      data: newSignup,
    });

    // $.ajax("/signup", {
    //   type: "POST",
    //   data: newSignup,
    // }).then(function () {
    //   // why does the following console log only show up if a username is submitted that already exists?? Page is refreshed before getting the AJAX response...
    //   console.log("Created New User");
    //   // location.reload();
    // });
  });
});

$(function () {
  $("#login").on("click", function (event) {
    event.preventDefault();

    let newLogin = {
      userName: $("#userNameLogin").val().trim(),
      password: $("#passwordLogin").val().trim(),
    };

    $.ajax("/login", {
      type: "POST",
      data: newLogin,
    });
  });
});


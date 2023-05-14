
$("#registrierungForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    console.log(form.serialize());
    postAjax(form);
});

$("#loginForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    console.log(form.serialize());
    postAjax(form);
});

function postAjax(form) {
    $.ajax({
        url: "../../backend/service_handler.php",
        type: "POST",
        data: form.serialize(),
        success: function(data) {
            if(data === "Email already exists") {
                alert("Email already exists");
            } else if(data === "Account not activated") {
                alert("Account not activated");
            } else if(data === "Wrong password") {
                alert("Wrong password");
            } else if (data === "Wrong email") {
                alert("Wrong email");
            } else if(data === "NULL") {
                alert("Bitte füllen Sie alle Felder aus!");
            } else {
                console.log(data);
                setCookie(data[0]);
                //$("form :input").val("");
                //window.location = "homepage.html";
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

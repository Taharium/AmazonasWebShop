
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
            console.log(data);
            if(data === "Email already exists") {
                alert("Email already exists");
            } else if(data !== "NULL") {
                //$("form :input").val("");
                window.location = "homepage.html";
            } else {
                alert("Bitte füllen Sie alle Felder aus!");
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}


$("#registrierungForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    console.log(form.serialize());
    postAjax(form, "registrierung");

});

$("#loginForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    console.log(form.serialize());
    postAjax(form, "login");

});

function postAjax(form, type) {
    $.ajax({
        url: "../public/service_handler.php",
        type: "POST",
        data: form.serialize(),
        success: function(data) {
            console.log(data);
            if(data !== "NULL") {
                if (type === "login") {
                    $("#loginForm :input").val("");
                    window.location = "homepage.html";
                } else if (type === "registrierung") {
                    $("#registrierungForm :input").val("");
                    window.location = "homepage.html";
                }
            } else {
                alert("Bitte füllen Sie alle Felder aus!");
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}


$("#registrierungForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    console.log(form.serialize());
    $.ajax({
        url: "../public/service_handler.php",
        type: "POST",
        data: form.serialize(),
        success: function (data) {
            console.log(data);
            if (data === "Success") {
                $('#registrierungForm :input').val('');
                window.location = "homepage.html";
            } else {
                alert("Bitte füllen Sie alle Felder aus!");
            }
        },
        error: function () {
            alert("Fehler");
        }
    });
});
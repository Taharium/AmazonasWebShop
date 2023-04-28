
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
            $('#registrierungForm :input').val('');
            window.location = "homepage.html";
        },
        error: function () {
            alert("Fehler");
        }
    });
});
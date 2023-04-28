
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
        },
        error: function () {
            alert("Fehler");
        }
    });
});
$("#paymentform").on("submit", function (event) {
    event.preventDefault();
    let form = $(this);
    paymentIntoDatabase(form.serialize());
    //const date = new Date(); can you make object with form.serialize() and date?
});

function paymentIntoDatabase(param) {
    $.ajax({
        type: "POST",
        url: "../../backend/service_handler.php",
        cache: false,
        data: {method: "paymentIntoDatabase", param: param},
        dataType: "json",
        success: function (response) {
            
        },
        error: function (error) {
            console.log(error);
        }
    })
}
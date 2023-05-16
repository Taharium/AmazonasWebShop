
$("#registrierungForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    console.log(form.serialize());
    postAjax("POST",form.serialize());
});

$("#loginForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    console.log(form.serialize());
    postAjax("POST",form.serialize());
});

function postAjax(type, param) {
    let errorReg = $("#errorReg");
    let errorLogin = $("#errorLogin");
    errorReg.text("");
    errorLogin.text("");

    $.ajax({
        type: type,
        url: "../../backend/service_handler.php",
        cache: false,
        data: param,
        dataType: "json",
        success: function(data) {
            if(data === "Email already exists") {
                errorReg.text("Email already exists!");
            } else if(data === "Account not activated") {
                errorLogin.text("Account not activated!");
            } else if(data === "Wrong password") {
                errorLogin.text("Wrong password!");
            } else if (data === "Wrong email") {
                errorLogin.text("Wrong email!");
            } else if(data === "NULL") {
                errorReg.text("Bitte füllen Sie alle Felder aus!");
            } else if(data === "Not found") {
                errorLogin.text("Account not found! Please register first!");
            } else {
                console.log(data);
                setCookie(data[0]);
                //$("form :input").val("");
                setTimeout(function(){
                    window.location = "login-successful.html"
                }, 250)
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

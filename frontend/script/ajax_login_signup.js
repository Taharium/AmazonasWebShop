
$("#registrierungForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    callAjax("POST",form.serialize(), "registerUser");
});

$("#loginForm").on("submit", function(event) {
    event.preventDefault();
    let form = $(this);
    callAjax("POST",form.serialize(), "login");
});

function callAjax(type, param, method) {
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
            switch (method) {
                case "login":
                    if(data === "Account not activated") {
                        errorLogin.text("Account not activated!");
                    } else if(data === "Wrong password") {
                        errorLogin.text("Wrong password!");
                    } else if (data === "Wrong email") {
                        errorLogin.text("Wrong email!");
                    } else if(data === "Not found") {
                        errorLogin.text("Account not found! Please register first!");
                    } else {
                        setCookie(data[0]);
                        setTimeout(function(){
                            window.location = "login-successful.html"
                        }, 250)
                    }
                    break;
                case "registerUser":
                    if(data === "Email already exists") {
                        errorReg.text("Email already exists!");
                    } else {
                        setTimeout(function(){
                            window.location = "registration-successful.html"
                        }, 250)
                    }
                    break;
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}



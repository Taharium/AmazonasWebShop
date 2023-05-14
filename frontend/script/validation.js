$("head").load("../inc/head.html")
$("body").prepend("<div id='navbar'></div>")
$("#navbar").load("../inc/navbar.html")
$("body").append("<div id='footer'></div>")
$('#footer').load("../inc/footer.html")

// Validate password on registration and password confirmation
$("#password, #confpassword").on("input", function (){
    let password = $("#password").val()
    let confirmPassword = $("#confpassword")
    if(password.length < 8){
        confirmPassword.get(0).setCustomValidity("Passwörter müssen mindestens 8 Zeichen lang sein");
    } else if (password !== confirmPassword.val()) {
        confirmPassword.get(0).setCustomValidity("Passwörter stimmen nicht überein!");
    } else {
        confirmPassword.get(0).setCustomValidity('');
    }
});

// Validate password on login
$("#passwordLogin").on("input", function (){
    let password = $("#passwordLogin")
    if(password.val().length < 8){
        password.get(0).setCustomValidity("Passwörter müssen mindestens 8 Zeichen lang sein")
    } else {
        password.get(0).setCustomValidity('');
    }
});

// Validate street on registration
$("#street").on("input", function (){
    let street = $("#street").val()

    if(street.length > 0 && !/^[a-zA-ZßöäüÖÄÜ]+$/.test(street)){
        $("#street").get(0).setCustomValidity("Straße darf nur aus Buchstaben bestehen")
    } else {
        $("#street").get(0).setCustomValidity('')
    }
});

// Validate housenumber, doornumber and postalcode on registration
$("#housenumber, #doornumber, #postalcode").on("input", function (){
    let housenumber = $("#housenumber").val()
    let doornumber = $("#doornumber").val()
    let postalcode = $("#postalcode").val()

    if(housenumber.length > 0 && !$.isNumeric(housenumber)){
        $("#housenumber").get(0).setCustomValidity("Hausnummer darf nur aus Zahlen bestehen")
    } else {
        $("#housenumber").get(0).setCustomValidity('')
    }

    if(doornumber.length > 0 && !$.isNumeric(doornumber)){
        $("#doornumber").get(0).setCustomValidity("Türnummer darf nur aus Zahlen bestehen")
    } else {
        $("#doornumber").get(0).setCustomValidity('')
    }

    if(postalcode.length > 0 && !$.isNumeric(postalcode)){
        $("#postalcode").get(0).setCustomValidity("Postleitzahl darf nur aus Zahlen bestehen")
    } else {
        $("#postalcode").get(0).setCustomValidity('')
    }
});

// Validate firstname, lastname on registration
$("#firstname, #lastname").on("input", function (){
    let firstname = $("#firstname").val()
    let lastname = $("#lastname").val()

    if(firstname.length > 0 && !/^[a-zA-Z]+$/.test(firstname)){
        $("#firstname").get(0).setCustomValidity("Vorname darf nur aus Buchstaben bestehen")
    } else {
        $("#firstname").get(0).setCustomValidity('')
    }

    if(lastname.length > 0 && !/^[a-zA-Z]+$/.test(lastname)){
        $("#lastname").get(0).setCustomValidity("Nachname darf nur aus Buchstaben bestehen")
    } else {
        $("#lastname").get(0).setCustomValidity('')
    }
});

// Validate city on registration
$("#city").on("input", function (){
    let city = $("#city").val()

    if(city.length > 0 && !/^[a-zA-Z]+$/.test(city)){
        $("#city").get(0).setCustomValidity("Stadt darf nur aus Buchstaben bestehen")
    } else {
        $("#city").get(0).setCustomValidity('')
    }
});


// Validate email on registration and login
function validateEmail(email) {
    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (email.length > 0 && emailReg.test(email));
}

$('#email').on('input', function (){
    const email = $('#email');

    let bool = validateEmail(email.val());

    if(bool) {
        email.get(0).setCustomValidity("")
    } else {
        email.get(0).setCustomValidity('Keine gültige Email-Adresse');
        setLoginCookie(email.val());
    }
});

$('#emailLogin').on('input', function (){
    const email = $('#emailLogin');

    let bool = validateEmail(email.val());

    if(bool)  {
        email.get(0).setCustomValidity("")
    } else {
        email.get(0).setCustomValidity('Keine gültige Email-Adresse');
    }
});

function setLoginCookie(username) {
    // Set the cookie expiration date to one day from now
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    // Create the cookie string with the username and expiration date
    var cookieValue = "username=" + username + ";expires=" + expirationDate.toUTCString();

    // Set the cookie
    document.cookie = cookieValue;
}
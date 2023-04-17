$("head").load("../inc/head.html")
$("body").prepend("<div id='header'></div>")
$("#header").load("../inc/navbar.html")
$("body").append("<div id='footer'></div>")
$('#footer').load("../inc/footer.html")

$("#password, #confpassword").on("input", function (){
    let password = $("#password").val()
    let confirmPassword = $("#confpassword")
    if(password.length < 8){
        confirmPassword.get(0).setCustomValidity("Passwörter müssen mindestens 8 Zeichen lang sein")
    } else if (password !== confirmPassword.val()) {
        confirmPassword.get(0).setCustomValidity("Passwörter stimmen nicht überein!");
    } else {
        confirmPassword.get(0).setCustomValidity('');
    }
})

$("#passwordLogin").on("input", function (){
    let password = $("#passwordLogin")
    if(password.val().length < 8){
        password.get(0).setCustomValidity("Passwörter müssen mindestens 8 Zeichen lang sein")
    } else {
        password.get(0).setCustomValidity('');
    }
});

function validateEmail(email) {
    console.log(email)
    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (email.length > 0 && emailReg.test(email));
}

$('#email').on('input', function (){
    const email = $('#email');

    let bool = validateEmail(email.val())
    console.log(bool)
    if(bool) {
        email.get(0).setCustomValidity("")
    } else {
        email.get(0).setCustomValidity('Keine gültige Email-Adresse');
    }

});

$('#emailLogin').on('input', function (){
    const email = $('#emailLogin');

    let bool = validateEmail(email.val())
    console.log(bool)
    if(bool)  {
        email.get(0).setCustomValidity("")
    } else {
        email.get(0).setCustomValidity('Keine gültige Email-Adresse');
    }
});


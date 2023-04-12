$("head").load("../inc/head.html")
$("body").prepend("<div id='header'></div>")
$("#header").load("../inc/navbar.html")
$("body").append("<div id='footer'></div>")
$('#footer').load("../inc/footer.html")

function confirmPassword(pwId, confId) {
    // checks if password is correct
    let password = document.getElementById(pwId);
    let confirmPassword = document.getElementById(confId);

    if(confirmPassword.value.length < 8) {
        confirmPassword.setCustomValidity("Passwörter müssen mindestens 8 Zeichen lang sein");
    } else if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwörter stimmen nicht überein!");
    } else {
        confirmPassword.setCustomValidity('');
    }
}
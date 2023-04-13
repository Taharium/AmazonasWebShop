$("head").load("../inc/head.html")
$("body").prepend("<div id='header'></div>")
$("#header").load("../inc/navbar.html")
$("body").append("<div id='footer'></div>")
$('#footer').load("../inc/footer.html")

$("#password, #confpassword").on("change", function (){
    console.log("hello")
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

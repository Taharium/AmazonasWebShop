/*
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(document.cookie);
}
*/

function setCookie(username) {
    // Set the cookie expiration date to one day from now
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    // Create the cookie string with the username and expiration date
    // Set the cookie
    document.cookie = "username=" + username + ";expires=" + expirationDate.toUTCString();
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user !== "") {
        //alert("Welcome again " + user);
        return true;
    } else {
        //alert("Please log in");
        return false;
    }
}

function deleteCookie(cname) {
    document.cookie = cname + '=; Max-Age=0'
}

function cookies() {
    //$("#navLogout").show();
    if(checkCookie()){
        $("#navLogout").show();
        $("#navAccount").show();
        $("#navBasket").show();
        $("#navReg").hide();
        $("#navLogin").hide();
        $("#navOrders").show();
        console.log("Cookie is set");
    } else {
        $("#navLogout").hide();
        $("#navAccount").hide();
        $("#navBasket").hide();
        $("#navOrders").hide();
        $("#navReg").show();
        $("#navLogin").show();
        console.log("Cookie is not set");
        console.log($("#navLogout").is(":visible"));
    }
}
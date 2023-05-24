loadDetails();

function loadDetails(){
    console.log("loadDetails");
    if (!checkCookie()){
        $("#account_details").hide();
        console.log("no cookie");
    }
    else{
        let param= getCookie("username");
        let method = "getAccountDetails";
        $.ajax({
            type: "GET",
            url: "../../backend/service_handler.php",
            cache: false,
            data: { method: method, param: param },
            dataType: "json",
            success: function(response) {
                console.log(response);
                console.log(response[0]);
                $("#first_name").text(response[1]);
                $("#last_name").text(response[2]);
                $("#email").text(response[0]);
                $("#street").text(response[5]);
                $("#housenumber").text(response[6]);
                $("#doornumber").text(response[7]);
                $("#postalcode").text(response[4]);
                $("#city").text(response[3]);
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
}

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
                $("#first_name").val(response[1]);
                $("#last_name").val(response[2]);
                $("#email").val(response[0]);
                $("#street").val(response[5]);
                $("#housenumber").val(response[6]);
                $("#doornumber").val(response[7]);
                $("#postalcode").val(response[4]);
                $("#city").val(response[3]);
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
}

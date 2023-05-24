function loadDetails(){
    console.log("loadDetails");
    if (!checkCookie()){
        $("#account_details").hide();
        console.log("no cookie");
    }
    else{
        let param= "";
        let method = "getAccountDetails";
        $.ajax({
            type: "GET",
            url: "../../backend/service_handler.php",
            cache: false,
            data: { method: method, param: param },
            dataType: "json",
            success: function(response) {
                console.log(response);
                $("#first_name").text(response[0].firstname);
                $("#last_name").text(response[0].lastname);
                $("#email").text(response[0].email);
                $("#street").text(response[0].street);
                $("#housenumber").text(response[0].housenumber);
                $("#doornumber").text(response[0].doornumber);
                $("#postalcode").text(response[0].postalcode);
                $("#city").text(response[0].city);
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
}

loadOrders();

function loadOrders() {
    console.log("loadOrders");
    if (!checkCookie()) {
        $("#orders").hide();
        console.log("no cookie");
    } else {
        let param = getCookie("username");
        let method = "getOrders";
        $.ajax({
            type: "GET",
            url: "../../backend/service_handler.php",
            cache: false,
            data: { method: method, param: param },
            dataType: "json",
            success: function (response) {
                console.log(response);
                if (response !== "No orders") {
                    $.each(response, function (index, value) {
                        $("#orders").append('<div class="m-3 p-2 pb-3 cardBody backgroundWS">' +
                        '<div class="d-flex justify-content-center"><span class="h4">'+value[4] + ' ' + value[2]+'€ Anzahl: '+ value[1] +'</span></div>'  +
                            '<div class="d-flex justify-content-start mt-2"><img class="imgProducts" src="'+value[3]+'" alt="'+value[4]+'"></div>'  +
                            '<div class="d-flex justify-content-center mt-2"><span class="h5">'+value[5]+'</span></div>' +
                        '</div>');
                    });
                    $("#orders").append('<div class="d-flex">' +
                        '');
                } else {
                    $("#orders").append("<span class='d-flex justify-content-center h4'>No orders</span>");
                }
            },
            error: function (error) {
                console.log(error);
            },
        });
    }
}
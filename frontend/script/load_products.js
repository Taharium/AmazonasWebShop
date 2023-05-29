loadProducts();

function loadProducts(){
    console.log("loadProducts");
        let param= "product";
        let method = "getProducts";
        $.ajax({
            type: "GET",
            url: "../../backend/service_handler.php",
            cache: false,
            data: { method: method, param: param },
            dataType: "json",
            success: function(response) {
                if(response !== "No products") {
                    console.log(response);
                    $.each(response, function (index, value) {
                        console.log(value);
                        $("#productDetails").append('<div class="m-3 p-2 pb-3 card backgroundWS">' +
                            '<div class="d-flex justify-content-center"><span class="h4">'+value[3] + ' ' + value[2]+'€</span></div>' +
                            '<div class="d-flex justify-content-start mt-2"><img class="imgProducts" src="'+value[5]+'" alt="'+value[3]+'"></div>' +
                            '<div class="d-flex justify-content-center mt-2"><span class="h5">'+value[1]+'</span></div>' +
                            '<div class="d-flex justify-content-center"><button class="btn btn-outline-primary">In den Warenkorb</button></div>' +
                            '</div>');
                    });
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
}

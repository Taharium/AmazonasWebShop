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
                if(response !== "No Products") {
                   // console.log(response);
                    $.each(response, function (index, value) {
                        //console.log(value);
                        $("#products").append('<div class="m-3 p-2 pb-3 cardBody backgroundWS">' +
                            '<div class="d-flex justify-content-center"><span class="h4">'+value[4] + ' ' + value[3]+'€</span></div>' +
                            '<div class="d-flex justify-content-start mt-2"><img class="imgProducts" src="'+value[6]+'" alt="'+value[4]+'"></div>' +
                            '<div class="d-flex justify-content-center mt-2"><span class="h5">'+value[1]+'</span></div>' +
                            '<div class="d-flex justify-content-center"><a class="btn btn-outline-primary" type="button" onclick="prepLoadDetailedView('+value[0]+')">Detaillierte Ansicht</a></div>' +
                            '</div>');
                    });
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
}

function prepLoadDetailedView(id){
    window.location.href = "../web/detailed_productview.html";
    localStorage.setItem("product_id", id);
}


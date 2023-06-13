load_SpecificProduct();
function load_SpecificProduct() {
    console.log("load_SpecificProduct");
    console.log("HALLOOOOOOO!!");
    let param = localStorage.getItem("product_id");
    if(param !== null) {
        console.log(param);
        let method = "getSpecificProduct";
        $.ajax({
            type: "GET",
            url: "../../backend/service_handler.php",
            data: {method: method, param: param},
            dataType: "json",
            success: function (response) {
                console.log(response[4]);
                if (response !== "No Product") {
                    console.log(response);
                    $("#detailedproduct").append(
                        '<h1 class="h1 mt-3 mb-4">' + response[4] + '</h1>' +
                        '<div class="d-flex flex-grow-1">' +
                        '   <div class="d-flex align-items-center justify-content-center flex-wrap col-4">' +
                        '       <div class="d-flex justify-content-center">' +
                        '           <img id="Imgdetailedproduct" src="' + response[6] + '" alt="' + response[4] + '">' +
                        '       </div>' +
                        '       <div class="d-flex justify-content-center mt-2">' +
                        '           <span class="h5">' + response[1] + '</span>' +
                        '       </div>' +
                        '   </div>' +
                        /*'   <div class="d-flex justify-content-center mt-2">' +
                        '       <span class="h5">' + response[3] + '€</span>' +
                        '   </div>' +*/
                        '   <div class="d-flex justify-content-center align-items-center col-12 col-sm-12 col-md-6 col-xl-6">' +
                        '       <p class="text-black">' + response[2] + '</p>' +
                        '   </div>' +
                        '   <div class="d-flex justify-content-center align-items-center">' +
                        '       <div class="card m-3 p-3 backgroundWS" >' +
                        '           <div class="d-flex justify-content-center">' +
                        '               <span class="h5">Preis: ' + response[3] + '€</span>' +
                        '           </div>' +
                        '           <div class="d-flex justify-content-center counter">\n' +
                        '               <div class="btn-basket">+</div>\n' +
                        '               <div class="count">1</div>\n' +
                        '               <div class="btn-basket">-</div>\n' +
                        '           </div>' +
                        '           <div class="d-flex justify-content-center">' +
                        '               <a class="btn btn-outline-primary" type="button" ">In den Warenkorb</a>' +
                        '           </div>' +
                        '       </div>' +
                        '   </div>'+
                        '</div>'

                    );
                }
            },
            error: function (error) {
                console.log(error);
                console.log("HALLOOOOOOO!!");
            },
        });
    } else {
        window.location.href = "../web/products.html";
    }
}

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
                        '   <div class="d-flex justify-content-center align-items-center col-12 col-sm-12 col-md-6 col-xl-6">' +
                        '       <p class="text-black">' + response[2] + '</p>' +
                        '   </div>' +
                        '   <div class="d-flex justify-content-center align-items-center">' +
                        '       <div class="card m-3 p-3 backgroundWS" >' +
                        '           <div class="d-flex justify-content-center">' +
                        '               <span class="h5">Preis: ' + response[3] + '€</span>' +
                        '           </div>' +
                        '           <div class="d-flex justify-content-center align-items-center mb-2">' +
                        '               <div id="plus_prod" class="cart-btn me-2">+ </div>' +
                        '               <div id = "into-basket-amount" class="count">1</div>' +
                        '               <div id="minus_prod" class="cart-btn ms-2"> -</div>' +
                        '           </div>' +
                        '           <div id="addToBasketDIV" class="d-flex justify-content-center">' +
                        '               <a class="btn btn-outline-primary" id="into-basket" type="button">In den Warenkorb</a>' +
                        '           </div>' +
                        '       </div>' +
                        '   </div>'+
                        '</div>'
                    );

                    $("#plus_prod").on("click", function () {
                        let amount = parseInt($("#into-basket-amount").text());
                        amount++;
                        $("#into-basket-amount").text(amount);
                    });

                    $("#minus_prod").on("click", function () {
                        let amount = parseInt($("#into-basket-amount").text());
                        if(amount > 1){
                            amount--;
                            $("#into-basket-amount").text(amount);
                        }
                    });

                    $('#into-basket').on("click", function () {
                        addItemToBasket($("#into-basket-amount").text());
                    } );
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

function addItemToBasket(amount){
    let prodId=localStorage.getItem("product_id");
    let email=getCookie("username");

    let method = "addItemToBasket";
    let param = {prodId: prodId, email: email, amount: amount};
    console.log(param);
    console.log(email);
    console.log(prodId);

    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function (response) {
            if (response !== "Error adding item to the basket") {
                console.log(response);
                $("#addToBasketDIV").empty();
                if (response === "Item already in basket") {
                    $("#addToBasketDIV").append('<p class="btn btn-danger" id="into-basket" type="button">Already in Basket</p>');
                } else {
                    $("#addToBasketDIV").append('<p class="btn btn-success" id="into-basket" type="button">Successful</p>');
                }
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}
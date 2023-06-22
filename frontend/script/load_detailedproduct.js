load_SpecificProduct();

function load_SpecificProduct() {
    console.log("load_SpecificProduct");
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
                        '           <div class="d-flex justify-content-center">' +
                        '               <img class="Imgdetailedproduct" src="' + response[6] + '" alt="' + response[4] + '">' +
                        '           </div>' +
                        '           <div class="d-flex justify-content-center mt-3 mb-2">' +
                        '               <span class="h5">' + response[1] + '</span>' +
                        '           </div>' +
                        '   </div>' +
                        '   <div class="d-flex justify-content-center align-items-center col-12 col-sm-12 col-md-6 col-xl-6">' +
                        '       <p class="text-black">' + response[2] + '</p>' +
                        '   </div>' +
                        '   <div class="d-flex justify-content-center align-items-center">' +
                        '       <div class="cardBody m-3 p-3 backgroundWS" >' +
                        '           <div class="d-flex justify-content-center">' +
                        '               <span class="h5">Preis: ' + response[3] + '€</span>' +
                        '           </div>' +
                        '           <div class="d-flex justify-content-center align-items-center mb-2">' +
                        '               <div id="plus_prod" class="cart-btn me-2">+ </div>' +
                        '               <div id = "into-basket-amount" class="count">1</div>' +
                        '               <div id="minus_prod" class="cart-btn ms-2"> -</div>' +
                        '           </div>' +
                        '           <div id="addToBasketDIV" class="d-flex justify-content-center">' +
                        '               <button class="btn btn-outline-primary" id="into-basket" type="button">In den Warenkorb</button>' +
                        '           </div>' +
                        '           <div id="liveAlert" class="d-flex justify-content-center"></div>' +
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
    let prodId= localStorage.getItem("product_id");

    if(getCookie("username") === ""){
        $("#liveAlert").append('<span class="text-danger my-1">Please Login first</span>');
        $("#into-basket").prop("disabled", true);
        setTimeout(function () {
            window.location.href = "../web/login.html";
        }, 2000);
        return;
    }
    let email= getCookie("username");

    let method = "addItemToBasket";
    let param = {prodId: prodId, email: email, amount: amount, type: "+"};
    console.log(param);
    console.log(email);
    console.log(prodId);

    $.ajax({
        type: "POST",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function (response) {


            if (response !== "Error adding item to the basket") {
                console.log(response);
                $("#liveAlert").empty();
                if (response === "Not enough items in stock") {
                    $("#liveAlert").append('<span class="text-danger my-1">Not enough items in stock</span>');
                    setTimeout(function () {
                        $("#liveAlert").empty();
                    }, 2000);
                    return;
                }
                if (response === "Error updating item in the basket") {
                    $("#liveAlert").append('<span class="text-danger my-1">error</span>');
                    setTimeout(function () {
                        $("#liveAlert").empty();
                    }, 2000);
                } else {
                    $("#liveAlert").append('<span class="text-success my-1">success</span>');
                    setTimeout(function () {
                        $("#liveAlert").empty();
                    }, 2000);
                }
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}


load_orders_from_Basket();

function load_orders_from_Basket(){
    if(getCookie("username") === ""){
        $("#noo_payment").empty();
        $("#no_payment").append('<span class="text-danger my-1 h2">Please Login first</span>');
        setTimeout(function () {
            window.location.href = "../web/login.html";
        }, 2000);
        return;
    }
    let param= getCookie("username");
    let method = "getBasket";
    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        cache: false,
        data: { method: method, param: param },
        dataType: "json",
        success: function(response) {
            if(response !== "No items") {
                $.each(response, function (index, value) {
                    let amount = value[1];
                    let product_id = value[0];
                    addToBasketList(value[2], value[5], value[3] * amount, amount, value[4]);
                });

            } else {
                $("#payment_basket").append('<li class="d-flex justify-content-center h5">No items in Basket</li>');
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function addToBasketList(itemName, itemSubtitle, itemPrice, itemAmount, imgPath) {
    let cartItem = $(`
        <div class="Cart-Items mb-2">
            <div class="cart-image-box">
                <img src="${imgPath}" alt="${itemName}" class="imgBasket">
            </div>
            <div class="cart-item-about ms-2">
                <p class="cart-item-title my-0">${itemName}</p>
                <p class="cart-item-subtitle">${itemSubtitle}</p>
            </div>
            <div class="counter d-flex justify-content-center align-items-center">
                
            </div>
            <div class="cart-item-prices">
                <div class="cart-item-amount">${itemPrice} €</div>
                <div class="cart-item-save">Anzahl: ${itemAmount}</div>
            </div>
        </div>
    `);
    $('#payment_basket').append(cartItem);
}

$("#paymentform").on("submit", function (event) {
    event.preventDefault();

    let param = getCookie("username");
    let method = "paymentIntoDatabase";

    $.ajax({
        type: "POST",
        url: "../../backend/service_handler.php",
        cache: false,
        data: {method: method, param: param},
        dataType: "json",
        success: function (response) {
            console.log(response);
            setTimeout(function(){
                window.location = "payment-successful.html"
            }, 250)
        },
        error: function (error) {
            console.log(error);
        }
    })
});
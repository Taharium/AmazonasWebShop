let totalPrice = 0;
let itemCount = 0;
load_basket();
function load_basket(){
    $('#cart-list').empty();
    console.log("load_basket");
    totalPrice = 0;
    itemCount = 0;
    $('#total-price').text(totalPrice);

    let method = "getBasket";
    let param = getCookie("username");
    console.log(param);
    console.log(method);

    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function(response) {
            if(response !== "No items") {
                console.log(response);
                for (let i = 0; i < response.length; i++) {
                    console.log(response[i]);
                    getProductInformation(response[i][0], response[i][1]);
                }
            } else {
                $("#cart-list").append('<li class="d-flex justify-content-center h5">No items in Basket</li>');
            }
        },
        error: function(error) {
            console.log(error);
        }
    } );
}



function addToBasketList(itemName, itemSubtitle, itemPrice, itemAmount, imgPath, productId) {
    let cartItem = $(`
        <div class="Cart-Items mb-2">
            <div class="cart-image-box">
                <img src="${imgPath}" class="imgBasket">
            </div>
            <div class="cart-item-about">
                <p class="cart-item-title">${itemName}</p>
                <p class="cart-item-subtitle">${itemSubtitle}</p>
                <img src="../../pictures/basket/veg.png" style="height: 30px">
            </div>
            <div class="counter">
                <div id="plus_basket" class="cart-btn">+</div>
                <div id="amountOfProd" class="count">${itemAmount}</div>
                <div id="minus_basket" class="cart-btn">-</div>
            </div>
            <div class="cart-item-prices">
                <div class="cart-item-amount">${itemPrice} €</div>
                <div class="cart-item-save"><u>Save for later</u></div>
                <div class="cart-item-remove" data-product-id="${productId}"><u>Remove</u></div>
            </div>
        </div>
    `);

    cartItem.find(".cart-item-remove").on("click", function() {
        removeItemFromBasket($(this).attr("data-product-id"));
    } );

    $('#cart-list').append(cartItem);
}


function getProductInformation(product_id, amount) {

    let method = "getProductInformation";
    let param = product_id;
    console.log(param);
    console.log(method);

    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function(response) {
            console.log(response);
            if(response !== "No items") {
                for (let i = 0; i < response.length; i++) {
                    console.log("product_id: " + response[i]);
                    console.log(response[i]);
                }
                console.log("name: " + response[0])
                console.log("subtitle: " + response[3])
                console.log("price: " + response[1])
                console.log("imgPath: " + response[2])
                addToBasketList(response[0], response[3], response[1] * amount, amount, response[2], product_id);
                totalPrice += response[1] * amount;
                itemCount += 1;
                $('#total-price').text(totalPrice);
                $('#item-count').text(itemCount);
            } else {
                $("#cart-list").append('<li class="d-flex justify-content-center h5">No items in Basket</li>');
            }
        },
        error: function(error) {
            console.log(error);
        }
    } );
}

function removeItemFromBasket(product_id) {

    let method = "removeItemFromBasket";
    let param = {productID: product_id, email: getCookie("username")}

    console.log(param);
    console.log(method);

    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function(response) {
            load_basket();
        },
        error: function(error) {
            console.log(error);
        }
    } );
}

$("#checkout-button").on("click", function () {
  window.location.href = "payment.html";
});
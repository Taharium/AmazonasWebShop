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
                $.each(response, function (index, value) {
                    let amount = value[1];
                    let product_id = value[0];
                    console.log(value[4]);
                    addToBasketList(value[2], value[5], value[3] * amount, amount, value[4], product_id);
                    totalPrice += value[3] * amount;
                    itemCount += 1;
                    $('#total-price').text(totalPrice);
                    $('#item-count').text(itemCount);
                });
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
                <img src="${imgPath}" alt="${itemName}" class="imgBasket">
            </div>
            <div class="cart-item-about">
                <p class="cart-item-title">${itemName}</p>
                <p class="cart-item-subtitle">${itemSubtitle}</p>
                <img class ="inventory-state" src="../../pictures/basket/veg.png" alt="is_available" style="height: 30px">
            </div>
            <div class="counter">
                <div id="plus_basket" class="cart-btn">+</div>
                <div id="amountOfProd" class="count">${itemAmount}</div>
                <div id="minus_basket" class="cart-btn">-</div>
            </div>
            <div class="cart-item-prices">
                <div class="cart-item-amount">${itemPrice} €</div>
                <div class="cart-item-remove" data-product-id="${productId}"><u>Remove</u></div>
            </div>
        </div>
    `);

    cartItem.find(".cart-item-remove").on("click", function() {
        totalPrice -= $(this).parent().parent().find(".cart-item-amount").text().split(" ")[0];
        removeItemFromBasket($(this).attr("data-product-id"));
        $(this).parent().parent().remove();
        $('#total-price').text(totalPrice);
        itemCount -= 1;
        if (itemCount === 0) {
            $("#cart-list").append('<li class="d-flex justify-content-center h5">No items in Basket</li>');
        }
    } );


    cartItem.find("#plus_basket").on("click", function() {
        increaseAmount($(this).parent().parent().find(".cart-item-remove").attr("data-product-id"));
    } );

    cartItem.find("#minus_basket").on("click", function() {
        decreaseAmount($(this).parent().parent().find(".cart-item-remove").attr("data-product-id"), $(this).parent().parent().find(".count").text());
    } );



    $('.inventory-state').on('mouseover', function() {
        $(this).attr('title', 'available');
    });

    $('.inventory-state').on('mouseout', function() {
        $(this).removeAttr('title');
    });




    $('#cart-list').append(cartItem);
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
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

$("#removeAll").on("click", function () {
    let method = "removeAllFromBasket";
    let param = getCookie("username");
    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function(response) {
            console.log(response);
            if(response === "Success") {
                $('#cart-list').empty();
                $("#cart-list").append('<li class="d-flex justify-content-center h5">No items in Basket</li>');

            } else {
                $('#cart-list').empty();
                $("#cart-list").append('<li class="d-flex justify-content-center h5">Already Empty</li>');
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
    totalPrice = 0;
    itemCount = 0;
    $('#total-price').text(totalPrice);
    $('#item-count').text(itemCount);
    $('#cart-list').empty();
    $("#cart-list").append('<li class="d-flex justify-content-center h5">No items in Basket</li>');
});

$("#checkout-button").on("click", function () {
  window.location.href = "payment.html";
});



function increaseAmount(product_id) {
    let method = "addItemToBasket";
    let param = {prodId: product_id, email: getCookie("username"), amount: 1}
    console.log(param);
    console.log(method);

    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function(response) {
            console.log(response);
            load_basket();
        },
        error: function(error) {
            console.log("error");
            console.log(error);
        }
    } );

}

function decreaseAmount(product_id, currentAmount) {
    console.log("currentAmount= " + currentAmount);
    if (currentAmount == 1) {
        console.log("removeItemFromBasket");
        removeItemFromBasket(product_id);
        load_basket();
        return;
    }
    console.log("got here")

    let method = "decreaseAmountInBasket";
    let param = {productID: product_id, email: getCookie("username")}
    console.log(param);
    console.log(method);

    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function(response) {
            console.log(response);
            load_basket();
        },
        error: function(error) {
            console.log(error);

        }
    } );

}
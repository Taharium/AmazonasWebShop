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
    });
}



function addToBasketList(itemName, itemSubtitle, itemPrice, itemAmount, imgPath, productId) {
    let cartItem = $(`
        <div class="Cart-Items mb-2">
            <div class="cart-image-box">
                <img src="${imgPath}" alt="${itemName}" class="imgBasket">
            </div>
            <div class="cart-item-about ms-2">
                <p class="cart-item-title my-0">${itemName}</p>
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
    });


    cartItem.find("#plus_basket").on("click", function() {
        let amount = $(this).parent().parent().find(".count").text();
        console.log(amount);
        updateAmount($(this).parent().parent().find(".cart-item-remove").attr("data-product-id"), amount, $(this).parent().parent(), "+");
    });

    cartItem.find("#minus_basket").on("click", function() {
        let amount = $(this).parent().parent().find(".count").text();
        console.log(amount);
        if (amount > 1) {
            updateAmount($(this).parent().parent().find(".cart-item-remove").attr("data-product-id"), amount, $(this).parent().parent(), "-");
        }
    });


    cartItem.find(".inventory-state").on('mouseover', function() {
        $(this).attr('title', 'This item is available');
    });

    $('#cart-list').append(cartItem);
}

function removeItemFromBasket(product_id) {

    let method = "removeItemFromBasket";
    let param = {productID: product_id, email: getCookie("username")}

    console.log(param);
    console.log(method);

    $.ajax({
        type: "POST",
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
        type: "POST",
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


//TODO: vielleicht ausbessern --> zuerst amount entscheiden und dann ändern?
function updateAmount(product_id, amount, selector, type) {
    let method = "addItemToBasket";
    let param = {prodId: product_id, email: getCookie("username"), amount: 1, type: type};

    console.log(param);
    console.log(method);

    $.ajax({
        type: "POST",
        url: "../../backend/service_handler.php",
        data: {method: method, param: param},
        dataType: "json",
        success: function(response) {
            console.log(response);
            if(response === "Item updated in the basket +") {
                selector.find("#amountOfProd").text(parseInt(amount) + 1);
                let singlePrice = selector.find(".cart-item-amount").text().split(" ")[0] / amount;
                let prodPrice = Number(selector.find(".cart-item-amount").text().split(" ")[0]) + singlePrice;
                selector.find(".cart-item-amount").text(prodPrice + " €");
                totalPrice += singlePrice;
                $('#total-price').text(totalPrice);
            }else if(response === "Not enough items in stock") {
                alert("Not enough items in stock");
            }else{
                selector.find("#amountOfProd").text(parseInt(amount) - 1);
                let singlePrice = selector.find(".cart-item-amount").text().split(" ")[0] / amount;
                let prodPrice = Number(selector.find(".cart-item-amount").text().split(" ")[0]) - singlePrice;
                selector.find(".cart-item-amount").text(prodPrice + " €");
                totalPrice -= singlePrice;
                $('#total-price').text(totalPrice);
            }
        },
        error: function(error) {
            console.log("error");
            console.log(error);
        }
    });

}
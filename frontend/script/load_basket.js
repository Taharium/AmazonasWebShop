load_basket();
function load_basket(){


    console.log("load_basket");


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
            console.log(response);
            for (i = 0; i < response.length; i++) {
                console.log(response[i]);
                var productInformation = getProductInformation(response[i][0], response[i][1]);


            }

        },
        error: function(error) {
            console.log(error);
        }
    } );
}



function addToBasketList(itemName, itemSubtitle, itemPrice, itemAmount, imgPath) {
    var cartItem = $(`
    <div class="Cart-Items">
        <div class="cart-image-box">
            <img src="${imgPath}" style="height: 120px">
        </div>
        <div class="cart-item-about">
            <p class="cart-item-title">${itemName}</p>
            <p class="cart-item-subtitle">${itemSubtitle}</p>
            <img src="../../pictures/basket/veg.png" style="height: 30px">
        </div>
        <div class="counter">
            <div class="cart-btn">+</div>
            <div class="count">${itemAmount}</div>
            <div class="cart-btn">-</div>
        </div>
        <div class="cart-item-prices">
            <div class="cart-item-amount">${itemPrice}</div>
            <div class="cart-item-save"><u>Save for later</u></div>
            <div class="cart-item-remove"><u>Remove</u></div>
        </div>
    </div>
`);


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
            for (i = 0; i < response.length; i++) {
                console.log("product_id: " + response[i]);
                console.log(response[i]);
            }
                console.log("name: "+response[0])
                console.log("subtitle: "+response[3])
                console.log("price: "+response[1])
                console.log("imgPath: "+response[2])
               addToBasketList(response[0], response[3], response[1], amount, response[2]);

        },
        error: function(error) {
            console.log(error);
        }
    } );
}
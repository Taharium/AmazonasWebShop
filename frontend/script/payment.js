load_orders_from_Basket();
let itemInBasket = false;
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
                    addToBasketList(value[2], value[5], value[3] * amount, amount, value[4]);
                });
                itemInBasket = true;
            } else {
                $("#payment_basket").append('<li class="d-flex justify-content-center h5">No items in Basket</li>');
                itemInBasket = false;
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
    $("#errormessage").empty();

    if(!itemInBasket) {
        $("#errormessage").append('<span class="text-danger my-1 h5">No items in Basket</span>');
        return;
    }

    let name = $("#cardname").val().trim();

    let firstname = name.split(" ")[0].trim();
    let lastname = name.split(" ")[1].trim();
    let expmonth = $("#expmonth").val();
    let expyear = $("#expyear").val();
    let date = new Date();
    console.log(date.getFullYear().toString().substring(2));

    if(expmonth < 1 || expmonth > 12) {
        $("#errormessage").append('<span class="text-danger my-1 h5">Month is not valid</span>');
        return;
    } else if(expyear < date.getFullYear().toString().substring(2) ) {
        $("#errormessage").append('<span class="text-danger my-1 h5">Year is not valid</span>');
        return;
    }

    let param= {email: getCookie("username"), firstname: firstname, lastname: lastname, expmonth: expmonth, expyear: expyear}
    let method = "paymentIntoDatabase";

    $.ajax({
        type: "POST",
        url: "../../backend/service_handler.php",
        cache: false,
        data: {method: method, param: param},
        dataType: "json",
        success: function (response) {
            console.log(response);
            if(response !== "Email or name is not valid"){
                setTimeout(function(){
                    window.location = "payment-successful.html"
                }, 250);
            } else if(response === "Card is expired") {
                $("#errormessage").append('<span class="text-danger my-1 h5">Card is expired</span>');
            } else {
                $("#errormessage").append('<span class="text-danger my-1 h5">Email or name is not valid</span>');
            }
        },
        error: function (error) {
            console.log(error);
        }
    })
});
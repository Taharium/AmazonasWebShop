loadOrders();

function loadOrders() {
    console.log("loadOrders");
    if (!checkCookie()) {
        $("#orders").hide();
        console.log("no cookie");
    } else {
        let param = getCookie("username");
        let method = "getOrders";
        $.ajax({
            type: "GET",
            url: "../../backend/service_handler.php",
            cache: false,
            data: { method: method, param: param },
            dataType: "json",
            success: function (response) {
                console.log(response);
                if (response !== "No orders") {
                    $.each(response, function (index, value) {
                        let date = new Date(value[0].split(" ")[0]);
                        date = date.toLocaleDateString();
                        let time = value[0].split(" ")[1];
                        time = time.split(":")[0] + ":" + time.split(":")[1];
                        addToBasketList(value[4], value[5], value[2],  value[1], value[3], date, time);
                    });
                } else {
                    $("#orders").append("<span class='d-flex justify-content-center h4'>No orders</span>");
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

function addToBasketList(itemName, itemSubtitle, itemPrice, itemAmount, imgPath, date, time) {
    let cartItem = $(`
        <div class="Cart-Items mb-2">
            <div class="cart-image-box">
                <img src="${imgPath}" alt="${itemName}" class="imgBasket">
            </div>
            <div class=" cart-item-about ms-2 ">
                <p class="cart-item-title my-0">${itemName}</p>
                <p class="cart-item-subtitle">${itemSubtitle}</p>
            </div>
            <div class=" me-4 cart-item-prices">
                <div class="cart-item-amount pb-1">${itemPrice} €</div>
                <div class="cart-item-save p-0 pb-2">Anzahl: ${itemAmount}</div>
            </div>
            <div class="d-flex align-items-center flex-column pt-3">
                <div class="count p-1">Datum: ${date}</div>
                <div class="count">Uhrzeit: ${time}</div>
            </div>
        </div>
    `);

    $('#orders').append(cartItem);
}
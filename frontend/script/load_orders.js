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
           if (response !== "No orders") {
             $.each(response, function (index, value) {
               //$("#orders").append(TODO: add order html);
             });
           } else {
             $("#orders").append("Not implemented yet");
           }
         },
         error: function (error) {
           console.log(error);
         },
       });
     }
}
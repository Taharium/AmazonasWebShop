function load_SpecificProduct(id) {
  console.log("load_SpecificProduct");
  console.log(id);
  window.location.href = "../web/detailed_productview.html";
  console.log(id);
  //console.log("HALLOOOOOOO!!");
  let param = id;
  let method = "getSpecificProduct";
  $.ajax({
    type: "GET",
    url: "../../backend/service_handler.php",
    cache: false,
    data: { method: method, param: param },
    dataType: "json",
    success: function (response) {
      console.log(response[4]);
      if (response !== "No Product") {
        console.log(response);
        $("#detailedproduct").append(
          '<h1 class="h1 mt-3 mb-4">' + response[4] + "</h1>"
        );
      }
    },
    error: function (error) {
      console.log(error);
      console.log("HALLOOOOOOO!!");
    },
  });
}


function searchProduct(param) {
    let method = "search";
    $.ajax({
        type: "GET",
        url: "../../backend/service_handler.php",
        cache: false,
        data: {method: method, param: param},
        dataType: "json",
        success: function (response) {
            let full = false;
            $('#searchResults').empty();
            $('#searchResults').show();
            $('#searchResults').removeClass("d-none");

            if (response !== "NULL") {
                full = true;
            }
            // draw each response in a separate p tag
            if (full) {
                $.each(response, function (i) {
                    $('#searchResults').append('<p class="searchResult m-0 p-1" id="' + response[i][0] + '">' + response[i][1] + '</p>');
                });
            }
            // hide results if search bar is empty
            if ($('#searchProduct').val() === '') {
                $('#searchResults').hide();
            }
            // error results if no result to prompt has been found
            if (!full) {
                $('#searchResults').append("<span class='d-flex justify-content-center'>search-result not found</span>")
            }
            // event for click on search result
            $('.searchResult').on('click', function () {
                console.log( $(this).attr('id')+ " " + $(this).text());
                $('#searchProduct').val($(this).text())
                $('#searchResults').hide();
                localStorage.setItem("product_id", $(this).attr('id'));
                window.location.href = "../web/detailed_productview.html";
            });
        },
        error: function (e) {
            console.log(e);
        }
    })
}
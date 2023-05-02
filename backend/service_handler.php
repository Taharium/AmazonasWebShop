<?php

use businesslogic\simpleLogic;

include("businesslogic/SimpleLogic.php");

$param = "";
$queryType = "";
$valid = true;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // receives new post request and checks for missing information
    switch ($_POST["post_type"]) {
        case "Registrierung":
            if (!isset($_POST['firstname'])) {
                $valid = false;
            } else if (!isset($_POST['lastname'])) {
                $valid = false;
            } else if (!isset($_POST['email'])) {
                $valid = false;
            } else if (!isset($_POST['street'])) {
                $valid = false;
            } else if (!isset($_POST['housenumber'])) {
                $valid = false;
            } else if (!isset($_POST['doornumber'])) {
                $valid = false;
            } else if (!isset($_POST['postalcode'])) {
                $valid = false;
            } else if (!isset($_POST['city'])) {
                $valid = false;
            } else if (!isset($_POST['password'])) {
                $valid = false;
            } else if (!isset($_POST['confpassword'])) {
                $valid = false;
            } else {
                $queryType = $_POST["post_type"];
                $param = $_POST;
            }
            break;
        case "Login":
            if (!isset($_POST['emailLogin'])) {
                // missing email
                $valid = false;
            } else if (!isset($_POST['passwordLogin'])) {
                // missing password
                $valid = false;
            } else {
                $queryType = $_POST["post_type"];
                $param = $_POST;
            }
            break;
    }
    //if validation of POST array failed -> response
    if(!$valid) {
        response("POST", 200, "Missing information");
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    isset($_GET["queryType"]) ? $queryType = $_GET["queryType"] : false;
    isset($_GET["param"]) ? $param = $_GET["param"] : false;
}

$logic = new SimpleLogic();
$result = $logic->handleRequest($queryType, $param);

if ($result == null) {
    response("GET", 400, null);
} else {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        response("POST", 200, $result);
    }
    else if ($_SERVER["REQUEST_METHOD"] == "GET" ) {
        response("GET", 200, $result);
    }
}

function response($method, $httpStatus, $data){
    header('Content-Type: application/json');
    switch ($method) {
        case "POST":
        case "GET":
            http_response_code($httpStatus);
            echo(json_encode($data));
            break;
        default:
            http_response_code(405);
            echo("Method not supported yet!");
    }
}

<?php

use businesslogic\simpleLogic;

include("businesslogic/SimpleLogic.php");

$param = "";
$method = "";
$valid = true;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    isset($_POST["method"]) ? $method = $_POST["method"] : false;
    isset($_POST) ? $param = $_POST : false;
}
error_log("service_handler: " . $method);

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    isset($_GET["param"]) ? $param = $_GET["param"] : false;
    isset($_GET["method"]) ? $method = $_GET["method"] : false;
}

$logic = new SimpleLogic();
$result = $logic->handleRequest($method, $param);

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

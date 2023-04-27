<?php
function connect() {
    // Create connection
    $servername = "localhost";
    $username = "AmazonWebShop";
    $password = "[Scb@gjC7KpzU/@g";
    $dbname = "amazonas_webshop";
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        return false;
    } else {
        return $conn;
    }
};
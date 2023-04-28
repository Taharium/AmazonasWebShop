<?php

namespace db;
use mysqli;

include ("dbaccess.php");
class Datahandler
{
    private $servername;
    private $username;
    private $password;
    private $db;
    private $conn;
    private $credentials;

    function __construct()
    {
        // establishes connection to server
        $this->credentials = connect();
        $this->servername = $this->credentials["servername"];
        $this->username = $this->credentials["username"];
        $this->password = $this->credentials["password"];
        $this->db = $this->credentials["db"];
        $this->conn = new MySQLi($this->servername, $this->username, $this->password, $this->db);
    }

    public function Get_UserEmail($param)
    {
        $query = "SELECT * FROM amazonas_webshop.person WHERE email = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $param["email"]);
        $stmt->execute();
        $tmp = $stmt->get_result()->fetch_all();
        if ($tmp == null) {
            return "NULL";
        }
        return $tmp;
    }

    public function Get_UserPassword($param)
    {
        $arr = $this->Get_UserEmail($param);
        if($arr == "NULL") {
            return "NULL";
        }

        $query = "SELECT * FROM amazonas_webshop.user WHERE fk_pers_ID = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $arr["pers_ID"]);
        $stmt->execute();
        $tmp = $stmt->get_result()->fetch_all();

        if(password_verify($param["password"], $tmp["password"]) && $arr["email"] == $param["email"]) {
            //return ein join select statement
        } else {
            return "NULL";
        }
    }


    public function Insert_Registrierung($param)
    {
        $param["password"] = password_hash($param['password'], PASSWORD_DEFAULT);

        $query = "INSERT INTO amazonas_webshop.address (street, housenumber, doornumber, postal_code, city) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("siiis", $param["street"], $param["housenumber"], $param["doornumber"], $param["postalcode"], $param["city"]);
        $stmt->execute();

        // get id of last entry
        $id = $this->conn->query("SELECT MAX(addr_ID) as addr_ID FROM amazonas_webshop.address")->fetch_assoc()['addr_ID'];

        $query = "INSERT INTO amazonas_webshop.person (email, fk_addr_ID, firstname, lastname) VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("siss", $param["email"], $id, $param["firstname"], $param["lastname"]);
        $stmt->execute();

        $id = $this->conn->query("SELECT MAX(pers_ID) as pers_ID FROM amazonas_webshop.person")->fetch_assoc()['pers_ID'];

        $query = "INSERT INTO amazonas_webshop.user (fk_pers_ID, password, is_active) VALUES (?, ?, TRUE)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("is", $id, $param["password"]);
        $stmt->execute();

        //Sofort mit get arabeiten? also gleich Select machen und dann returnen?

        return "Success";
    }
}
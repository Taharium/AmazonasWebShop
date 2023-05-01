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

    //brauchen wir das?
    function __destruct()
    {
        // closes connection to server
        $this->conn->close();
    }

    public function Get_UserEmail($param){
        $query = "SELECT email, pers_ID FROM amazonas_webshop.person WHERE email = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $param["emailLogin"]);
        $stmt->execute();
        return $stmt->get_result()->fetch_row();
    }

    public function Get_Userpassword($id){
        $query = "SELECT password FROM amazonas_webshop.user WHERE fk_pers_ID = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $tmp = $stmt->get_result()->fetch_assoc();
        return $tmp["password"];
    }

    public function Get_Userdata($param){
        $emailarr = $this->Get_UserEmail($param);
        $email = $emailarr[0];
        $id = $emailarr[1];
        $password = $this->Get_Userpassword($emailarr[1]);

        $tmp = "NULL";
        if(password_verify($param["passwordLogin"], $password) && $email === $param["emailLogin"]) {
            $query = "SELECT * FROM amazonas_webshop.person
                      JOIN amazonas_webshop.user ON amazonas_webshop.person.pers_ID = amazonas_webshop.user.fk_pers_ID
                      JOIN amazonas_webshop.address ON amazonas_webshop.person.fk_addr_ID = amazonas_webshop.address.addr_ID
                      WHERE email = ? AND (SELECT password FROM user WHERE fk_pers_ID = ".$id.") = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            $tmp = $stmt->get_result()->fetch_row();
            if ($tmp == null) {
                return "NULL";
            }
        }
        return $tmp;
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

        // get id of last entry
        $id = $this->conn->query("SELECT MAX(pers_ID) as pers_ID FROM amazonas_webshop.person")->fetch_assoc()['pers_ID'];

        $query = "INSERT INTO amazonas_webshop.user (fk_pers_ID, password, is_active) VALUES (?, ?, TRUE)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("is", $id, $param["password"]);
        $stmt->execute();

        $query = "SELECT * FROM amazonas_webshop.person
                      JOIN amazonas_webshop.user ON amazonas_webshop.person.pers_ID = amazonas_webshop.user.fk_pers_ID
                      JOIN amazonas_webshop.address ON amazonas_webshop.person.fk_addr_ID = amazonas_webshop.address.addr_ID
                      WHERE email = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $param["email"]);
        $stmt->execute();
        $tmp = $stmt->get_result()->fetch_row();
        if ($tmp == null) {
            return "NULL";
        }
        return $tmp;

    }
}
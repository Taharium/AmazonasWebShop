<?php

namespace businesslogic;
use db\Datahandler;
include("./db/Datahandler.php");
class SimpleLogic
{
    private $handler;

    function __construct()
    {
        $this->handler = new Datahandler();
    }

    public function handleRequest($method, $param)
    {
        // calls associated datahandler request based on querytype
        switch ($method) {
            case 'registerUser':
                error_log("SimpleLogic: " . $method);
                $valid = true;
                if (!isset($param['firstname'])) {
                    $valid = false;
                } else if (!isset($param['lastname'])) {
                    $valid = false;
                } else if (!isset($param['email'])) {
                    $valid = false;
                } else if (!isset($param['street'])) {
                    $valid = false;
                } else if (!isset($param['housenumber'])) {
                    $valid = false;
                } else if (!isset($param['doornumber'])) {
                    $valid = false;
                } else if (!isset($param['postalcode'])) {
                    $valid = false;
                } else if (!isset($param['city'])) {
                    $valid = false;
                } else if (!isset($param['password'])) {
                    $valid = false;
                } else if (!isset($param['confpassword'])) {
                    $valid = false;
                }
                if(!$valid) {
                    return null;
                }
                $res = $this->handler->registerUser($param);
                break;
            case 'login':
                if (!isset($param['emailLogin'])) {
                    // missing email
                    return null;
                } else if (!isset($param['passwordLogin'])) {
                    // missing password
                    return null;
                }
                $res = $this->handler->Get_Userdata($param);
                break;
            case 'getAccountDetails':
                $res = $this->handler->getAccountDetails($param);
                break;
            case 'getProducts':
                $res = $this->handler->getProducts();
                break;
            default:
                $res = null;
                break;
        }
        return $res;
    }
}
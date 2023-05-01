<?php

namespace businesslogic;
use db\Datahandler;
include("../../backend/db/Datahandler.php");
class SimpleLogic
{
    private $handler;

    function __construct()
    {
        $this->handler = new Datahandler();
    }

    public function handleRequest($queryType, $param)
    {
        // calls associated datahandler request based on querytype
        switch ($queryType) {
            case 'Registrierung':
                $res = $this->handler->Insert_Registrierung($param);
                break;
            case 'Login':
                $res = $this->handler->Get_Userdata($param);
                break;
            default:
                $res = null;
                break;
        }
        return $res;
    }
}
<?php
include 'FileClass.php';
//declare(DBUSERS, "assets/users.db");
class Auth {
    private $name;
    private $nickName;
    private $password;
    private $error = 0;
    private $dbPath;
    private $dbUsers = [];
    private $cart;

    function __construct($nickName, $password) {
        $this->nickName=$nickName;
        $this->password=$password;
        $this->dbPath= $_SERVER['DOCUMENT_ROOT'] . '/assets/users.db';
        $this->load();
        $this->login();
    }

    function load() {
    }

    function login() {
    }

}
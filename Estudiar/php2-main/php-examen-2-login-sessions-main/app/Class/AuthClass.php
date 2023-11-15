<?php
/**
 * This class do all the actions over the File DB
 */
class Auth
{
    private $dbPath;
    private $error;
    private $users = [];
    private $usernames = [];
    private $passwords = [];
    private $username;
    private $password;
    private $myUser;

    function __construct($current_username, $current_password)
    {
        $this->username = $current_username;
        $this->password = $current_password;
        $this->dbPath = $_SERVER['DOCUMENT_ROOT'] . '/assets/users.db';
        $this->load();
    }

    public function load()
    {
        try {
            if (!file_exists($this->dbPath)) {
                throw new ErrorException('No file');
            }
            $users = file($this->dbPath);
            foreach($users as $value) {
                $current_user = explode("@@@", $value, 3);
                array_push($this->users, $current_user[0]);
                array_push($this->usernames, $current_user[1]);
                array_push($this->passwords, trim($current_user[2]));
            }
        } catch (Exception $e) {
            $this->error = $e->getMessage();
        }
    }
    public function login()
    {
        // Recorre todos los nombres de usuario 
        for ($i = 0; $i < sizeof($this->usernames); $i++) {
            // Si encuentra una coincidencia comprobará el password
            if ($this->username == $this->usernames[$i]) {
                // Si el password también coincide el método devolverá true
                if ($this->password == $this->passwords[$i]) {
                    $this->myUser = $this->users[$i];
                    return true;
                }
            }
        }
        // Si no se ha encontrado ninguna coincidencia de username y password, el método devolverá false
        return false;
    }
    public function getUser() {
        return $this->myUser;
    }
    public function getPass() {
        return $this->password;
    }
    public function getError()
    {
        return $this->error;
    }
}

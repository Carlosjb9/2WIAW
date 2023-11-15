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
                throw new ErrorException("No file");
            } else {
                $lines = file($this->dbPath);
                foreach ($lines as $user) {
                    $array = explode("@@@", $user, 3) ;
                    array_push($this->users, $array[0]);
                    array_push($this->usernames, trim($array[1]));
                    array_push($this->passwords, trim($array[2]));
                }
            }

        } catch (Exception $e) {
            $this->error = $e->getMessage();
        }
    }
    public function login()
    {
        for($i = 0; $i < sizeof($this->usernames); $i++ ) {
            if ($this->username == $this->usernames[$i]) {
                if ($this->password == $this->passwords[$i]) {
                    $this->myUser = $this->users[$i];
                    return true;
                }
            }    
        } 
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

<?php
/**
 * This class do all the actions over the File DB
 */
class File
{
    private $dbPath;
    private $error;
    private $dbLines = [];
    private $attributes = [];

    function __construct()
    {
        $this->dbPath = $_SERVER['DOCUMENT_ROOT'] . '/assets/products.db';
        $this->load();
    }

    public function load()
    {
        try {
            if (!file_exists($this->dbPath)) {
                throw new ErrorException('No file');
            }
            $dbFile = fopen($this->dbPath, 'r');
            $dbContent = fread($dbFile, filesize($this->dbPath) + 1);
            $this->dbLines = explode("\n", $dbContent);
            array_pop($this->dbLines);
        } catch (Exception $e) {
            $this->error = $e->getMessage();
        }
    }
    public function getAttributes()
    {
        foreach ($this->dbLines as $line) {
            $this->attributes[] = explode('###', $line);
        }
        return $this->attributes;
    }
    public function write($line)
    {
    }
    public function getError()
    {
        return $this->error;
    }
}

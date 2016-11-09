<?php class DB {
 
    protected $db_name = 'noteit';
    protected $db_user = 'root';
    protected $db_pass = 'root';
    protected $db_host = 'localhost';
 
    //open a connection to the database. Make sure this is called
    //on every page that needs to use the database.
    public function connect() {
        $connection = mysqli_connect($this->db_host, $this->db_user, $this->db_pass, $this->db_name);
        mysqli_query($connection, "SET NAMES 'utf8'"); 
        mysqli_query($connection, "SET CHARACTER SET 'utf8'"); 
       // mysqli_select_db($this->db_name);
         return $connection;
    }
 
   public function select($table, $where) {
        $connection = $this->connect();
        $sql = "SELECT * FROM $table ";
        $rowSet = mysqli_query($connection, $sql);
        $resultArray = array();
        while($row = mysqli_fetch_assoc($rowSet))
        {
            array_push($resultArray, $row);
        }
        return $resultArray;
     }
 
 }
?>
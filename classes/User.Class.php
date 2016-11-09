<?php class User {
 
  function User($error = '') {
            $this->DBObject = new DB();
        }
    public function getUsers()
    {
      $resultArray = $this->DBObject->select('users', '1');
      $final['data'] = $resultArray;
      $encode  = json_encode($final);
      return $encode;
    }
   
}
?>
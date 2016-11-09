<?php  ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);




header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
include("../classes/DB.Class.php");
include("../classes/User.Class.php");

$data = json_decode(file_get_contents('php://input'), true);


/* Post Request Fix */
		$apidata = $data['params'];
		$method = $data["function"];
		
		switch ($method) {
			case "login" 			: login($apidata); break;
			case "register" 		: adminregister(); break;
		}
	

	 function login($apidata) {
	 	$email = $apidata['email'];
		$password = $apidata['password'];

			if(trim($email)!="" && trim($password)!=""){
				 // $UserObject = new User();
				 // $result = $UserObject->getUsers();
				$data['status']= 1;
				$data['successMsg']=	'True';
				
		    }else{
				$data['status']= 0;
				$data['errorMsg']=	'Sorry Invalid User Details';
			}
		echo json_encode ( $data );
		exit;
		}			
	
		 function exitHere() {
				$data['status']= 0;
				$data['errorMsg']=	'Not configured';
				echo json_encode ( $data );
				exit;
		}


	
?>
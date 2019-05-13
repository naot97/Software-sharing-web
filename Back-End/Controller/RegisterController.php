<?php
require_once './Model/AccountModel.php';

class RegisterController 
{
	function __construct()
	{
		
	}


	function sign_up()
	{
		try{
			$response = new stdClass();
			$data = json_decode(file_get_contents("php://input"));
			$data->password = password_hash($data->password, PASSWORD_DEFAULT);

			$model = new AccountModel();	
			if (!$model->insert_account($data)){
				throw new Exception("Username bị trùng");
			}
			$response->success = 1;
			$response->mess = "";
		}
		catch(Exception $e){
			$response->success = 0;
			$response->mess = $e->getMessage();
		}

		echo json_encode($response,JSON_UNESCAPED_UNICODE);
	}
}
?>
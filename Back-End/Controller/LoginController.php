<?php
require_once './Model/AccountModel.php';
class LoginController 
{
	function __construct()
	{
		
	}


	function login()
	{

		try{
			$response = new stdClass();

			$data = json_decode(file_get_contents("php://input"));
			
			$model = new AccountModel();
			$account = $model->select_acount($data->username);
			if (!isset($account->password)) {
				throw new Exception("Username sai");
			}

			if (password_verify($data->password, $account->password) ){
				
			}
			else{
				throw new Exception("Mật khẩu sai");
				
			}

			$response->success = 1;
			$response->mess = $account;
		}
		catch(Exception $e){
			$response->success = 0;
			$response->mess = $e->getMessage();
		}

		echo json_encode($response,JSON_UNESCAPED_UNICODE);
	}
}
?>
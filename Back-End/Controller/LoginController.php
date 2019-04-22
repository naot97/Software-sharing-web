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
			$data = json_decode(file_get_contents("php://input"));
			
			$model = new AccountModel();

			$account = $model->select_acount($data->username);
			
			$mess;
			if (password_verify($data->password, $account->password) ){
				$mess = 1;
			}
			else{
				$mess = 0;
			}
		}
		catch(Exception $e){
			$mess = 0;
		}

		echo $mess;
	}
}
?>
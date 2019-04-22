<?php
require_once './Model/AccountModel.php';
//require_once './Model/Crud.php';
class RegisterController 
{
	function __construct()
	{
		
	}


	function sign_up()
	{
		$data = json_decode(file_get_contents("php://input"));
		$data->password = password_hash($data->password, PASSWORD_DEFAULT);

		$model = new AccountModel();
		$model->insert_account($data);

	}
}
?>
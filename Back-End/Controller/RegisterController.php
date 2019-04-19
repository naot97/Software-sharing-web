<?php
require_once './Model/Crud.php';
class RegisterController 
{
	function __construct()
	{
		
	}

	function sign_up()
	{
		$data = json_decode(file_get_contents("php://input"));
		$sql = "INSERT INTO account(username,email,password) VALUES('{$data->username}','{$data->email}','{$data->password}')";
		$crud = new Crud();
		$crud->execute($sql);
	}
}
?>
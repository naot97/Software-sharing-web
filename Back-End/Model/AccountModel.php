<?php
require_once 'Crud.php';

class AccountModel
{
	var $crud;
	function __construct()
	{
		$this->crud = new Crud();
	}

	function select_acount($username){
		$sql = "SELECT * FROM account WHERE username = '{$username}'";

		return (object)$this->crud->getData($sql)[0];
	}

	function insert_account($data){
		$sql = "INSERT INTO account(username,email,password) VALUES('{$data->username}',
			'{$data->email}','{$data->password}')";

		return $this->crud->execute($sql);
	}
}
?>
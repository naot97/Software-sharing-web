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
		$sql = "SELECT * FROM account WHERE username = '{$username}' AND isDeleted = 0";
		if ($this->crud->getData($sql)){
			return (object)$this->crud->getData($sql)[0];
		}
		else{
			return new stdClass();
		}
	}

	function insert_account($data){
		$sql = "INSERT INTO account(username,email,password) VALUES('{$data->username}',
			'{$data->email}','{$data->password}')";

		return $this->crud->execute($sql);
	}

	function change_account($data){
		$sql = "UPDATE account SET email='{$data->email}'".
				isset($data->password)?",password='{$data->password}'":"". 
				isset($data->isAd)?",isAd='{$data->isAd}'":"".
				",fname='{$data->email}',lname='{$data->email}'
				,sourceAvatar='{$data->sourceAvatar}' 
				WHERE username='{$data->username}'";

		return $this->crud->execute($sql);
	}

	function delete_account($data){
		$sql = "UPDATE account SET isDeleted=1 
				WHERE username={$data->username}";
		return $this->crud->execute($sql);
	}
}
?>
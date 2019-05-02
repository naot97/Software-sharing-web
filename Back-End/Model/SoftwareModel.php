<?php
require_once 'Crud.php';
class SoftwareModel 
{
	var $crud;		
	function __construct()
	{
		$this->crud = new Crud();
	}

	function select_all_software(){
		$sql = 'SELECT * FROM software WHERE isDeleted = 0';
		return $this->crud->getData($sql);
	}
}
?>
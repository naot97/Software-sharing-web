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

	function insert_software($data){
		$sql = "INSERT INTO software(name,sourceImg,descript,link) 
		VALUES('{$data->name}','{$data->sourceImg}','{$data->descript}','{$data->link}')";

		return $this->crud->getData($sql);
	}

	function delete_software($data){
		$sql = "UPDATE software SET isDeleted=1 
		WHERE username='{$data->softwareId}'";

		return $this->crud->getData($sql);	
	}
}
?>
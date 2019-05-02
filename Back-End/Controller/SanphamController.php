<?php
require_once './Model/SoftwareModel.php';

/**
* 
*/


class SanphamController
{
	function __construct()
	{
	}

	function load_data(){

		$model = new SoftwareModel();
		//echo json_encode($arr);
		echo json_encode($model->select_all_software(), JSON_UNESCAPED_UNICODE);
		//ar_dump( ((object)$model->select_all_software()[0])->name);
		//echo $model->select_all_software()[0]['descript'];
	}
}
?>
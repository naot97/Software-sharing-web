<?php
require_once "./Controller/RegisterController.php";
if (isset($_GET['controller'])){
$controller = $_GET['controller'];

switch ($controller) {
	case 'Register':
		$Controller = new RegisterController();
		$Controller->{$_GET['action']}();
		break;
	
	default:
		break;
}
}

?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


require_once "./Controller/RegisterController.php";
require_once "./Controller/LoginController.php";


if (isset($_GET['controller'])){
	$controller = $_GET['controller'];

	switch ($controller) {
		case 'Register':
			$Controller = new RegisterController();
			break;
		case 'Login' :
			$Controller = new LoginController();
			break;
		default:
			break;
	}

	$Controller->{$_GET['action']}();

}

?>
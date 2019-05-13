<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("content-type: text/html; charset=UTF-8"); 
//error_reporting(0);



require_once "./Controller/RegisterController.php";
require_once "./Controller/LoginController.php";
require_once "./Controller/SanphamController.php";

if (isset($_GET['controller'])){
	$controller = $_GET['controller'];

	switch ($controller) {
		case 'Register':
			$Controller = new RegisterController();
			break;
		case 'Login' :
			$Controller = new LoginController();
			break;
		case 'Sanpham':
			$Controller = new SanphamController();
			break;
		default:
			break;
	}

	$Controller->{$_GET['action']}();

}

?>
CREATE DATABASE `sharing_software_web`;
USE `sharing_software_web`;

CREATE table `account`(
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`isAd` tinyint(1) NOT NULL DEFAULT '0',
	`username` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`fname` varchar(255) NOT NULL DEFAULT '',
	`lname` varchar(255) NOT NULL DEFAULT '',
	`sourceAvatar` varchar(1023) NOT NULL DEFAULT '',
	 `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
	 UNIQUE(`username`)
);

CREATE TABLE `software`(
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`sourceImg` varchar(1023) NOT NULL DEFAULT '',
	`descript` varchar(1023) NOT NULL DEFAULT '',
	`link` varchar(1023) NOT NULL DEFAULT '',
	`isDeleted` tinyint(1) NOT NULL DEFAULT '0',
	UNIQUE(`name`)
);

CREATE TABLE `comment`(
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`accountId`  INT NOT NULL,
	`softwareId` INT NOT NULL,
	`content` varchar(1023) NOT NULL,
	`isDeleted` tinyint(1) NOT NULL DEFAULT '0',
	FOREIGN KEY (`accountId`) REFERENCES `account`(`id`),
	FOREIGN KEY (`softwareId`) REFERENCES `software`(`id`)
);

CREATE DATABASE `sharing_software_web`;
USE `sharing_software_web`;

CREATE table `account`(
	`accountId` INT NOT NULL AUTO_INCREMENT,
	`isAd` tinyint(1) NOT NULL DEFAULT '0',
	`username` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`fname` varchar(255) NOT NULL DEFAULT '',
	`lname` varchar(255) NOT NULL DEFAULT '',
	`sourceAvatar` varchar(1023) NOT NULL DEFAULT '',
	 `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
	 UNIQUE(`username`),
	 PRIMARY KEY(`accountId`)
);

CREATE TABLE `software`(
	`softwareId` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`sourceImg` varchar(1023) NOT NULL DEFAULT '',
	`descript` varchar(1023) NOT NULL DEFAULT '',
	`link` varchar(1023) NOT NULL DEFAULT '',
	`isDeleted` tinyint(1) NOT NULL DEFAULT '0',
	UNIQUE(`name`),
	PRIMARY KEY(`softwareId`)
);

CREATE TABLE `comment`(
	`commentId` INT NOT NULL AUTO_INCREMENT,
	`accountId`  INT NOT NULL,
	`softwareId` INT NOT NULL,
	`content` varchar(1023) NOT NULL,
	`isDeleted` tinyint(1) NOT NULL DEFAULT '0',
	FOREIGN KEY (`accountId`) REFERENCES `account`(`accountId`),
	FOREIGN KEY (`softwareId`) REFERENCES `software`(`softwareId`),
	PRIMARY KEY(`commentId`)
);

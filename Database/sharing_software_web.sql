-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 22, 2019 lúc 07:39 PM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.3.1
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `sharing_software_web`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `accountId` int(11) NOT NULL,
  `isAd` tinyint(1) NOT NULL DEFAULT '0',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL DEFAULT '',
  `lname` varchar(255) NOT NULL DEFAULT '',
  `sourceAvatar` varchar(1023) NOT NULL DEFAULT '',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4lat;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`accountId`, `isAd`, `username`, `password`, `email`, `fname`, `lname`, `sourceAvatar`, `isDeleted`) VALUES
(19, 0, '', '$2y$10$dWXld6cnYqIDBaHsM0XX.uovILPa/wlyigmweCtN1y6m9u/Ie3CvO', '', '', '', '', 0),
(20, 0, 'hellkinky', '$2y$10$.QhbKpe1FvXqRwEeqNVyouQvOOjKZJWRRXSpZKtu53zt9NMyfT7Iu', 'viettoan.bk1997@gmail.com', '', '', '', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `softwareId` int(11) NOT NULL,
  `content` varchar(1023) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `software`
--

CREATE TABLE `software` (
  `softwareId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sourceImg` varchar(1023) NOT NULL DEFAULT '',
  `descript` varchar(1023) NOT NULL DEFAULT '',
  `link` varchar(1023) NOT NULL DEFAULT '',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `software` (`softwareId`, `name`, `sourceImg`, `descript`, `link`, `isDeleted`) VALUES
(1, 'Visual studio 2012', 'http://www.iconarchive.com/download/i98390/dakirby309/simply-styled/Microsoft-Visual-Studio.ico', 'IDE l?p trình c?a Microsoft', '', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accountId`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `accountId` (`accountId`),
  ADD KEY `softwareId` (`softwareId`);

--
-- Chỉ mục cho bảng `software`
--
ALTER TABLE `software`
  ADD PRIMARY KEY (`softwareId`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `accountId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `software`
--
ALTER TABLE `software`
  MODIFY `softwareId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `account` (`accountId`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`softwareId`) REFERENCES `software` (`softwareId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

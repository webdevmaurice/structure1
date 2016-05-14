/*
SQLyog Community Edition- MySQL GUI v8.12 
MySQL - 5.5.5-10.1.10-MariaDB : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `test`;

/*Table structure for table `country` */

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(25) DEFAULT NULL,
  `language` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `country` */

/*Table structure for table `hub` */

DROP TABLE IF EXISTS `hub`;

CREATE TABLE `hub` (
  `hub_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_id` int(11) DEFAULT NULL,
  `hub_description` varchar(50) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  PRIMARY KEY (`hub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `hub` */

/*Table structure for table `resources` */

DROP TABLE IF EXISTS `resources`;

CREATE TABLE `resources` (
  `res_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`res_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `resources` */

/*Table structure for table `tarif` */

DROP TABLE IF EXISTS `tarif`;

CREATE TABLE `tarif` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_from` int(11) DEFAULT NULL,
  `country_to` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tarif` */

/*Table structure for table `travel` */

DROP TABLE IF EXISTS `travel`;

CREATE TABLE `travel` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `hid_from` int(11) DEFAULT NULL,
  `hid_to` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `travel` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `authentication_id` varchar(15) DEFAULT NULL,
  `bank_acc_number` varchar(14) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `users` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

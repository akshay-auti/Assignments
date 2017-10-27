-- MySQL dump 10.13  Distrib 5.6.16, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: TESTDB
-- ------------------------------------------------------
-- Server version	5.6.16-1~exp1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Books`
--

DROP TABLE IF EXISTS `Books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Books` (
  `Accno` varchar(50) NOT NULL DEFAULT '',
  `Author` varchar(50) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Type` varchar(50) NOT NULL,
  PRIMARY KEY (`Accno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Books`
--

LOCK TABLES `Books` WRITE;
/*!40000 ALTER TABLE `Books` DISABLE KEYS */;
/*!40000 ALTER TABLE `Books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bookuser`
--

DROP TABLE IF EXISTS `Bookuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bookuser` (
  `Regno` varchar(50) NOT NULL DEFAULT '',
  `Name` varchar(50) NOT NULL,
  `Issue_date` date NOT NULL,
  `Return_date` date NOT NULL,
  `Accno` varchar(50) NOT NULL,
  PRIMARY KEY (`Regno`),
  KEY `acc_no` (`Accno`),
  CONSTRAINT `Bookuser_ibfk_1` FOREIGN KEY (`Accno`) REFERENCES `Books` (`Accno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bookuser`
--

LOCK TABLES `Bookuser` WRITE;
/*!40000 ALTER TABLE `Bookuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bookuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EMPLOYEE`
--

DROP TABLE IF EXISTS `EMPLOYEE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EMPLOYEE` (
  `FIRST_NAME` varchar(100) NOT NULL,
  `LAST_NAME` varchar(100) DEFAULT NULL,
  `AGE` int(11) DEFAULT NULL,
  `SEX` varchar(8) DEFAULT NULL,
  `INCOME` int(11) NOT NULL,
  PRIMARY KEY (`FIRST_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EMPLOYEE`
--

LOCK TABLES `EMPLOYEE` WRITE;
/*!40000 ALTER TABLE `EMPLOYEE` DISABLE KEYS */;
/*!40000 ALTER TABLE `EMPLOYEE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Instaheading`
--

DROP TABLE IF EXISTS `Instaheading`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Instaheading` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SUBHEADING` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Instaheading`
--

LOCK TABLES `Instaheading` WRITE;
/*!40000 ALTER TABLE `Instaheading` DISABLE KEYS */;
INSERT INTO `Instaheading` VALUES (1,'Instagram'),(2,'Log in'),(3,''),(4,'Overview'),(5,'Authentication'),(6,'Login Permissions'),(7,'Permissions Review'),(8,'Sandbox Mode'),(9,'Secure Requests'),(10,'Endpoints'),(11,'Rate Limits'),(12,'Subscriptions'),(13,'Embedding'),(14,'Mobile Sharing'),(15,'Libraries'),(16,'Support'),(17,'Changelog'),(18,'Platform Policy'),(19,'The Instagram Graph API is Now Available to All Developers.'),(20,'For Non-Business Instagram Accounts please continue to use the existing Instagram API.'),(21,'Register Your Application'),(22,'dive into the documentation'),(23,'Register'),(24,'Authenticate'),(25,'authenticate'),(26,'authorize your application'),(27,'Start making requests!'),(28,'API Endpoints'),(29,'Platform Policy.'),(30,'About us'),(31,'Support'),(32,'Blog'),(33,'Press'),(34,'API'),(35,'Jobs'),(36,'Privacy'),(37,'Terms');
/*!40000 ALTER TABLE `Instaheading` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TWEET`
--

DROP TABLE IF EXISTS `TWEET`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TWEET` (
  `id` bigint(20) NOT NULL DEFAULT '0',
  `text` varchar(100) DEFAULT NULL,
  `no_of_tweets` int(11) NOT NULL,
  `no_of_friends` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TWEET`
--

LOCK TABLES `TWEET` WRITE;
/*!40000 ALTER TABLE `TWEET` DISABLE KEYS */;
INSERT INTO `TWEET` VALUES (923474700390428673,'hello',4,30),(923483172633006081,'hi...',4,30),(923551500881813506,'hey',4,30),(923552243856658432,'for testing',4,30);
/*!40000 ALTER TABLE `TWEET` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-27 12:23:14

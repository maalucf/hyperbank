-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: hyperbank
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Account`
--

DROP TABLE IF EXISTS `Account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Account` (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `balance` decimal(10,2) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`account_id`),
  KEY `fk_user_id` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Account`
--

LOCK TABLES `Account` WRITE;
/*!40000 ALTER TABLE `Account` DISABLE KEYS */;
INSERT INTO `Account` VALUES (1,11225.15,1),(11,14405.29,3),(12,14495.92,4),(13,10597.77,5),(14,14323.20,6),(15,12598.92,7),(16,14956.24,8),(17,16116.77,9),(18,12958.11,10),(19,16878.05,2);
/*!40000 ALTER TABLE `Account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
  `category_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (1,'Health'),(2,'Services'),(3,'Transport'),(4,'Food'),(5,'Shopping'),(6,'Other');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Income`
--

DROP TABLE IF EXISTS `Income`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Income` (
  `income_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`income_id`),
  KEY `fk_income_account_id` (`account_id`),
  CONSTRAINT `fk_income_account_id` FOREIGN KEY (`account_id`) REFERENCES `Account` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=450 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Income`
--

LOCK TABLES `Income` WRITE;
/*!40000 ALTER TABLE `Income` DISABLE KEYS */;
INSERT INTO `Income` VALUES (1,1,1000.00,'2023-01-01',NULL),(2,1,1500.00,'2023-02-01',NULL),(3,1,2000.00,'2023-03-01',NULL),(4,1,1200.00,'2023-04-01',NULL),(5,1,1800.00,'2023-05-01',NULL),(6,1,1300.00,'2023-06-01',NULL),(7,1,1700.00,'2023-07-01',NULL),(8,1,1100.00,'2023-08-01',NULL),(9,1,1900.00,'2023-09-01',NULL),(10,1,1600.00,'2023-10-01',NULL),(11,1,1400.00,'2023-11-01',NULL),(12,1,2200.00,'2023-12-01',NULL),(13,1,120.00,'2023-08-22',NULL),(342,11,1084.00,'2023-01-01',NULL),(343,12,2499.00,'2023-01-01',NULL),(344,13,1369.00,'2023-01-01',NULL),(345,14,1247.00,'2023-01-01',NULL),(346,15,1355.00,'2023-01-01',NULL),(347,16,2096.00,'2023-01-01',NULL),(348,17,1662.00,'2023-01-01',NULL),(349,18,1836.00,'2023-01-01',NULL),(350,19,1793.00,'2023-01-01',NULL),(351,11,1309.00,'2023-02-01',NULL),(352,12,1973.00,'2023-02-01',NULL),(353,13,1129.00,'2023-02-01',NULL),(354,14,1171.00,'2023-02-01',NULL),(355,15,1568.00,'2023-02-01',NULL),(356,16,2170.00,'2023-02-01',NULL),(357,17,1620.00,'2023-02-01',NULL),(358,18,1189.00,'2023-02-01',NULL),(359,19,2059.00,'2023-02-01',NULL),(360,11,2011.00,'2023-03-01',NULL),(361,12,2290.00,'2023-03-01',NULL),(362,13,1069.00,'2023-03-01',NULL),(363,14,1364.00,'2023-03-01',NULL),(364,15,2051.00,'2023-03-01',NULL),(365,16,1916.00,'2023-03-01',NULL),(366,17,1193.00,'2023-03-01',NULL),(367,18,1539.00,'2023-03-01',NULL),(368,19,2226.00,'2023-03-01',NULL),(369,11,1823.00,'2023-04-01',NULL),(370,12,1864.00,'2023-04-01',NULL),(371,13,1257.00,'2023-04-01',NULL),(372,14,2097.00,'2023-04-01',NULL),(373,15,1496.00,'2023-04-01',NULL),(374,16,2016.00,'2023-04-01',NULL),(375,17,2247.00,'2023-04-01',NULL),(376,18,1683.00,'2023-04-01',NULL),(377,19,1313.00,'2023-04-01',NULL),(378,11,1070.00,'2023-05-01',NULL),(379,12,1763.00,'2023-05-01',NULL),(380,13,1010.00,'2023-05-01',NULL),(381,14,1634.00,'2023-05-01',NULL),(382,15,1210.00,'2023-05-01',NULL),(383,16,1434.00,'2023-05-01',NULL),(384,17,1105.00,'2023-05-01',NULL),(385,18,1611.00,'2023-05-01',NULL),(386,19,1543.00,'2023-05-01',NULL),(387,11,2475.00,'2023-06-01',NULL),(388,12,2041.00,'2023-06-01',NULL),(389,13,2048.00,'2023-06-01',NULL),(390,14,2133.00,'2023-06-01',NULL),(391,15,1067.00,'2023-06-01',NULL),(392,16,1444.00,'2023-06-01',NULL),(393,17,2326.00,'2023-06-01',NULL),(394,18,1634.00,'2023-06-01',NULL),(395,19,1781.00,'2023-06-01',NULL),(396,11,2136.00,'2023-07-01',NULL),(397,12,2000.00,'2023-07-01',NULL),(398,13,1337.00,'2023-07-01',NULL),(399,14,2152.00,'2023-07-01',NULL),(400,15,1319.00,'2023-07-01',NULL),(401,16,1821.00,'2023-07-01',NULL),(402,17,1970.00,'2023-07-01',NULL),(403,18,1111.00,'2023-07-01',NULL),(404,19,1474.00,'2023-07-01',NULL),(405,11,2282.00,'2023-08-01',NULL),(406,12,2228.00,'2023-08-01',NULL),(407,13,2327.00,'2023-08-01',NULL),(408,14,1906.00,'2023-08-01',NULL),(409,15,2196.00,'2023-08-01',NULL),(410,16,1294.00,'2023-08-01',NULL),(411,17,1582.00,'2023-08-01',NULL),(412,18,2098.00,'2023-08-01',NULL),(413,19,2396.00,'2023-08-01',NULL),(414,11,1385.00,'2023-09-01',NULL),(415,12,1309.00,'2023-09-01',NULL),(416,13,2415.00,'2023-09-01',NULL),(417,14,1764.00,'2023-09-01',NULL),(418,15,2232.00,'2023-09-01',NULL),(419,16,1262.00,'2023-09-01',NULL),(420,17,2056.00,'2023-09-01',NULL),(421,18,1580.00,'2023-09-01',NULL),(422,19,1824.00,'2023-09-01',NULL),(423,11,1766.00,'2023-10-01',NULL),(424,12,1091.00,'2023-10-01',NULL),(425,13,1741.00,'2023-10-01',NULL),(426,14,1240.00,'2023-10-01',NULL),(427,15,1650.00,'2023-10-01',NULL),(428,16,2253.00,'2023-10-01',NULL),(429,17,1605.00,'2023-10-01',NULL),(430,18,1212.00,'2023-10-01',NULL),(431,19,1344.00,'2023-10-01',NULL),(432,11,1942.00,'2023-11-01',NULL),(433,12,1074.00,'2023-11-01',NULL),(434,13,1150.00,'2023-11-01',NULL),(435,14,1645.00,'2023-11-01',NULL),(436,15,1546.00,'2023-11-01',NULL),(437,16,1610.00,'2023-11-01',NULL),(438,17,1399.00,'2023-11-01',NULL),(439,18,1289.00,'2023-11-01',NULL),(440,19,2387.00,'2023-11-01',NULL),(441,11,1001.00,'2023-12-01',NULL),(442,12,1117.00,'2023-12-01',NULL),(443,13,1038.00,'2023-12-01',NULL),(444,14,2176.00,'2023-12-01',NULL),(445,15,1413.00,'2023-12-01',NULL),(446,16,1997.00,'2023-12-01',NULL),(447,17,2477.00,'2023-12-01',NULL),(448,18,1730.00,'2023-12-01',NULL),(449,19,1740.00,'2023-12-01',NULL);
/*!40000 ALTER TABLE `Income` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `update_balance_after_income` AFTER INSERT ON `Income` FOR EACH ROW BEGIN
    
    UPDATE Account
    SET balance = balance + NEW.amount
    WHERE account_id = NEW.account_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Method`
--

DROP TABLE IF EXISTS `Method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Method` (
  `method_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`method_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Method`
--

LOCK TABLES `Method` WRITE;
/*!40000 ALTER TABLE `Method` DISABLE KEYS */;
INSERT INTO `Method` VALUES (1,'Debit'),(2,'Credit'),(3,'Pix'),(4,'Deposit');
/*!40000 ALTER TABLE `Method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Transaction`
--

DROP TABLE IF EXISTS `Transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Transaction` (
  `transaction_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `city` varchar(255) NOT NULL,
  `category_id` int NOT NULL,
  `method_id` int NOT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `fk_category_id` (`category_id`),
  KEY `fk_method_id` (`method_id`),
  KEY `fk_account_id` (`account_id`),
  CONSTRAINT `fk_account_id` FOREIGN KEY (`account_id`) REFERENCES `Account` (`account_id`),
  CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `Category` (`category_id`),
  CONSTRAINT `fk_method_id` FOREIGN KEY (`method_id`) REFERENCES `Method` (`method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1321 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Transaction`
--

LOCK TABLES `Transaction` WRITE;
/*!40000 ALTER TABLE `Transaction` DISABLE KEYS */;
INSERT INTO `Transaction` VALUES (1,1,769.51,'2023-01-15','New York',3,2),(2,1,939.21,'2023-02-18','Los Angeles',4,4),(3,1,380.16,'2023-03-22','Chicago',4,2),(4,1,574.02,'2023-04-12','New York',4,2),(5,1,487.67,'2023-05-25','Houston',4,4),(6,1,225.05,'2023-06-14','Chicago',4,1),(7,1,357.21,'2023-07-19','Chicago',1,3),(8,1,200.67,'2023-08-03','Phoenix',3,3),(9,1,938.88,'2023-09-28','Philadelphia',5,4),(10,1,862.50,'2023-10-09','Chicago',6,4),(11,1,560.25,'2023-11-16','San Antonio',2,3),(12,1,222.75,'2023-12-05','Dallas',2,4),(13,1,193.21,'2023-06-05','Chicago',3,4),(14,1,883.76,'2023-07-16','Chicago',3,3),(1213,11,172.81,'2023-01-01','New York',5,1),(1214,11,209.84,'2023-02-01','Seattle',1,1),(1215,11,755.43,'2023-03-01','Boston',3,2),(1216,11,773.73,'2023-04-01','Seattle',2,4),(1217,11,591.99,'2023-05-01','Houston',4,2),(1218,11,120.65,'2023-06-01','Los Angeles',2,1),(1219,11,311.65,'2023-07-01','Phoenix',5,1),(1220,11,941.37,'2023-08-01','Miami',1,1),(1221,11,469.37,'2023-09-01','Houston',1,2),(1222,11,515.61,'2023-10-01','Los Angeles',1,4),(1223,11,27.02,'2023-11-01','Philadelphia',2,1),(1224,11,989.24,'2023-12-01','Chicago',6,3),(1225,12,130.23,'2023-01-01','Phoenix',5,4),(1226,12,239.05,'2023-02-01','San Francisco',3,1),(1227,12,890.72,'2023-03-01','San Francisco',3,4),(1228,12,114.52,'2023-04-01','Los Angeles',3,3),(1229,12,257.16,'2023-05-01','Chicago',6,4),(1230,12,942.57,'2023-06-01','Houston',5,3),(1231,12,960.02,'2023-07-01','Philadelphia',4,3),(1232,12,900.54,'2023-08-01','Philadelphia',1,4),(1233,12,521.50,'2023-09-01','Miami',3,3),(1234,12,1000.36,'2023-10-01','New York',5,2),(1235,12,505.24,'2023-11-01','Phoenix',1,1),(1236,12,291.17,'2023-12-01','Seattle',2,1),(1237,13,168.54,'2023-01-01','Houston',4,4),(1238,13,1083.93,'2023-02-01','Miami',3,1),(1239,13,495.48,'2023-03-01','New York',1,2),(1240,13,921.20,'2023-04-01','Phoenix',2,2),(1241,13,561.31,'2023-05-01','Los Angeles',2,2),(1242,13,792.62,'2023-06-01','Phoenix',1,1),(1243,13,671.38,'2023-07-01','Houston',5,2),(1244,13,353.57,'2023-08-01','Phoenix',5,2),(1245,13,841.59,'2023-09-01','Philadelphia',1,3),(1246,13,479.80,'2023-10-01','Boston',4,2),(1247,13,654.59,'2023-11-01','Philadelphia',6,2),(1248,13,268.22,'2023-12-01','Boston',1,4),(1249,14,136.92,'2023-01-01','Philadelphia',6,2),(1250,14,558.82,'2023-02-01','San Francisco',2,4),(1251,14,561.07,'2023-03-01','Los Angeles',2,3),(1252,14,702.00,'2023-04-01','Los Angeles',6,2),(1253,14,1011.01,'2023-05-01','Phoenix',4,3),(1254,14,594.30,'2023-06-01','Houston',3,3),(1255,14,468.18,'2023-07-01','Phoenix',6,1),(1256,14,230.84,'2023-08-01','Seattle',2,2),(1257,14,119.40,'2023-09-01','Chicago',3,3),(1258,14,780.54,'2023-10-01','Miami',3,3),(1259,14,81.95,'2023-11-01','New York',2,2),(1260,14,960.77,'2023-12-01','Chicago',6,1),(1261,15,269.41,'2023-01-01','Chicago',6,4),(1262,15,533.67,'2023-02-01','Los Angeles',3,4),(1263,15,512.43,'2023-03-01','Los Angeles',6,4),(1264,15,208.09,'2023-04-01','Los Angeles',4,2),(1265,15,856.48,'2023-05-01','Philadelphia',3,3),(1266,15,603.72,'2023-06-01','Seattle',3,4),(1267,15,702.28,'2023-07-01','Miami',4,3),(1268,15,541.23,'2023-08-01','Seattle',6,2),(1269,15,930.45,'2023-09-01','Houston',1,2),(1270,15,773.68,'2023-10-01','San Francisco',6,3),(1271,15,169.83,'2023-11-01','Philadelphia',2,2),(1272,15,402.81,'2023-12-01','Miami',4,2),(1273,16,1043.44,'2023-01-01','Houston',4,4),(1274,16,180.42,'2023-02-01','San Francisco',3,1),(1275,16,326.93,'2023-03-01','Miami',1,2),(1276,16,212.99,'2023-04-01','New York',3,4),(1277,16,367.18,'2023-05-01','Boston',2,2),(1278,16,1091.32,'2023-06-01','Seattle',5,2),(1279,16,18.39,'2023-07-01','Boston',3,2),(1280,16,981.36,'2023-08-01','San Francisco',2,2),(1281,16,372.62,'2023-09-01','Chicago',3,3),(1282,16,129.03,'2023-10-01','Boston',4,2),(1283,16,877.45,'2023-11-01','Philadelphia',4,1),(1284,16,755.63,'2023-12-01','Los Angeles',1,1),(1285,17,799.06,'2023-01-01','Miami',3,1),(1286,17,145.90,'2023-02-01','Phoenix',1,3),(1287,17,381.61,'2023-03-01','Miami',1,2),(1288,17,444.24,'2023-04-01','Los Angeles',4,4),(1289,17,97.26,'2023-05-01','Chicago',5,3),(1290,17,250.14,'2023-06-01','Philadelphia',4,1),(1291,17,374.00,'2023-07-01','Philadelphia',3,3),(1292,17,951.10,'2023-08-01','Seattle',1,4),(1293,17,124.59,'2023-09-01','Boston',1,3),(1294,17,692.72,'2023-10-01','Houston',6,4),(1295,17,713.02,'2023-11-01','Seattle',1,2),(1296,17,151.59,'2023-12-01','San Francisco',6,2),(1297,18,835.42,'2023-01-01','Boston',6,4),(1298,18,405.86,'2023-02-01','Houston',2,2),(1299,18,241.08,'2023-03-01','Boston',1,3),(1300,18,211.33,'2023-04-01','New York',5,4),(1301,18,961.04,'2023-05-01','Houston',6,2),(1302,18,925.69,'2023-06-01','Houston',5,2),(1303,18,451.31,'2023-07-01','Philadelphia',2,1),(1304,18,19.34,'2023-08-01','Miami',6,2),(1305,18,393.30,'2023-09-01','Phoenix',1,2),(1306,18,277.76,'2023-10-01','San Francisco',2,1),(1307,18,597.46,'2023-11-01','Boston',1,4),(1308,18,234.30,'2023-12-01','Boston',6,1),(1309,19,139.42,'2023-01-01','Boston',1,1),(1310,19,94.99,'2023-02-01','Los Angeles',4,4),(1311,19,1026.86,'2023-03-01','Chicago',1,1),(1312,19,272.22,'2023-04-01','Boston',4,3),(1313,19,88.24,'2023-05-01','Houston',1,4),(1314,19,10.07,'2023-06-01','San Francisco',4,3),(1315,19,182.80,'2023-07-01','San Francisco',6,4),(1316,19,714.11,'2023-08-01','Phoenix',6,4),(1317,19,1009.64,'2023-09-01','Seattle',1,2),(1318,19,175.88,'2023-10-01','Houston',5,1),(1319,19,867.41,'2023-11-01','Seattle',4,2),(1320,19,420.31,'2023-12-01','Houston',4,3);
/*!40000 ALTER TABLE `Transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `update_balance_after_transaction` AFTER INSERT ON `Transaction` FOR EACH ROW BEGIN
    
    UPDATE Account
    SET balance = balance - NEW.amount
    WHERE account_id = NEW.account_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'John Doe','password123','john@example.com','12345678900'),(2,'Jane Smith','password123','jane@example.com','98765432100'),(3,'Alice Smith','password123','alice@example.com','85254786523'),(4,'Bob Johnson','password123','bob@example.com','45612378900'),(5,'Charlie Brown','password123','charlie@example.com','78912345600'),(6,'Diana Clark','password123','diana@example.com','32165498700'),(7,'Eva Garcia','password123','eva@example.com','65498732100'),(8,'Frank Wilson','password123','frank@example.com','14725836900'),(9,'Grace Martinez','password123','grace@example.com','25836914700'),(10,'Henry Lee','password123','henry@example.com','36914725800');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-03 21:50:46

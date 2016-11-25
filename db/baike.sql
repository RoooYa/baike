/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : baike

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2016-11-25 13:48:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for happy
-- ----------------------------
DROP TABLE IF EXISTS `happy`;
CREATE TABLE `happy` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `text` text NOT NULL,
  `happyClassId` int(11) NOT NULL,
  `readNumber` int(11) NOT NULL DEFAULT '0' COMMENT '阅读数',
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `source` varchar(50) DEFAULT NULL COMMENT '来源',
  `sourceHref` varchar(100) DEFAULT NULL COMMENT '来源链接',
  `describe` varchar(255) DEFAULT NULL COMMENT '一段话描述',
  `img` varchar(255) DEFAULT NULL COMMENT '配图',
  `video` varchar(255) DEFAULT NULL COMMENT '视频地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of happy
-- ----------------------------
INSERT INTO `happy` VALUES ('1', null, 'qweqwe', '1', '0', '2016-11-24 17:02:03', null, null, null, null, null);
INSERT INTO `happy` VALUES ('2', null, 'qweqweqweq123123123qweqwe123123', '1', '0', '2016-11-24 17:02:06', null, null, null, null, null);
INSERT INTO `happy` VALUES ('3', null, '阿斯蒂芬撒的发安抚萨芬的沙发', '1', '0', '2016-11-24 17:08:17', null, null, null, null, null);

-- ----------------------------
-- Table structure for happyclass
-- ----------------------------
DROP TABLE IF EXISTS `happyclass`;
CREATE TABLE `happyclass` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of happyclass
-- ----------------------------
INSERT INTO `happyclass` VALUES ('1', '内涵', '2016-11-24 17:01:50');
INSERT INTO `happyclass` VALUES ('2', '搞笑', '2016-11-24 17:19:30');
INSERT INTO `happyclass` VALUES ('3', '美女', '2016-11-25 12:45:42');

-- ----------------------------
-- Table structure for health
-- ----------------------------
DROP TABLE IF EXISTS `health`;
CREATE TABLE `health` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `healthClassId` int(11) NOT NULL,
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(100) DEFAULT NULL,
  `text` text NOT NULL,
  `readNumber` int(11) NOT NULL DEFAULT '0' COMMENT '阅读数',
  `source` varchar(50) DEFAULT NULL COMMENT '来源',
  `sourceHref` varchar(100) DEFAULT NULL COMMENT '来源链接',
  `describe` varchar(255) DEFAULT NULL COMMENT '一段话描述',
  `img` varchar(255) DEFAULT NULL COMMENT '配图',
  `video` varchar(255) DEFAULT NULL COMMENT '视频地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of health
-- ----------------------------
INSERT INTO `health` VALUES ('1', '0', '2016-11-25 12:48:39', null, '123', '0', null, null, null, null, null);

-- ----------------------------
-- Table structure for healthclass
-- ----------------------------
DROP TABLE IF EXISTS `healthclass`;
CREATE TABLE `healthclass` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of healthclass
-- ----------------------------
INSERT INTO `healthclass` VALUES ('1', '', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for life
-- ----------------------------
DROP TABLE IF EXISTS `life`;
CREATE TABLE `life` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `lifeClassId` int(11) NOT NULL,
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(100) DEFAULT NULL,
  `text` text NOT NULL,
  `readNumber` int(11) NOT NULL DEFAULT '0' COMMENT '阅读数',
  `source` varchar(50) DEFAULT NULL COMMENT '来源',
  `sourceHref` varchar(100) DEFAULT NULL COMMENT '来源链接',
  `describe` varchar(255) DEFAULT NULL COMMENT '一段话描述',
  `img` varchar(255) DEFAULT NULL COMMENT '配图',
  `video` varchar(255) DEFAULT NULL COMMENT '视频地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of life
-- ----------------------------
INSERT INTO `life` VALUES ('1', '0', '0000-00-00 00:00:00', null, '', '0', null, null, null, null, null);

-- ----------------------------
-- Table structure for lifeclass
-- ----------------------------
DROP TABLE IF EXISTS `lifeclass`;
CREATE TABLE `lifeclass` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lifeclass
-- ----------------------------
INSERT INTO `lifeclass` VALUES ('1', '', '0000-00-00 00:00:00');

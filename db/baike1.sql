/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : baike

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2016-11-25 16:38:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', '生活常识', '2016-11-25 16:09:55');
INSERT INTO `class` VALUES ('2', '健康养生', '2016-11-25 16:09:05');
INSERT INTO `class` VALUES ('3', '休闲娱乐', '2016-11-25 16:10:06');

-- ----------------------------
-- Table structure for twoclass
-- ----------------------------
DROP TABLE IF EXISTS `twoclass`;
CREATE TABLE `twoclass` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `classId` int(11) NOT NULL COMMENT '一级分类ID',
  `name` varchar(255) NOT NULL COMMENT '二级分类名称',
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of twoclass
-- ----------------------------
INSERT INTO `twoclass` VALUES ('1', '3', '美女的诱惑', '2016-11-25 16:14:05');

-- ----------------------------
-- Table structure for word
-- ----------------------------
DROP TABLE IF EXISTS `word`;
CREATE TABLE `word` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `text` text NOT NULL,
  `classId` int(11) NOT NULL,
  `twoClassId` int(11) NOT NULL COMMENT '二级分类id',
  `readNumber` int(11) NOT NULL DEFAULT '0' COMMENT '阅读数',
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `source` varchar(50) DEFAULT NULL COMMENT '来源',
  `sourceHref` varchar(100) DEFAULT NULL COMMENT '来源链接',
  `describe` varchar(255) DEFAULT NULL COMMENT '一段话描述',
  `img` varchar(255) DEFAULT NULL COMMENT '配图',
  `video` varchar(255) DEFAULT NULL COMMENT '视频地址',
  `like` int(11) NOT NULL DEFAULT '0' COMMENT '喜欢',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of word
-- ----------------------------
INSERT INTO `word` VALUES ('1', '请问切翁', 'qweqwe', '1', '0', '0', '2016-11-25 16:04:41', null, null, 'qweqweqe', 'qwe', null, '0');
INSERT INTO `word` VALUES ('2', '请问切翁', 'qweqweqweq123123123qweqwe123123', '1', '0', '0', '2016-11-25 16:04:41', null, null, 'qweqeqwe', 'we', null, '0');
INSERT INTO `word` VALUES ('3', '请问请问', '阿斯蒂芬撒的发安抚萨芬的沙发', '1', '0', '0', '2016-11-25 16:04:44', null, null, 'qweqweqwe', 'qe', null, '0');

/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : baike

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2016-12-29 09:22:39
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of twoclass
-- ----------------------------
INSERT INTO `twoclass` VALUES ('1', '3', '极致美女', '2016-12-26 18:20:33');
INSERT INTO `twoclass` VALUES ('3', '3', '经典台词', '2016-12-26 13:57:44');
INSERT INTO `twoclass` VALUES ('4', '1', '生活妙招', '2016-12-26 18:18:42');
INSERT INTO `twoclass` VALUES ('5', '2', '健康常识', '2016-12-26 18:20:02');
INSERT INTO `twoclass` VALUES ('6', '3', '超级搞笑', '2016-12-27 10:13:34');
INSERT INTO `twoclass` VALUES ('7', '2', '食疗一对一', '2016-12-27 10:10:55');
INSERT INTO `twoclass` VALUES ('8', '2', '健康小茶包', '2016-12-27 10:11:07');

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
  `dataTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `source` varchar(50) DEFAULT NULL COMMENT '来源',
  `sourceHref` varchar(100) DEFAULT NULL COMMENT '来源链接',
  `describe` varchar(255) DEFAULT NULL COMMENT '一段话描述',
  `img` varchar(255) DEFAULT NULL COMMENT '配图',
  `video` varchar(255) DEFAULT NULL COMMENT '视频地址',
  `like` int(11) NOT NULL DEFAULT '0' COMMENT '喜欢',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of word
-- ----------------------------
INSERT INTO `word` VALUES ('10', '阿斯顿发', '阿斯顿发阿斯顿发飞洒地方', '3', '1', '13', '2016-12-27 19:18:48', null, null, '阿斯顿发', '/img/upload/1481095465563.png', null, '0');
INSERT INTO `word` VALUES ('11', '1111111111111111111111111111111111111111', 'dddddddddddddddddddddddddddddddddddddddddddd', '3', '1', '5', '2016-12-08 14:57:52', null, null, '2222222222222222222', '/img/upload/1481180267881.png', null, '1');
INSERT INTO `word` VALUES ('12', '111111111111111111111111', 'asdfasdf', '3', '1', '0', '2016-12-08 15:02:24', null, null, 'asdf', '/img/upload/1481180541988.png', null, '0');
INSERT INTO `word` VALUES ('13', 'asdf', 'asdf', '3', '1', '0', '2016-12-08 15:02:57', null, null, 'asdf', '/img/upload/1481180574598.png', null, '0');
INSERT INTO `word` VALUES ('14', 'd', 'd', '3', '1', '0', '2016-12-08 15:03:34', null, null, 'asd', '/img/upload/1481180611934.png', null, '0');
INSERT INTO `word` VALUES ('15', '阿斯蒂芬', '<p><img src=\"http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0b/tootha_thumb.gif\"><img src=\"http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif\"><img src=\"http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif\"><br></p><p><br></p>', '3', '3', '12', '2016-12-27 19:18:52', null, null, '阿斯蒂芬', '/img/upload/1482736743513.png', null, '0');
INSERT INTO `word` VALUES ('16', '第一篇文章', '<p><em>懒人周报，带您回顾上周创意界都发生了什么。奇思妙想，热点趣闻，精彩广告，顶尖设计皆收入囊中，小案例也能激发大灵感，一起透过创意万花筒看世界。</em></p><p><img style=\"max-width:100%;\" src=\"http://www.topys.cn/attachments/1612/26/58606aba36295.png\"><em><br></em></p><p><strong>1.加拿大一家公司推出四人座驾雪橇车</strong></p><p>对于寒冷地区的人们来说，战胜冬天的最好办法，就是enjoy it！加拿大魁北克Imaginactive公司推出了一款超酷的雪橇车，名为White Fox白狐，可换挡可刹车，四座设计适合全家一起出行冒险。不光外型时尚，车内还设有保暖装置、行李架等人性化功能，弹出式滑轮便于破冰开道。</p><p>“白狐”目前只是概念车，但纵情享受冰天雪地的乐趣也指日可待了。</p><p><img style=\"max-width:100%;\" src=\"http://www.topys.cn/attachments/1612/25/585fc4e1abea5.jpg\"><br></p><p><strong>2.Nike鞋也变emoji表情包了</strong></p><p>擅长超现实主义插画的英国设计师Chris Labrooy把 Nike 的 Flyknit 鞋做成了 emoji&nbsp;的样子。把现实事物进行夸张或扭曲化表达，年轻一代对运动鞋外观的印象更深，也更易辨别。还挺有趣~</p><p><br></p>', '1', '4', '142', '2016-12-27 19:23:14', null, null, '阿斯蒂芬阿斯蒂芬暗室逢灯阿斯蒂芬', '/img/upload/1482836287707.png', null, '3');
INSERT INTO `word` VALUES ('17', 'asdf', '<p>asdfasfd</p><p>asfd</p><p>asfd</p><p>234</p><p>234</p><p>234</p><p>234</p><p>234</p>', '2', '7', '25', '2016-12-27 19:25:38', null, null, 'asfd', '/img/upload/1482837929737.png', null, '2');

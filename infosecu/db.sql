
CREATE DATABASE IF NOT EXISTS `koreaspa` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'korea'@'%' IDENTIFIED BY 'iz_one_permanent';
GRANT ALL PRIVILEGES ON `koreaspa`.* TO 'korea'@'%'; 
FLUSH PRIVILEGES;

USE `koreaspa`;

CREATE TABLE IF NOT EXISTS `users`(
  `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id` VARCHAR(128),
  `password` VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS `board`(
  `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(256),
  `category` VARCHAR(256),
  `content` TEXT,
  `file` VARCHAR(512),
  `author` VARCHAR(128)
);
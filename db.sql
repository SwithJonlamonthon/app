-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema app_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema app_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `app_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `app_db` ;

-- -----------------------------------------------------
-- Table `app_db`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_db`.`user` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `app_db`.`wallet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_db`.`wallet` (
  `idwallet` INT NOT NULL,
  `total` INT(10) UNSIGNED ZEROFILL NOT NULL,
  INDEX `idwallet_idx` (`idwallet` ASC) VISIBLE,
  CONSTRAINT `idwallet`
    FOREIGN KEY (`idwallet`)
    REFERENCES `app_db`.`user` (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `app_db`.`income`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_db`.`income` (
  `incomeid` INT NOT NULL,
  `income` INT(10) UNSIGNED ZEROFILL NOT NULL,
  `date` DATE NULL DEFAULT NULL,
  `billpic` TINYBLOB NULL DEFAULT NULL,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`incomeid`),
  CONSTRAINT `incomeid`
    FOREIGN KEY (`incomeid`)
    REFERENCES `app_db`.`wallet` (`idwallet`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `app_db`.`outcome`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `app_db`.`outcome` (
  `outcomeid` INT NOT NULL,
  `outcome` INT(10) UNSIGNED ZEROFILL NOT NULL,
  `date` DATE NULL DEFAULT NULL,
  `billpic` TINYBLOB NULL DEFAULT NULL,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`outcomeid`),
  CONSTRAINT `outcomeid`
    FOREIGN KEY (`outcomeid`)
    REFERENCES `app_db`.`wallet` (`idwallet`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

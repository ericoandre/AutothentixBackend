-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Maio-2020 às 22:58
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `api`
--
CREATE DATABASE IF NOT EXISTS `api` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `api`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco`
--

CREATE TABLE IF NOT EXISTS `endereco` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `uf` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `juridic_person`
--

CREATE TABLE IF NOT EXISTS `juridic_person` (
  `cnpj` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `end_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`cnpj`),
  KEY `user_id` (`user_id`),
  KEY `end_id` (`end_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `natural_person`
--

CREATE TABLE IF NOT EXISTS `natural_person` (
  `cpf` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birthdate` datetime NOT NULL,
  `sex` enum('O','M','F') NOT NULL DEFAULT 'O',
  `phone` varchar(255) NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `end_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`cpf`),
  KEY `user_id` (`user_id`),
  KEY `end_id` (`end_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `juridic_person`
--
ALTER TABLE `juridic_person`
  ADD CONSTRAINT `juridic_person_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `juridic_person_ibfk_2` FOREIGN KEY (`end_id`) REFERENCES `endereco` (`id`);

--
-- Limitadores para a tabela `natural_person`
--
ALTER TABLE `natural_person`
  ADD CONSTRAINT `natural_person_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `natural_person_ibfk_2` FOREIGN KEY (`end_id`) REFERENCES `endereco` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2020 at 12:30 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reporting`
--

-- --------------------------------------------------------

--
-- Table structure for table `incidents`
--

CREATE TABLE `incidents` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` varchar(355) NOT NULL,
  `media` varchar(225) NOT NULL,
  `location` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `emergency` varchar(255) NOT NULL,
  `anonymous` varchar(255) NOT NULL,
  `status` varchar(166) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `incidents`
--

INSERT INTO `incidents` (`id`, `email`, `type`, `description`, `media`, `location`, `time`, `emergency`, `anonymous`, `status`) VALUES
(98, 'vic', 'Bad Road Condition', 'Man', '', 'Hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', 'Thursday 20th of August 2020 16:18:12 PM', 'No', 'Show Personal Details', 'Unseen'),
(99, 'vic', 'Road Accident', 'Grave', '', 'Cemetery', 'Thursday 20th of August 2020 16:19:17 PM', 'Yes', 'Show Personal Details', 'Unseen'),
(102, 'men', 'Bad Road Condition', 'Very bad', '', 'Oja-odan', 'Tuesday 25th of August 2020 05:22:10 AM', 'Yes', 'Hide Personal Details', 'Unseen'),
(103, 'ola', 'Harrasement', 'Ola', '', 'Ola', 'Tuesday 25th of August 2020 11:13:51 AM', 'Yes', 'Show Personal Details', 'Unseen'),
(104, 'vic', 'Bad Road Condition', 'Hshsh', '', 'BHhahss', 'Tuesday 25th of August 2020 11:18:05 AM', 'Yes', 'Hide Personal Details', 'Unseen');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_reg`
--

CREATE TABLE `user_reg` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_reg`
--

INSERT INTO `user_reg` (`id`, `name`, `email`, `phone`, `password`, `status`) VALUES
(5, 'ola', 'ola', 'ola', 'ola', 'Offline'),
(6, 'yoi', 'yoi', 'yoi', 'you', ''),
(7, 'vic', 'vic', 'vic', '080', 'Offline'),
(8, 'yem', '@yem', '080', 'pass', ''),
(9, 'good', 'good', 'good', 'good', 'Offline'),
(10, 'hshsj', 'uwuw', 'uwusu', 'hwhwh', ''),
(11, 'uwiwi', 'uwuwuw', 'jsjsj', 'jsjsj', ''),
(12, 'man', 'man', '1234', '99999', ''),
(13, 'fpi', 'fpi', '0807', 'fpi', 'Offline'),
(14, 'gagahshs', 'grace@gmail.com', '848484', 'jdjdjd', ''),
(15, 'kemi', 'kemi@gmail.com', '080808080807', '1234', ''),
(16, 'daddy', 'daddy@gmail.com', '0505059594', '1244', ''),
(17, 'hod', 'hod@gmail.com', '959595955858', '1234', ''),
(18, 'grave', 'graver', '94848484', '1234', ''),
(19, 'yes', 'yes@gmail.com', '04049494', '1234', ''),
(20, 'kit', 'kit@gmail.com', '07077070', '1234', ''),
(22, 'pop', 'pop@gmail.com', '080', 'pop', ''),
(23, 'user', 'user', 'user', '080', ''),
(24, 'use', 'use', 'use', '777777', ''),
(25, 'admin', 'admin', '02020', 'admin', 'Offline'),
(26, 'men', 'men', '080', '123', 'Offline');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `incidents`
--
ALTER TABLE `incidents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_reg`
--
ALTER TABLE `user_reg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `incidents`
--
ALTER TABLE `incidents`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `user_login`
--
ALTER TABLE `user_login`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_reg`
--
ALTER TABLE `user_reg`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

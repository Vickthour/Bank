-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2020 at 12:29 PM
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
-- Database: `esystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `msg`
--

CREATE TABLE `msg` (
  `id` int(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `user2` varchar(255) NOT NULL,
  `msg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `msg`
--

INSERT INTO `msg` (`id`, `user`, `user2`, `msg`) VALUES
(1, 'grace', 'poodid', 'gdgdgdg'),
(2, 'olabanjivictor37@gmail.com', '', 'XXXX'),
(5, 'yemmy', 'Mum@gmail.com', 'How are you?\n'),
(10, 'yemmy', 'Mum@gmail.com', 'finr'),
(11, 'yemmy', 'Mum@gmail.com', 'hxhx'),
(12, 'yemmy', 'Mum@gmail.com', 'hxhhx\n'),
(15, 'jay@gmail.com', 'Jay@gmail.com', 'hhs'),
(16, 'jay@gmail.com', 'Jay@gmail.com', 'hhhc'),
(17, 'jay@gmail.com', 'Jay@gmail.com', 'hdhdh'),
(18, 'jay@gmail.com', 'Jay@gmail.com', 'bababab'),
(20, 'jay', 'Jay@gmail.com', 'grace'),
(32, 'jay', 'Jay@gmail.com', 'Blessed'),
(33, 'jay', 'Jay@gmail.com', 'grace'),
(34, 'jay', 'Jay@gmail.com', 'Ibadan'),
(35, 'jay', 'Jay@gmail.com', 'Grace');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `height` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `strength` varchar(255) NOT NULL,
  `foodclass` varchar(255) NOT NULL,
  `eatinterval` varchar(255) NOT NULL,
  `gym` varchar(255) NOT NULL,
  `options` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `name`, `sex`, `age`, `height`, `weight`, `strength`, `foodclass`, `eatinterval`, `gym`, `options`) VALUES
(1, 'Victor', 'Female', '15', '45', '11', '64', 'Miniral Salt', '3', 'Often', 'OnMedications'),
(2, 'jay', 'Transgender', '17', '77', '99', '19', 'Roughages', '4+', 'Regularly', 'Fruits'),
(3, 'jay', 'Transgender', '17', '77', '99', '19', 'Roughages', '4+', 'Regularly', 'Fruits');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `name` varchar(233) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `pass`, `status`) VALUES
(1, 'victor', 'olabanji37@gmail.com', '', 'Online'),
(2, 'garce', 'lover@gmail.com', '', 'online'),
(3, 'Victor', 'obasekitheresa@gmail.com', 'nice', ''),
(4, '', 'obasekitheresa@gmail.com', 'nice', ''),
(5, 'Victor', 'obasekitheresa@gmail.com', 'nice', ''),
(6, 'ABC', 'oba@gmail.com', 'hhghgh', ''),
(7, 'A  B   C', 'oba@gmail.com', 's', ''),
(8, 'man', 'man@gmail.com', 'grace', ''),
(9, 'man', 'oba@gmail.com', 'hh', ''),
(10, 'man', 'oba@gmail.com', 'hh', ''),
(11, 'bb', 'lollyfloxygmail.com', '9a281eea0823964dfb2915823c248417', ''),
(12, 'ou', 'bodgmail.com', 'f27f6f1c7c5cbf4e3e192e0a47b85300', ''),
(13, 'bb', 'bbbgmail.com', '4982b37aa4ff1d1761d9567323d2cf38', ''),
(14, 'Victor', 'olagmail.com', '2fe04e524ba40505a82e03a2819429cc', ''),
(15, 'cop', 'copgmail.com', 'aa3ef5b6ebb78d184429cab1ec2ab521', ''),
(16, 'yemmy', 'yemmygmail.com', 'd65ba770c5d4d2731a7befb2a47fcce3', ''),
(17, 'Victor', '', '9336ebf25087d91c818ee6e9ec29f8c1', ''),
(18, 'Victor', 'olabanjivictor37gmailcom', '3691308f2a4c2f6983f2880d32e29c84', ''),
(19, 'Victor', 'olabanjivictor37@gmail.com', '3691308f2a4c2f6983f2880d32e29c84', ''),
(20, 'Victor', 'olabanjivictor378@gmail.com', '9336ebf25087d91c818ee6e9ec29f8c1', ''),
(21, 'Mum', 'mum@gmail.com', '63cd0b85fb56ae8cc6496c1d56599ebc', ''),
(22, 'jay', 'jay@gmail.com', 'baba327d241746ee0829e7e88117d4d5', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `msg`
--
ALTER TABLE `msg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `msg`
--
ALTER TABLE `msg`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

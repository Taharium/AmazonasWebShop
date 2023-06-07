-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 30. Mai 2023 um 15:42
-- Server-Version: 10.4.25-MariaDB
-- PHP-Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `amazonas_webshop`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `address`
--

CREATE TABLE `address` (
  `addr_ID` int(11) NOT NULL,
  `street` varchar(255) NOT NULL,
  `housenumber` int(11) NOT NULL,
  `doornumber` int(11) NOT NULL,
  `postal_code` smallint(6) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `address`
--

INSERT INTO `address` (`addr_ID`, `street`, `housenumber`, `doornumber`, `postal_code`, `city`) VALUES
(1, 'Kerkstraat', 5, 3, 9000, 'Gent'),
(2, 'Oudenaardsesteenweg', 45, 0, 9000, 'Gent'),
(3, 'Kapucijnenstraat', 3, 0, 9000, 'Gent'),
(4, 'Sint-Pietersnieuwstraat', 39, 0, 9000, 'Gent'),
(5, 'Dok Noord', 1, 0, 9000, 'Gent'),
(6, 'teststraße', 1, 2, 1100, 'Wien');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `basket`
--

CREATE TABLE `basket` (
  `fk_user_ID` int(11) NOT NULL,
  `fk_prod_ID` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `order`
--

CREATE TABLE `order` (
  `r_ID` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` tinyint(4) NOT NULL,
  `fk_user_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `order`
--

INSERT INTO `order` (`r_ID`, `date`, `status`, `fk_user_ID`) VALUES
(1, '2018-12-05 14:00:00', 1, 1),
(2, '2018-12-05 14:00:00', 1, 2),
(3, '2018-12-05 14:00:00', 1, 3),
(4, '2018-12-05 14:00:00', 1, 4),
(5, '2018-12-05 14:00:00', 1, 5);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ordered_products`
--

CREATE TABLE `ordered_products` (
  `fk_prod_ID` int(11) NOT NULL,
  `fk_r_ID` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `ordered_products`
--

INSERT INTO `ordered_products` (`fk_prod_ID`, `fk_r_ID`, `amount`) VALUES
(1, 1, 4),
(2, 2, 6),
(3, 3, 7),
(4, 4, 2),
(5, 5, 3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `person`
--

CREATE TABLE `person` (
  `pers_ID` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fk_addr_ID` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `person`
--

INSERT INTO `person` (`pers_ID`, `email`, `fk_addr_ID`, `firstname`, `lastname`) VALUES
(1, 'hello@hel.com', 1, 'M', 'Mou'),
(2, 'gel@g.com', 2, 'D', 'Dra'),
(3, 'fel@p.com', 3, 'F', 'Fel'),
(4, 'ch@l.com', 4, 'L', 'Leo'),
(5, 'dok@m.com', 5, 'K', 'Kra'),
(6, 'test@test.at', 6, 'C', 'L');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `product`
--

CREATE TABLE `product` (
  `prod_ID` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `product`
--

INSERT INTO `product` (`prod_ID`, `description`, `price`, `product_name`, `stock`, `picture`) VALUES
(1, 'Ein kleines Aquarium', 100, 'Aquarium klein', 10, '../../pictures/aqaruium/superfish_home_80_schwarz.png'),
(2, 'Ein großes Aquarium', 150, 'Aquarium groß', 10, '../../pictures/aqaruium/1576438_4023040_WE_FS_001_JuAqKombiRio125Weiss.png'),
(3, 'Das ist ein Tempel für ein Aquarium', 30, 'Aquarium Dekoration Tempel', 30, '../../pictures/decoration/aquarium-dekoration-tempel-ankor-wat.png'),
(4, 'Das ist ein Moosfelsen für ein Aquarium', 35, 'Moosfelsen', 30, '../../pictures/decoration/relaxdays-aquarium-aquarium-deko-felsen.png'),
(5, 'Ein Regenbogenfisch für ein Aquarium', 30, 'Regenbogenfisch', 10, '../../pictures/fish/low-maintenance-freshwater-fish-4770223-hero-ffb66c229c194e2db4916e88bbd17a15.jpg'),
(6, 'Ein Pufferfisch für ein Aquarium', 100, 'Pufferfisch', 10, '../../pictures/fish/pufferfish-closeup_16x9.png'),
(7, 'Ernährungsbedingt balanciertes Futter für kleine Fische', 10, 'Tropical Granules', 50, '../../pictures/food/productimg.png'),
(8, 'Komplettes Futter für tropische Fische', 15, 'Micro Granules', 50, '../../pictures/food/81gbYPINw8L.png'),
(9, 'Filtert Wasser für Fische --> gesund', 50, 'Micra Pumpe', 50, '../../pictures/pumps/sicce-micra-plus-aquarium-pump--158-gph--99.png'),
(10, 'Filtert Wasser für Fische --> gesund', 50, 'Eheim Pumpe', 50, '../../pictures/pumps/178495_2.png');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `user_ID` int(11) NOT NULL,
  `fk_pers_ID` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`user_ID`, `fk_pers_ID`, `password`, `is_active`) VALUES
(1, 1, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 1),
(2, 2, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 1),
(3, 3, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 1),
(4, 4, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 1),
(5, 5, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 1),
(6, 6, '$2y$10$1nFNElaVjif..JUOUFzCN.UUAyd3lhikjqAQQu6pvfcu/F.bJUAx6', 1);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`addr_ID`);

--
-- Indizes für die Tabelle `basket`
--
ALTER TABLE `basket`
  ADD KEY `fk_user_ID` (`fk_user_ID`),
  ADD KEY `fk_prod_ID` (`fk_prod_ID`);

--
-- Indizes für die Tabelle `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`r_ID`),
  ADD KEY `fk_user_ID` (`fk_user_ID`);

--
-- Indizes für die Tabelle `ordered_products`
--
ALTER TABLE `ordered_products`
  ADD KEY `fk_prod_ID` (`fk_prod_ID`),
  ADD KEY `fk_r_ID` (`fk_r_ID`);

--
-- Indizes für die Tabelle `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`pers_ID`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_addr_ID` (`fk_addr_ID`);

--
-- Indizes für die Tabelle `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prod_ID`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_ID`),
  ADD KEY `fk_pers_ID` (`fk_pers_ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `address`
--
ALTER TABLE `address`
  MODIFY `addr_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `order`
--
ALTER TABLE `order`
  MODIFY `r_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT für Tabelle `person`
--
ALTER TABLE `person`
  MODIFY `pers_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `product`
--
ALTER TABLE `product`
  MODIFY `prod_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `user_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`fk_user_ID`) REFERENCES `user` (`user_ID`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `basket_ibfk_2` FOREIGN KEY (`fk_prod_ID`) REFERENCES `product` (`prod_ID`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints der Tabelle `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`fk_user_ID`) REFERENCES `user` (`user_ID`) ON DELETE CASCADE;

--
-- Constraints der Tabelle `ordered_products`
--
ALTER TABLE `ordered_products`
  ADD CONSTRAINT `ordered_products_ibfk_1` FOREIGN KEY (`fk_prod_ID`) REFERENCES `product` (`prod_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `ordered_products_ibfk_2` FOREIGN KEY (`fk_r_ID`) REFERENCES `order` (`r_ID`) ON DELETE CASCADE;

--
-- Constraints der Tabelle `person`
--
ALTER TABLE `person`
  ADD CONSTRAINT `person_ibfk_1` FOREIGN KEY (`fk_addr_ID`) REFERENCES `address` (`addr_ID`) ON DELETE CASCADE;

--
-- Constraints der Tabelle `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`fk_pers_ID`) REFERENCES `person` (`pers_ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

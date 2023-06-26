-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 26. Jun 2023 um 16:12
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
(5, 'Dok Noord', 1, 0, 9000, 'Gent');

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
(2, '2018-12-05 14:00:00', 1, 1),
(3, '2018-12-05 14:00:00', 1, 2),
(4, '2018-12-05 14:00:00', 1, 3),
(5, '2018-12-05 14:00:00', 1, 4),
(6, '2018-12-05 14:00:00', 1, 5),
(7, '2023-06-26 14:07:53', 1, 1),
(8, '2023-06-26 14:10:44', 1, 1);

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
(2, 2, 5),
(3, 2, 6),
(4, 3, 7),
(5, 4, 2),
(6, 5, 3),
(1, 7, 1),
(3, 8, 1);

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
(5, 'dok@m.com', 5, 'K', 'Kra');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `product`
--

CREATE TABLE `product` (
  `prod_ID` int(11) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `long_description` text NOT NULL,
  `price` float NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `product`
--

INSERT INTO `product` (`prod_ID`, `short_description`, `long_description`, `price`, `product_name`, `stock`, `picture`) VALUES
(1, 'Ein kleines Aquarium ohne Schrank', 'Das Aquarium „Home 85“ von Superfish ist ein modernes Plug&Play Aquarium. Das Becken ist bereits mit einem internen Filter, einer LED-Sonnenaufgangsbeleuchtung und einer Abdeckscheibe ausgestattet. Die 12W – LED Beleuchtung ist dimmbar, steuerbar mit einer Fernbedienung mit Touch Steuerung und besitzt die Möglichkeit zur Anbringung einer Zeitschaltuhr. Nach dem Einschalten dauert es ca. 30 Sekunden bis die volle Helligkeit erreicht ist. Dies ist Absicht und dient dazu, ein Erschrecken der Fische zu vermeiden. Das Aquarium Home 85 gehört zu den größeren Modellen der Serie und ist extra für das Aquascaping entwickelt worden. In dem 65x31x53 cm großen Aquarium finden der interne Filter Aqua-Flow-300 und optional eine Heizung platz.', 200, 'Aquarium klein', 10, '../../pictures/aqaruium/superfish_home_80_schwarz.png'),
(2, 'Ein großes Aquarium mit Schrank', 'Ein modern designtes Wasserbecken aus hochwertigem Sicherheits-Floatglas, eine durchdachte Technik mit einem Eckinnenfilter, der für freie Sicht auf Ihre Unterwasserwelt sorgt, und ein stylischen Unterschrank – die Oase Aquarium Kombination StyleLine 175 lässt keine Wünsche offen. Bei keinem Profi und schon gar nicht bei einem Anfänger. Denn neben dem Innenfilter mit dem Heizer, der für eine gleichbleibend angenehme Wassertemperatur garantiert, ist bei dem Komplettpaket auch das passende LED-Licht gleich dabei. Vielleicht träumen Sie ja von einem exotischen Südamerikabecken , in dem hübsche Neonfische, schwarze Phantomsalmler, rote und gelbe Rio und als Eyecatcher ein paar Schmetterlingsbuntbarsche zu bewundern sind? Dann lassen Sie Ihren Traum mit der Oase Aquarium Kombination StyleLine 175 gleich wahr werden und freuen Sie sich jetzt schon auf den spannenden Naturfilm, den Sie bald an jedem Abend betrachten können.', 350, 'Aquarium groß', 10, '../../pictures/aqaruium/1576438_4023040_WE_FS_001_JuAqKombiRio125Weiss.png'),
(3, 'Das ist ein Tempel für ein Aquarium', 'Außerordentlich effekvolles Dekoelement für Aquarien. Aus ungiftigem Polyrin gefertigt. Ein echter Blickfang in jedem Aquarium.', 30, 'Aquarium Tempel', 30, '../../pictures/decoration/aquarium-dekoration-tempel-ankor-wat.png'),
(4, 'Ein Moos-Felsen für ein Aquarium', 'Sie wollen Ihre erste Aquariumlandschaft gestalten oder Ihrem alten Aquarium einen neuen Look verschaffen? Dann ist diese Aquariumdeko genau das Richtige. Ob für ein normales Süßwasserbecken oder ein großes Salzwasseraquarium - die Felsformation ist ein prima Versteck für kleine Fische und Garnelen. Durch das grüne Kunstmoos und die weißen Tempel kommt die Stein Deko super zur Geltung. Die robuste Dekoration aus Kunstharz ist ungiftig und zerkratzt Ihre Scheiben nicht.', 35, 'Moosfelsen', 30, '../../pictures/decoration/relaxdays-aquarium-aquarium-deko-felsen.png'),
(5, 'Ein Regenbogenfisch für ein Aquarium', 'Sie mögen klein erscheinen, aber ein Schwarm dieser farbenfrohen Fische kann in einem Aquarium großartig aussehen. Helle blaue und rote Streifen machen diese Fische zu einer farbenfrohen Ergänzung für ein Süßwasser-Gemeinschaftsaquarium. Regenbogenfische sind in der Regel sehr gelassen und haben aufgrund ihrer geringen Größe nur minimale Auswirkungen auf die Wasserqualität.Regenbogenfische können bis zu 3,5 Zentimeter lang werden. Sie gehen gerne gemeinsam in die Schule, also beginnen Sie mit mindestens drei bis fünf Personen. Sie sind die idealen Bewohner für ein sanftes, Zen-inspiriertes Pflanzenaquarium.', 30, 'Regenbogenfisch', 10, '../../pictures/fish/low-maintenance-freshwater-fish-4770223-hero-ffb66c229c194e2db4916e88bbd17a15.jpg'),
(6, 'Ein Pufferfisch für ein Aquarium', 'Zum Verkauf steht ein wunderschöner Pufferfisch für Ihr Aquarium! Dieser faszinierende und einzigartige Unterwasserbewohner wird sicherlich zum Blickfang in Ihrem Heimaquarium. Mit seinem runden Körper, den markanten Stacheln und den lebendigen Farben zieht er alle Blicke auf sich. Der Pufferfisch gehört zur Familie der Tetraodontidae und besitzt die einzigartige Fähigkeit, sich bei Gefahr aufzublasen und dadurch seine Größe zu verändern. Sein verspieltes und neugieriges Verhalten macht ihn zu einem unterhaltsamen und interessanten Mitbewohner. Sorgen Sie für Abwechslung in Ihrem Aquarium und bringen Sie mit diesem faszinierenden Pufferfisch Leben und Farbe in Ihre Unterwasserwelt!', 100, 'Pufferfisch', 10, '../../pictures/fish/pufferfish-closeup_16x9.png'),
(7, 'Balanciertes Futter für kleine Fische', 'Hauptfutter als feinkörnige Granulate für alle Süßwasserzierfische. Die Granulate durchweichen schnell und sinken langsam ab, daher eignen sie sich ideal für Fische, die in der mittleren Wasserschicht des Aquariums fressen. Hergestellt aus über 40 hochwertigen Rohstoffen. Die BioActive Formel unterstützt ein gesundes Immunsystem. Plus Präbiotika zur Unterstützung der Körperfunktionen und der Futterverwertung.Erhält gesundes Fischwachstum und klares Wasser', 10, 'Tropical Granules', 50, '../../pictures/food/productimg.png'),
(8, 'Fertiges Futter für tropische Fische', 'Tetra Micro Menu eignet sich besonders gut als Hauptfutter für alle kleinen Zierfische. Mit einem Durchmesser von 0,3 - 2,5 mm - je nach Futterform als Crisps, Granulat, Pellet oder Stick - enthalten die Futter hochwertige Nährstoffe und haben eine ausgewogene Rezeptur aus pflanzlichen und tierischen Inhaltsstoffen. Darüber hinaus stecken in den roten Extrudaten Karotinoide für eine intensive Farbpracht und die grünen Extrudate tragen durch die pflanzlichen Bestandteile zu Gesundheit und Vitalität bei.Die kleinen Extrudate sind auch deshalb so gut für Fische mit kleinem Maul geeignet, da sie im Wasser schnell durchweichen und so leicht gefressen werden können. Die hohe Verdaulichkeit dieses Hauptfutters sorgt darüber hinaus für klares Wasser. Alles in allem ist Tetra Micro Menu ein idealer Hauptfutter-Mix sowohl für alle kleinen Zierfische aber auch junge, heranwachsende Cichliden und Meerwasserfische.', 15, 'Micro Granules', 50, '../../pictures/food/81gbYPINw8L.png'),
(9, 'Filtert Wasser für Fische --> gesund', 'Micra Plus-Pumpen sind vollständig tauchfähige Umwälzpumpen für jede Art von Aquarium, Terrarium, Innen- oder Außenbrunnen, Landschaftsbau und für alle Anwendungen, die die Umwälzung von Wasser erfordern. Die nach den strengsten internationalen Sicherheitsstandards gebauten Pumpen sind einfach zu warten und verfügen über unglaublich kleine Abmessungen für hohe Leistung und Zuverlässigkeit. Die gesamte Linie ist mit einem variablen Durchflussregler sowie Adaptern zum Anschluss flexibler Schläuche von 13 mm bis 20 mm ausgestattet. Die kompakten Abmessungen dieser Pumpen machen sie ideal für den Einsatz auf kleinem Raum.', 50, 'Micra Pumpe', 50, '../../pictures/pumps/sicce-micra-plus-aquarium-pump--158-gph--99.png'),
(10, 'Filtert Wasser für Fische --> gesund', 'Die Eheim Aquarium-Pumpe CompactON ist eine kompakte und dennoch starke Aquarienpumpe. Die Aquarienpumpe zeichnet sich, getreu dem Namen, durch eine kompakte Bauweise aus und ist dank dem enthaltenen Zubehörbeutel vielfältig einsetzbar - so kann die Pumpe auch für dem Einsatz außerhalb des Wassers umgerüstet werden. Dank hochwertigen Materialien ist auch ein Einsatz im Meerwasser problemlos möglich. Für noch mehr Flexibilität lässt sich die Durchflussmenge einstellen. Die Eheim Aquarium-Pumpe CompactON 600 ist ab 250 Litern pro Stunde geeignet. Der Stromverbrauch wurde nochmal um bis zu 37 % verbessert. Auch die Förderhöhe kann sich mit bis zu 4,2 m sehen lassen und macht die Pumpen auch für den Einsatz im Filterbecken leistungsstark genug.', 50, 'Eheim Pumpe', 50, '../../pictures/pumps/178495_2.png');

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
(5, 5, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 1);

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
  MODIFY `addr_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT für Tabelle `order`
--
ALTER TABLE `order`
  MODIFY `r_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `person`
--
ALTER TABLE `person`
  MODIFY `pers_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT für Tabelle `product`
--
ALTER TABLE `product`
  MODIFY `prod_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `user_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`fk_user_ID`) REFERENCES `user` (`user_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `basket_ibfk_2` FOREIGN KEY (`fk_prod_ID`) REFERENCES `product` (`prod_ID`) ON DELETE CASCADE;

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


-- insert statement for the address table

INSERT INTO address (addr_ID, street, housenumber, doornumber, postal_code, city) VALUES
    (1, 'Kerkstraat', 5, 3, 9000, 'Gent'),
    (2, 'Oudenaardsesteenweg', 45, 0, 9000, 'Gent'),
    (3, 'Kapucijnenstraat', 3, 0, 9000, 'Gent'),
    (4, 'Sint-Pietersnieuwstraat', 39, 0, 9000, 'Gent'),
    (5, 'Dok Noord', 1, 0, 9000, 'Gent');

-- insert statement for the person table

INSERT INTO person (pers_ID, email, fk_addr_ID, firstname, lastname) VALUES
    (1, 'hello@hel.com', 1, 'M', 'Mou'),
    (2, 'gel@g.com', 2, 'D', 'Dra'),
    (3, 'fel@p.com', 3, 'F', 'Fel'),
    (4, 'ch@l.com', 4, 'L', 'Leo'),
    (5, 'dok@m.com', 5, 'K', 'Kra');

-- insert statement for the user table

INSERT INTO user (user_ID, fk_pers_ID, password, is_active) VALUES
    (1, 1, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', TRUE),
    (2, 2, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', TRUE),
    (3, 3, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', TRUE),
    (4, 4, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', TRUE),
    (5, 5, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', TRUE);

-- insert statement for the product table

INSERT INTO product (prod_ID, short_description, price, product_name, long_description, stock, picture) VALUES
    (1, 'Ein kleines Aquarium', 200.00, 'Aquarium klein','Das Aquarium „Home 85“ von Superfish ist ein modernes Plug&Play Aquarium. Das Becken ist bereits mit einem internen Filter, einer LED-Sonnenaufgangsbeleuchtung und einer Abdeckscheibe ausgestattet. Die 12W – LED Beleuchtung ist dimmbar, steuerbar mit einer Fernbedienung mit Touch Steuerung und besitzt die Möglichkeit zur Anbringung einer Zeitschaltuhr. Nach dem Einschalten dauert es ca. 30 Sekunden bis die volle Helligkeit erreicht ist. Dies ist Absicht und dient dazu, ein Erschrecken der Fische zu vermeiden. Das Aquarium Home 85 gehört zu den größeren Modellen der Serie und ist extra für das Aquascaping entwickelt worden. In dem 65x31x53 cm großen Aquarium finden der interne Filter Aqua-Flow-300 und optional eine Heizung platz.',10, '../../pictures/aqaruium/superfish_home_80_schwarz.png'),
    (2, 'Ein großes Aquarium', 350.00, 'Aquarium groß','Ein modern designtes Wasserbecken aus hochwertigem Sicherheits-Floatglas, eine durchdachte Technik mit einem Eckinnenfilter, der für freie Sicht auf Ihre Unterwasserwelt sorgt, und ein stylischen Unterschrank – die Oase Aquarium Kombination StyleLine 175 lässt keine Wünsche offen. Bei keinem Profi und schon gar nicht bei einem Anfänger. Denn neben dem Innenfilter mit dem Heizer, der für eine gleichbleibend angenehme Wassertemperatur garantiert, ist bei dem Komplettpaket auch das passende LED-Licht gleich dabei. Vielleicht träumen Sie ja von einem exotischen Südamerikabecken , in dem hübsche Neonfische, schwarze Phantomsalmler, rote und gelbe Rio und als Eyecatcher ein paar Schmetterlingsbuntbarsche zu bewundern sind? Dann lassen Sie Ihren Traum mit der Oase Aquarium Kombination StyleLine 175 gleich wahr werden und freuen Sie sich jetzt schon auf den spannenden Naturfilm, den Sie bald an jedem Abend betrachten können.',10, '../../pictures/aqaruium/1576438_4023040_WE_FS_001_JuAqKombiRio125Weiss.png'),
    (3, 'Das ist ein Tempel für ein Aquarium', 30.00, 'Aquarium Dekoration Tempel','Außerordentlich effekvolles Dekoelement für Aquarien. Aus ungiftigem Polyrin gefertigt. Ein echter Blickfang in jedem Aquarium.',30, '../../pictures/decoration/aquarium-dekoration-tempel-ankor-wat.png'),
    (4, 'Das ist ein Moosfelsen für ein Aquarium', 35.00, 'Moosfelsen','Sie wollen Ihre erste Aquariumlandschaft gestalten oder Ihrem alten Aquarium einen neuen Look verschaffen? Dann ist diese Aquariumdeko genau das Richtige. Ob für ein normales Süßwasserbecken oder ein großes Salzwasseraquarium - die Felsformation ist ein prima Versteck für kleine Fische und Garnelen. Durch das grüne Kunstmoos und die weißen Tempel kommt die Stein Deko super zur Geltung. Die robuste Dekoration aus Kunstharz ist ungiftig und zerkratzt Ihre Scheiben nicht.',30, '../../pictures/decoration/relaxdays-aquarium-aquarium-deko-felsen.png'),
    (5, 'Ein Regenbogenfisch für ein Aquarium', 30.00, 'Regenbogenfisch','Sie mögen klein erscheinen, aber ein Schwarm dieser farbenfrohen Fische kann in einem Aquarium großartig aussehen. Helle blaue und rote Streifen machen diese Fische zu einer farbenfrohen Ergänzung für ein Süßwasser-Gemeinschaftsaquarium. Regenbogenfische sind in der Regel sehr gelassen und haben aufgrund ihrer geringen Größe nur minimale Auswirkungen auf die Wasserqualität.Regenbogenfische können bis zu 3,5 Zentimeter lang werden. Sie gehen gerne gemeinsam in die Schule, also beginnen Sie mit mindestens drei bis fünf Personen. Sie sind die idealen Bewohner für ein sanftes, Zen-inspiriertes Pflanzenaquarium.',10, '../../pictures/fish/low-maintenance-freshwater-fish-4770223-hero-ffb66c229c194e2db4916e88bbd17a15.jpg'),
    (6, 'Ein Pufferfisch für ein Aquarium', 100.00, 'Pufferfisch','Zum Verkauf steht ein wunderschöner Pufferfisch für Ihr Aquarium! Dieser faszinierende und einzigartige Unterwasserbewohner wird sicherlich zum Blickfang in Ihrem Heimaquarium. Mit seinem runden Körper, den markanten Stacheln und den lebendigen Farben zieht er alle Blicke auf sich. Der Pufferfisch gehört zur Familie der Tetraodontidae und besitzt die einzigartige Fähigkeit, sich bei Gefahr aufzublasen und dadurch seine Größe zu verändern. Sein verspieltes und neugieriges Verhalten macht ihn zu einem unterhaltsamen und interessanten Mitbewohner. Sorgen Sie für Abwechslung in Ihrem Aquarium und bringen Sie mit diesem faszinierenden Pufferfisch Leben und Farbe in Ihre Unterwasserwelt!',10, '../../pictures/fish/pufferfish-closeup_16x9.png'),
    (7, 'Ernährungsbedingt balanciertes Futter für kleine Fische', 10.00, 'Tropical Granules','Hauptfutter als feinkörnige Granulate für alle Süßwasserzierfische. Die Granulate durchweichen schnell und sinken langsam ab, daher eignen sie sich ideal für Fische, die in der mittleren Wasserschicht des Aquariums fressen. Hergestellt aus über 40 hochwertigen Rohstoffen. Die BioActive Formel unterstützt ein gesundes Immunsystem. Plus Präbiotika zur Unterstützung der Körperfunktionen und der Futterverwertung.Erhält gesundes Fischwachstum und klares Wasser' ,50, '../../pictures/food/productimg.png'),    
    (8, 'Komplettes Futter für tropische Fische', 15.00, 'Micro Granules','Tetra Micro Menu eignet sich besonders gut als Hauptfutter für alle kleinen Zierfische. Mit einem Durchmesser von 0,3 - 2,5 mm - je nach Futterform als Crisps, Granulat, Pellet oder Stick - enthalten die Futter hochwertige Nährstoffe und haben eine ausgewogene Rezeptur aus pflanzlichen und tierischen Inhaltsstoffen. Darüber hinaus stecken in den roten Extrudaten Karotinoide für eine intensive Farbpracht und die grünen Extrudate tragen durch die pflanzlichen Bestandteile zu Gesundheit und Vitalität bei.Die kleinen Extrudate sind auch deshalb so gut für Fische mit kleinem Maul geeignet, da sie im Wasser schnell durchweichen und so leicht gefressen werden können. Die hohe Verdaulichkeit dieses Hauptfutters sorgt darüber hinaus für klares Wasser. Alles in allem ist Tetra Micro Menu ein idealer Hauptfutter-Mix sowohl für alle kleinen Zierfische aber auch junge, heranwachsende Cichliden und Meerwasserfische.' ,50, '../../pictures/food/81gbYPINw8L.png'),
    (9, 'Filtert Wasser für Fische --> gesund', 50.00, 'Micra Pumpe','Micra Plus-Pumpen sind vollständig tauchfähige Umwälzpumpen für jede Art von Aquarium, Terrarium, Innen- oder Außenbrunnen, Landschaftsbau und für alle Anwendungen, die die Umwälzung von Wasser erfordern. Die nach den strengsten internationalen Sicherheitsstandards gebauten Pumpen sind einfach zu warten und verfügen über unglaublich kleine Abmessungen für hohe Leistung und Zuverlässigkeit. Die gesamte Linie ist mit einem variablen Durchflussregler sowie Adaptern zum Anschluss flexibler Schläuche von 13 mm bis 20 mm ausgestattet. Die kompakten Abmessungen dieser Pumpen machen sie ideal für den Einsatz auf kleinem Raum.',50, '../../pictures/pumps/sicce-micra-plus-aquarium-pump--158-gph--99.png'),
    (10, 'Filtert Wasser für Fische --> gesund', 50.00, 'Eheim Pumpe','Die Eheim Aquarium-Pumpe CompactON ist eine kompakte und dennoch starke Aquarienpumpe. Die Aquarienpumpe zeichnet sich, getreu dem Namen, durch eine kompakte Bauweise aus und ist dank dem enthaltenen Zubehörbeutel vielfältig einsetzbar - so kann die Pumpe auch für dem Einsatz außerhalb des Wassers umgerüstet werden. Dank hochwertigen Materialien ist auch ein Einsatz im Meerwasser problemlos möglich. Für noch mehr Flexibilität lässt sich die Durchflussmenge einstellen. Die Eheim Aquarium-Pumpe CompactON 600 ist ab 250 Litern pro Stunde geeignet. Der Stromverbrauch wurde nochmal um bis zu 37 % verbessert. Auch die Förderhöhe kann sich mit bis zu 4,2 m sehen lassen und macht die Pumpen auch für den Einsatz im Filterbecken leistungsstark genug.',50, '../../pictures/pumps/178495_2.png');

-- insert statement for the receipt table

INSERT INTO `order` (r_ID, date, status, fk_user_ID) VALUES
    (1, '2018-12-05 15:00:00', 1, 1),
    (2, '2018-12-05 15:00:00', 1, 2),
    (3, '2018-12-05 15:00:00', 1, 3),
    (4, '2018-12-05 15:00:00', 1, 4),
    (5, '2018-12-05 15:00:00', 1, 5);

-- insert statement for the ordered_products table

INSERT INTO ordered_products (fk_prod_ID, fk_r_ID, amount) VALUES
    (1, 1, 4),
    (2, 2, 6),
    (3, 3, 7),
    (4, 4, 2),
    (5, 5, 3);

-- insert into basket table 1 product for user with id 1

INSERT INTO basket (fk_prod_ID, fk_user_ID, amount) VALUES
    (1, 1, 1);


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

INSERT INTO product (prod_ID, description, price, product_name, stock, picture) VALUES
    (1, 'Ein kleines Aquarium', 100.00, 'Aquarium klein', 10, '../../pictures/aqaruium/superfish_home_80_schwarz.png'),
    (2, 'Ein großes Aquarium', 150.00, 'Aquarium groß', 10, '../../pictures/aqaruium/1576438_4023040_WE_FS_001_JuAqKombiRio125Weiss.png'),
    (3, 'Das ist ein Tempel für ein Aquarium', 30.00, 'Aquarium Dekoration Tempel', 30, '../../pictures/decoration/aquarium-dekoration-tempel-ankor-wat.png'),
    (4, 'Das ist ein Moosfelsen für ein Aquarium', 35.00, 'Moosfelsen', 30, '../../pictures/decoration/relaxdays-aquarium-aquarium-deko-felsen.png'),
    (5, 'Ein Regenbogenfisch für ein Aquarium', 30.00, 'Regenbogenfisch', 10, '../../pictures/fish/low-maintenance-freshwater-fish-4770223-hero-ffb66c229c194e2db4916e88bbd17a15.jpg'),
    (6, 'Ein Pufferfisch für ein Aquarium', 100.00, 'Pufferfisch', 10, '../../pictures/fish/pufferfish-closeup_16x9.png'),
    (7, 'Ernährungsbedingt balanciertes Futter für kleine Fische', 10.00, 'Tropical Granules', 50, '../../pictures/food/productimg.png'),
    (8, 'Komplettes Futter für tropische Fische', 15.00, 'Micro Granules', 50, '../../pictures/food/81gbYPINw8L.png'),
    (9, 'Filtert Wasser für Fische --> gesund', 50.00, 'Micra Pumpe', 50, '../../pictures/pumps/sicce-micra-plus-aquarium-pump--158-gph--99.png'),
    (10, 'Filtert Wasser für Fische --> gesund', 50.00, 'Eheim Pumpe', 50, '../../pictures/pumps/178495_2.png');

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

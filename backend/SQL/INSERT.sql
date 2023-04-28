
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

INSERT INTO user (user_ID, fk_pers_ID, password, inactive) VALUES
    (1, 1, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 0),
    (2, 2, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 0),
    (3, 3, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 0),
    (4, 4, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 0),
    (5, 5, '$2y$10$hGMPcejbfU7wL2pUNoaY0evay8/lsrzaH25KSTjHCpQY8kRJ.7tD2', 0);

-- insert statement for the product table

INSERT INTO product (prod_ID, description, price, product_name, stock, picture) VALUES
    (1, 'This is a description', 10.00, 'Product 1', 10, 'picture.png'),
    (2, 'This is a description', 20.00, 'Product 2', 20, 'picture.png'),
    (3, 'This is a description', 30.00, 'Product 3', 30, 'picture.png'),
    (4, 'This is a description', 40.00, 'Product 4', 40, 'picture.png'),
    (5, 'This is a description', 50.00, 'Product 5', 50, 'picture.png');

-- insert statement for the receipt table

INSERT INTO receipt (r_ID, date, status, fk_user_ID) VALUES
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

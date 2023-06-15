
CREATE TABLE address (
    addr_ID int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    street varchar(255) NOT NULL,
    housenumber int(11) NOT NULL,
    doornumber int(11) NOT NULL,
    postal_code smallint(6) NOT NULL,
    city varchar(255) NOT NULL
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle person
--

CREATE TABLE person (
    pers_ID int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) NOT NULL UNIQUE,
    fk_addr_ID int(11) NOT NULL,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    CONSTRAINT FOREIGN KEY (fk_addr_ID) REFERENCES amazonas_webshop.address (addr_ID) ON DELETE CASCADE
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle product
--

CREATE TABLE product (
    prod_ID int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    short_description varchar(255) NOT NULL,
    long_description text NOT NULL,
    price float NOT NULL,
    product_name varchar(255) NOT NULL,
    stock int(11) NOT NULL,
    picture varchar(255) NOT NULL
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle user
--

CREATE TABLE user (
    user_ID int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fk_pers_ID int(11) NOT NULL,
    password varchar(255) NOT NULL,
    is_active BOOL NOT NULL DEFAULT TRUE,
    CONSTRAINT FOREIGN KEY (fk_pers_ID) REFERENCES amazonas_webshop.person (pers_ID) ON DELETE CASCADE
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle receipt
--

CREATE TABLE `order` (
     r_ID int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
     date TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
     status tinyint(4) NOT NULL,
     fk_user_ID int(11) NOT NULL,
     CONSTRAINT FOREIGN KEY (fk_user_ID) REFERENCES amazonas_webshop.user (user_ID) ON DELETE CASCADE
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle ordered_products
--

CREATE TABLE ordered_products (
    fk_prod_ID int(11) NOT NULL,
    fk_r_ID int(11) NOT NULL,
    amount int(11) NOT NULL,
    CONSTRAINT FOREIGN KEY (fk_prod_ID) REFERENCES amazonas_webshop.product (prod_ID) ON DELETE CASCADE,
    CONSTRAINT FOREIGN KEY (fk_r_ID) REFERENCES amazonas_webshop.order (r_ID) ON DELETE CASCADE
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle basket
--

CREATE TABLE basket (
    fk_user_ID int(11) NOT NULL,
    fk_prod_ID int(11) NOT NULL,
    amount int(11) NOT NULL,
    CONSTRAINT FOREIGN KEY (fk_user_ID) REFERENCES amazonas_webshop.user (user_ID) ON DELETE CASCADE,
    CONSTRAINT FOREIGN KEY (fk_prod_ID) REFERENCES amazonas_webshop.product (prod_ID) ON DELETE CASCADE
);

-- --------------------------------------------------------

-- write an sql to select all orders form table order and ordered_products of a user using the email address



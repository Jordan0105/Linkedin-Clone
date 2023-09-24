CREATE DATABASE IF NOT EXISTS nicajobs;

USE nicajobs;

CREATE USER 'nicajobs'@'localhost' IDENTIFIED BY 'Qwer1234';

GRANT ALL PRIVILEGES ON nicajobs.* TO 'nicajobs'@'localhost';

FLUSH PRIVILEGES;

CREATE TABLE
    available_jobs (
        id INT AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        date_posted DATE NOT NULL,
        photo_url VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

CREATE TABLE
    users (
        id INT AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(255) UNIQUE NOT NULL,
        photo_url VARCHAR(255),
        direction VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );
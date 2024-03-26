CREATE DATABASE todoApp;

USE todoApp;

CREATE TABLE `user`{
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
}

CREATE TABLE `task`{
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    completed TINYINT(1) DEFAULT 0,
    iduser INT(11) NOT NULL,
    FOREIGN KEY REFERENCES `user`(id); 
}

INSERT INTO 'user'(firstname,lastname,email) 
VALUES ('Emiliano', 'Delfino De La Riva', 'EmilianoDelfino012@gmail.com')
/* Crear la base de datos */ 
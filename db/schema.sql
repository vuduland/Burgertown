CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

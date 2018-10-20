CREATE DATABASE hide_and_seek_db;

USE hide_and_seek_db;

CREATE TABLE scoreboard(
  id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  player_name VARCHAR(50),
  score INTEGER(11)
);

CREATE TABLE chatlog(
id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
player_name VARCHAR(50),
message VARCHAR(255)
);
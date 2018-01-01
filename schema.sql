create database if not exists movies;

use movies;

create table if not exists movie_titles (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO groceries (quantity, description) VALUES (4, 'greek yoghurt')

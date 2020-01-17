CREATE DATABASE signup;

use signup;

CREATE TABLE users (
	id INT(11), 
	firstname VARCHAR(30) NOT NULL,
	lastname VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
	dob DATE(3),
    password VARCHAR(50) NOT NULL,

);
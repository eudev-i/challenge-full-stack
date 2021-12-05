CREATE DATABASE trafico;

CREATE TABLE trafico.feedbacks (
	id int(10) PRIMARY KEY auto_increment,
	email varchar(200),
	message varchar(3000)
	create_at TIMESTAMP  
);
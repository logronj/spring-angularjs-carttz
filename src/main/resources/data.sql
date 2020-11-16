DROP TABLE IF EXISTS USER;
DROP TABLE IF EXISTS PRODUCT;
DROP TABLE IF EXISTS CATEGORY;
 
CREATE TABLE USER (
  user_id INT AUTO_INCREMENT  PRIMARY KEY NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  username VARCHAR(10) DEFAULT NULL,
  user_type  VARCHAR(10) DEFAULT NULL,
  photo BLOB DEFAULT NULL,
  created_by VARCHAR(30) DEFAULT NULL,
  updated_by VARCHAR(30) DEFAULT NULL,
  created_date DATE DEFAULT NULL,
  updated_date DATE DEFAULT NULL
  
);
 
INSERT INTO USER (first_name, last_name, username,user_type,created_by,created_date) VALUES
  ('Rodel', 'Sebastian', 'sebastr','normal','logronj','2020-10-13'),
  ('Myrman', 'DeLuna', 'delunam','normal','logronj','2020-10-13'),
  ('Jomaric', 'Santos', 'santojo','normal','logronj','2020-10-13'),
  ('Julius', 'Obregon', 'obregoj','normal','logronj','2020-10-13'),
  ('Janel', 'Logroño', 'logronj','admin','logronj','2020-10-13'),
  ('Dwayne', 'Felipe', 'feliped','normal','logronj','2020-10-13')
  ;
  
CREATE TABLE CATEGORY (
  category_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(20) NOT NULL,
  description VARCHAR(20) NOT NULL,
  created_by VARCHAR(30) DEFAULT NULL,
  updated_by VARCHAR(30) DEFAULT NULL,
  created_date DATE DEFAULT NULL,
  updated_date DATE DEFAULT NULL
  
);

INSERT INTO CATEGORY(title,description,created_by,created_date) VALUES
('Mobiles','Mobile Phones','logronj','2020-10-13'),
('Laptop','Laptop/Computers','logronj','2020-10-13'),
('Sports','Sports','logronj','2020-10-13'),
('Cloths','Clothing','logronj','2020-10-13')
;

CREATE TABLE PRODUCT(
	product_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	title VARCHAR(20) NOT NULL,
  	description VARCHAR(250) NOT NULL,
  	photo BLOB DEFAULT NULL,
  	price NUMERIC(19,2),
  	quantity NUMERIC(10,2),
  	created_by VARCHAR(30) DEFAULT NULL,
    updated_by VARCHAR(30) DEFAULT NULL,
    created_date DATE DEFAULT NULL,
    updated_date DATE DEFAULT NULL,
  	category_id INT,
  	CONSTRAINT FK_PRODUCT_CATEGORY_01 FOREIGN KEY(category_id) REFERENCES CATEGORY(category_id)
);

INSERT INTO PRODUCT(title,description,price,quantity,category_id,created_by,created_date) VALUES
('Vivo y81','Vivo y81',10000,1,1,'logronj','2020-10-13');


  
  
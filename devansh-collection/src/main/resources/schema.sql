DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS users;
CREATE  TABLE users (
  userid int(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(60) NOT NULL ,
  enabled TINYINT NOT NULL DEFAULT 1 ,
  PRIMARY KEY (userid));
CREATE TABLE user_roles (
  user_role_id int(11) NOT NULL AUTO_INCREMENT,
  userid int(11) NOT NULL,
  role varchar(45) NOT NULL,
  PRIMARY KEY (user_role_id),
  UNIQUE KEY uni_userid_role (role,userid));

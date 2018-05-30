-- for testing and debugging purposes:
-- run schema.sql first to create database
-- start server
-- then run seeds.sql


USE calendar;
INSERT INTO people (firstName, lastName, userName, email, phoneNumber, createdAt, updatedAt) 
VALUES ("Leslie", "Knope", "energizer", "123@gmail.com", "1234567890", "2018-04-21 22:13:20", "2018-04-21 22:13:40");

INSERT INTO people (firstName, lastName, userName, email, phoneNumber, createdAt, updatedAt) 
VALUES ("Ron", "Swanson", "bestworstboss", "321@gmail.com", "0987654321", "2018-04-29 22:13:20", "2018-04-29 22:13:40");

INSERT INTO groups (name, admin, createdAt, updatedAt)
VALUES ("ParksAndRec", "1", "2018-05-09 22:13:20", "2018-05-09 22:13:40");

INSERT INTO peoplegroups (createdAt, updatedAt, GroupId, PersonId)
VALUES ("2018-05-09 22:13:20", "2018-05-09 22:13:40", "1", "1");

INSERT INTO peoplegroups (createdAt, updatedAt, GroupId, PersonId)
VALUES ("2018-05-09 22:13:20", "2018-05-09 22:13:40", "1", "2");

INSERT INTO events (name, organizer, location_address, city, state, date, time, description, createdAt, updatedAt, GroupId)
VALUES ("Department Retreat", "1", "null", "null", "null", "2018-06-09", "12:00:00", "null", "2018-05-09 22:13:20", "2018-05-09 22:13:40", "1");
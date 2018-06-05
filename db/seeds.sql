-- for testing and debugging purposes:
-- run schema.sql first to create database
-- start server
-- then run seeds.sql


USE calendar;
INSERT INTO people (firstName, lastName, userName, email, phoneNumber, password, last_login, createdAt, updatedAt) 
VALUES ("Leslie", "Knope", "leslieknope", "123@gmail.com", "1234567890", "hihi", null, "2018-04-21 22:13:20", "2018-04-21 22:13:40");

INSERT INTO people (firstName, lastName, userName, email, phoneNumber, password, last_login, createdAt, updatedAt) 
VALUES ("Ron", "Swanson", "ronswanson", "321@gmail.com", "0987654321", "hihi", null, "2018-04-29 22:13:20", "2018-04-29 22:13:40");

INSERT INTO groups (name, admin, createdAt, updatedAt)
VALUES ("ParksAndRec", "1", "2018-05-09 22:13:20", "2018-05-09 22:13:40");

INSERT INTO peoplegroups (createdAt, updatedAt, GroupId, PersonId)
VALUES ("2018-05-09 22:13:20", "2018-05-09 22:13:40", "1", "1");

INSERT INTO peoplegroups (createdAt, updatedAt, GroupId, PersonId)
VALUES ("2018-05-09 22:13:20", "2018-05-09 22:13:40", "1", "2");

INSERT INTO events (name, organizer, location_address, city, state, date, time, description, createdAt, updatedAt, GroupId)
VALUES ("Company Picnic", "1", "123 4th Street", "Minneapolis", "MN", "2018-06-09", "20:00:00", "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
", "2018-05-09 22:13:20", "2018-05-09 22:13:40", "1");
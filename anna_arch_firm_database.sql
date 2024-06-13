create database anna_arch_firm;
use anna_arch_firm;
create table client (
c_id int primary key auto_increment,
f_name varchar (20) not null,
m_name varchar (20),
l_name varchar (20),
email varchar (256) not null,
phone varchar (16),
profile_notes varchar (1000));
describe client;

create table address (
a_id int primary key auto_increment,
c_id int,
foreign key (c_id) references Client (c_id),
address1 varchar (256),
address2 varchar (256),
city varchar (256),
state varchar (256),
zip varchar (20),
address_notes varchar (1000));
describe address;

create table meetings (
m_id int primary key auto_increment,
c_id int,
foreign key (c_id) references Client (c_id),
date date not null,
s_Time time not null,
e_Time time not null,
location varchar (50),
subject varchar (50) not null,
description varchar (1000));
describe meetings;

INSERT INTO client (f_Name, m_name, l_Name, email, phone, profile_notes) 
VALUES 
('Johann', 'Sebastian', 'Bach', 'Bach@test.com', '213-555-9874', 'Refered by an existing client. Interested in renovating his home.'),
('Wolfgang', 'A', 'Mozart', 'Mozart@test.com', '310-555-9632', ''),
('Ludwig', '', 'Beethoven', 'Beethoven@test.com', '323-555-1234', ''),
('Pyotr', 'I', 'Tchaikovsky', 'Tchaikovsky@test.com', '424-555-8523', 'Owns multiple properties'),
('Claude', '', 'Debussy', 'Debussy@test.com', '562-555-54569', ''),
('Frédéric', '', 'Chopin', 'Chopin@test.com', '818-555-2574', 'Purchased 3 plots of land in Naples.');
select * from client;

INSERT INTO address (c_id, address1, address2, city, state, zip, address_notes) 
VALUES 
(1, '8166 Eagle Ave.', '', 'Porage', 'California', 90981, ''),
(2, '9008 Sutor Drive', '', 'Hopewell', 'California', 90950, ''),
(3, '909 Longbranch Avenue', '', 'Inman', 'California', 90405, ''),
(4, '7899 Walt Street', '', 'Fitchburg', 'California', 90654, ''),
(4, '2309 Levy Court', '', 'Roscoe', 'California', 90321, ''),
(5, '5 Ann Road', '', 'Islip', 'California', 90087, ''),
(6, '769 Bald Hill Ave.', '', 'Naples', 'California', 90201, ''),
(6, '767 Bald Hill Ave.', '', 'Naples', 'California', 90201, ''),
(6, '765 Bald Hill Ave.', '', 'Naples', 'California', 90201, '');
select * from address;

INSERT INTO meetings (c_id, date, s_Time, e_Time, location, subject, description) 
VALUES 
(1, '2024-07-15', '10:00:00', '10:30:00', 'online', 'Quick progress update', 'Foundation done. Walls next.'),
(2, '2024-07-20', '13:00:00', '13:45:00', 'phone call', 'Budget update', ''),
(3, '2024-07-23', '11:00:00', '12:00:00', 'client project onsite', 'Initial Consultation', 'Client has $500K budget. Min 2 bedroom 2 bath.'),
(4, '2024-07-16', '15:00:00', '16:00:00', 'client project onsite','Discuss landscape design', 'Landscape architect will join.');
select * from meetings;



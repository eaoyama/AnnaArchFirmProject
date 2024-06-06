create database AnnaArchFirm;
drop database annaarchfirm;
create database Anna_Arch_Firm;
use Anna_Arch_Firm;
create table Client (
c_id int primary key auto_increment,
F_name varchar (20),
L_name varchar (20),
Phone varchar (16),
Email varchar (256) not null);
create table Address (
a_id int primary key auto_increment,
ca_id int,
foreign key (ca_id) references Client (c_id),
Street varchar (256),
City varchar (256),
State varchar (2),
ZIP int (5));
show tables;
alter table Address modify column ZIP int;
describe client;
describe address;
create table Meetings (
m_id int primary key auto_increment,
cm_id int,
foreign key (cm_id) references Client (c_id),
Date date,
S_Time time,
E_Time time,
Subject varchar (50),
Description varchar (256));
describe client;
INSERT INTO Client (F_Name, L_Name, Phone, Email) 
VALUES 
('Johann', 'Bach', '213-555-9874', 'Bach@test.com'),
('Wolfgang', 'Mozart', '310-555-9632', 'Mozart@test.com'),
('Ludwig', 'Beethoven', '323-555-1234', 'Beethoven@test.com'),
('Pyotr', 'Tchaikovsky', '424-555-8523', 'Tchaikovsky@test.com'),
('Claude', 'Debussy', '562-555-54569', 'Debussy@test.com'),
('Frédéric', 'Chopin', '818-555-2574', 'Chopin@test.com');
select * from Client;
INSERT INTO Address (ca_id, Street, City, State, ZIP) 
VALUES 
(1, '8166 Eagle Ave.', 'Porage', 'CA', 90981),
(2, '9008 Sutor Drive', 'Hopewell', 'CA', 90950),
(3, '909 Longbranch Avenue', 'Inman', 'CA', 90405),
(4, '7899 Walt Street', 'Fitchburg', 'CA', 90654),
(4, '2309 Levy Court', 'Roscoe', 'CA', 90321),
(5, '5 Ann Road', 'Islip', 'CA', 90087),
(6, '769 Bald Hill Ave.', 'Naples', 'CA', 90201),
(6, '767 Bald Hill Ave.', 'Naples', 'CA', 90201),
(6, '765 Bald Hill Ave.', 'Naples', 'CA', 90201);
select * from address;
describe meetings;
INSERT INTO Meetings (cm_id, Date, S_Time, E_Time, Subject, Description) 
VALUES 
(1, '2024-05-15', '10:00:00', '10:30:00', 'Quick progress update', 'Foundation done. Walls next.'),
(2, '2024-05-20', '13:00:00', '13:45:00', 'Budget update', ''),
(3, '2024-05-23', '11:00:00', '12:00:00', 'Initial Consultation', 'Client has $500K budget. Min 2 bedroom 2 bath.'),
(4, '2024-05-16', '15:00:00', '16:00:00', 'Discuss landscape design', 'Landscape architect will join.');
update Meetings set S_Time = '14:00:00', E_Time ='14:45:00' where m_id = 2;
select * from Meetings;
delete from Meetings where m_id = 1;
select * from meetings order by date;
select 
Client.F_name,
Client.L_name,
Meetings.Date,
Meetings.S_Time,
Meetings.Subject
from Client, Meetings
where client.c_id = meetings.cm_id
order by meetings.date;
select *
from Client
inner join Meetings
on client.c_id = meetings.cm_id
order by client.L_Name;
select * from
Client
left join meetings
on client.c_id = meetings.cm_id
order by client.L_name;
select * from
Client
right join meetings
on client.c_id = meetings.cm_id
order by client.L_name;
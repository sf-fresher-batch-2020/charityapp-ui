/*--CREATE DATABASE--*/


create database test_db;
use test_db;

/*--CREATE TABLE FOR USERS--*/


create table users  
(
id int primary key auto_increment,
name varchar(40) NOT NULL,
email varchar(50) NOT NULL,
password varchar(30) NOT NULL,
number bigint,
age int,
created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
modified_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
unique(email),
constraint age_ck check(age > 0 and age < 100)
);


/*---Load Sample Data--*/



insert into users (name,email,password,number,age) values ( 'Naresh','naresh@gmail.com', 'pass123', 9677845420,30);
insert into users (name,email,password,number,age) values ( 'siva','siva@gmail.com', 'pass123', 9677845421,31);
insert into users (name,email,password,number,age) values ( 'priya','priya@gmail.com', 'pass123', 9655698971,21);

/*---List All Users--*/


select * from users;

/*---TO ADD REQUESTS--*/



 create table request
( 
Request_id int primary key auto_increment,
category varchar(50),
Amount int,
created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

/*---Load Sample Data--*/



insert into request (category,Amount) values ( 'Food',25000);
insert into request (category,Amount) values ( 'Baby Care',25000);
insert into request (category,Amount) values ( 'Health Care',25000);

/*---List All REQUESTS--*/

 
 select * from request;
 
 /*--Creating Donation Table--*/
 
 
 create table donation
(
id int primary key auto_increment,
user_id int not null,
category varchar(50),
Amount int,
foreign key (user_id) references users(id)
);

/*---Load Sample Data--*/


insert into donation (user_id,category,Amount) values ( 1,'Food',5000);
insert into donation (user_id,category,Amount) values ( 1,'Baby Care',5000);
insert into donation (user_id,category,Amount) values ( 1,'Health Care',5000);

select * from donation;

/*---Load Sample Data--*/


create table donors_list 
(
user_id int,
name varchar(40) NOT NULL,
request_id int,
category varchar(50),
Amount_donated int,
foreign key (user_id) references users(id)

);

/*---Load Sample Data--*/


insert into donors_list (user_id,name,request_id,category,Amount_donated) values ( 1,'ramesh',1,'Food',5000);
insert into donors_list (user_id,name,request_id,category,Amount_donated) values ( 3,'priya',1,'Food',4000);
insert into donors_list (user_id,name,request_id,category,Amount_donated) values ( 1,'ramesh',3,'Health Care',1000);

select * from donors_list;

/*--Filtering to know the amount donated to category--*/


select * from donors_list where category="Food";

/*--Filtering to know the specific user donation--*/


select * from donors_list where name="priya";
 



 

 

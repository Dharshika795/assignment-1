create database department;
use student;
create table department(
dep_id Int primary key auto_increment,
dep_name varchar(20),
dep_description varchar(50));
select * from department;
insert into department( dep_id,dep_name,dep_description) values ( 1,"IT","Information Technology")
insert into department( dep_id,dep_name,dep_description) values ( 2,"AI","Artificial Intelligence")
insert into department( dep_id,dep_name,dep_description) values ( 3,"DS","Data science")
insert into department( dep_id,dep_name,dep_description) values ( 4,"MCA","Master of computer Application")
-- Write a query to show only students from the users table.
create table user(
student_id Int primary key auto_increment,
student_name varchar(20),
student_age int);
select * from user;
insert into user(student_id,student_name,student_age) values (1,"Dharshi",21)
insert into user(student_id,student_name,student_age) values (2,"Dharvi",19)
insert into user(student_id,student_name,student_age) values (3,"Dhakshan",8)
select student_name from user;
-- Add a new column phone to users.
alter table user add phone int(10);
update user set phone=99473778 where student_id=1;
update user set phone=99473773 where student_id=2;
update user set phone=99473774 where student_id=3;
-- Write a JOIN query to list all students and the courses they are enrolled in.
create table student(
stu_id Int primary key auto_increment,
stu_name varchar(20),
stu_age int);
select * from student;
insert into student(stu_id,stu_name,stu_age) values (1,"Dharshi",21)
insert into student(stu_id,stu_name,stu_age) values (2,"Dharvi",22)
insert into student(stu_id,stu_name,stu_age) values (3,"Dhakshan",20)
insert into student(stu_id,stu_name,stu_age) values (4,"karthik",19)
create table employee(
emp_id Int primary key auto_increment,
emp_name varchar(20),
emp_age int);
select * from employee;
insert into employee(emp_id,emp_name,emp_age) values (1,"Dharshi",22)
insert into employee(emp_id,emp_name,emp_age) values (2,"Dharshi",21)
insert into employee(emp_id,emp_name,emp_age) values (3,"Dharshi",23)
insert into employee(emp_id,emp_name,emp_age) values (4,"Dharshi",28)
select student.stu_name,student.stu_age,employee.emp_name,employee.emp_age from student join employee on student.stu_id =  employee.emp_id-






-- Extend the edu_platform database by adding a assignments table.
create database edu_platform;
use edu_platform;
create table assignment(
student_id Int primary key auto_increment,
student_name varchar(40),
student_course varchar(50),
student_age int);
select * from assignment;
insert into assignment( student_id,student_name,student_course,student_age) values ( 1,"Dharshi","IT",21)
insert into assignment( student_id,student_name,student_course,student_age) values ( 2,"Dharvi","CSE",19)
insert into assignment( student_id,student_name,student_course,student_age) values ( 3,"Dhatcha","MCA",18)
-- Create sample assignments and link them to lessons.
alter table assignment add lesson_id int;
update assignment set lesson_id=1 where student_id=1;
update assignment set lesson_id=2 where student_id=2;
update assignment set lesson_id=1 where student_id=3;
-- Build a query that lists all assignments for a course.






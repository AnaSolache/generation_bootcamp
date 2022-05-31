-- LEER

-- muestra las bases de datos que tenemos
SHOW DATABASES;

-- selecciona 
USE WORLD;
USE sakila;

-- leer todos 
select * from actor;

-- leer parte específica
SELECT actor_id, first_name from actor;
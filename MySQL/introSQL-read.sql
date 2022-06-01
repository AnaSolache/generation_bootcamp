-- LEER

-- muestra las bases de datos que tenemos
SHOW DATABASES;

-- selecciona 
-- USE WORLD;
USE sakila;

-- leer todos 
select * from actor;

-- leer parte específica
SELECT actor_id, first_name from actor;

-- limitar la cantidad de datos
SELECT * FROM actor LIMIT 10;

-- ordenar los datos dependiendo de una columna ascendente asc
SELECT * FROM city ORDER BY country_id ASC; 

-- ordenar una columna pero de forma descendente
SELECT * FROM city ORDER BY country_id DESC; 

/*
Operadores de comparación 
	Igual			=
    Distinto 		!=
	Mayor 			>
    Menos 			<
    Mayor igual		>=
    Menor igual		<=
    Como 	Similar o parecido a			LIKE 	
	Que terminen como "an"					%an
	Que inicie con "an"						an%
    con que tenga "an"						%an%
    que tenga "k" o "r" en cualquier orden	%k_r%
    No es como								NOT LIKE
	
*/

-- buscar en 
SELECT * FROM city where city = "Cuman";
SELECT * FROM actor WHERE first_name = "Penelope";
SELECT * FROM actor where first_name != "Penelope";
SELECT * FROM actor where actor_id > 150;
SELECT * FROM actor where actor_id < 5;

SELECT * from actor where first_name like "jonh";

-- selecciona de la tabla todas las personas que tengan como first_name
SELECT * FROM actor WHERE first_name LIKE "%ope";
SELECT * FROM actor WHERE first_name LIKE "%an";

-- seleccionar de la tabla todas las personas cuyo firt name empiece con "an"
SELECT * FROM actor WHERE  first_name LIKE "an%";

-- no me importa como inicia o termina conque tenga doble "nn"
SELECT * FROM actor WHERE first_name LIKE "%nn%";

-- buscar cualquiera que tenga "k & r" sin importar el orden
SELECT * FROM actor WHERE first_name LIKE "%k_r%";

-- unidendo todo
SELECT * FROM actor WHERE first_name LIKE "%nn%" ORDER BY last_name ASC LIMIT 5;

/*	operadores lógicos
	AND		cumplir ambas condiciones 			
    OR		basta conque cumpla una de ellas	
*/

SELECT * FROM actor WHERE actor_id > 50 AND first_name LIKE "%nn%";

SELECT * FROM actor WHERE actor_id > 50 OR first_name LIKE "%nn%";








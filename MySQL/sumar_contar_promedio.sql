USE sakila;

select * from payment;

-- as nos permite darle un alias o un nombre temporal a la columna

SELECT count(*) AS  cantidad_filas from payment;
SELECT count(*) AS cantidad_filas from payment where staff_id = 2;

SELECT count(DISTINCT customer_id )FROM payment;

-- CONTAR FILAS DE LA TABLA hablando a otra que no estemos usando
SELECT count(*) from world.country;

-- SUM es para sumar todos los elementos de una fila
SELECT sum(amount) as total from payment where staff_id = 2;

-- ¿cúal es el cliente gastó más en renta?
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id order by total asc;
-- limit 10 ; gg

-- GROUP BY agrupa filas que contengan el mismo valor 
-- normalmente se usa en conjutno con COUNT(), AVG(), SUM()

SELECT customer_id, AVG(amount) as promedio from payment group by customer_id order by promedio desc;

SELECT * from sakila.address;
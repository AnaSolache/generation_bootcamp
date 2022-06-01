USE world;

SELECT 5 + 5;

SELECT * from country;

SELECT name, population from country order by population desc;

SELECT * FROM country where name = 'Mexico';

SELECT * FROM country where population > 50000000 and population <70000000 order by population;

-- between regrea datos dentro de un rango que nosotros específiquemos
SELECT * from country WHERE population between 50000000 and 70000000 order by population;
SELECT * from country WHERE population not between 50000000 and 70000000 order by population;

SELECT * from country where continent = "Asia" or continent = "North America";

-- IN nos permite especificar condiciones
SELECT * from country where continent IN ('Asia', 'North America', 'Oceania');

-- DISTINCT 
SELECT DISTINCT name from country;

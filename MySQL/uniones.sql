USE tienda;

-- JOINS nos permite cambiar datos de distintats tablas

-- INNER JOIN
-- solamente nos trae las filas donde hay valores validos
-- omite las filas donde hay null


SELECT
categoria.nombre as categoria,
producto.nombre as producto
from producto
inner join categoria on categoria.idCategoria = producto.idCategoria;

SELECT 
p.idProducto,
p.nombre,
p.idCategorira,
c.nombre
from producto p
inner join categoria c
on p.idCategoria = c.idCategoria;

-- MOSTRAR LAS DIRECCIONES ID
/*
adress - adress /  city_id
city - city / country_id / city_id
country - country / country_id
*/

SELECT
country.country_id as clavePais,
country.country as pais,
city.city_id as claveCiudad,
city.city as Ciudad,
address.address as direccion
from country 
inner join city on city.country_id = country.country_id
inner join address on address.city_id = city.city_id;

-- LEFT JOIN -- incluye los valores aunque haya null's
-- devuelve las filas de la primer tabla, aunque la condición no se cumpla

SELECT 
cliente.idCliente,
cliente.nombre as nombre,
factura.idfactura as factura
from cliente
left join factura on cliente.idCliente = factura.idCliente
order by nombre;

-- Right join
-- siempre devuelve las filas de la primer tabla, aunque la condición no se cumpla
SELECT 
cliente.idCliente,
cliente.nombre as nombre,
factura.idfactura as factura
from cliente
right join factura on cliente.idCliente = factura.idCliente
order by idFactura;

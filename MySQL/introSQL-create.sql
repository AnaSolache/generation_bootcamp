-- crear 
-- crear una nueva base de datos

CREATE DATABASE familia;
-- CREATE schema ;

-- seleccionar la base de datos
use familia;

-- cada que se haga una tabla debe tener minimo una columna
-- crear tabla
-- por defecto el valor asignado es null
-- no es necesario poner not null en llave primaria
-- debemos especificar cual es la llave primaria
-- default "desconocido"
-- para agregar valores únicos se utiliza unique
create table persona(
	persona_id int AUTO_INCREMENT NOT NULL,
    nombre varchar(255) NOT NULL,
    correo varchar(255) NOT NULL,
    edad int NOT NULL,
    estado varchar(255) DEFAULT "Desconocido",
    cumpleanios date,
    PRIMARY KEY (persona_id),
    CONSTRAINT correo_único UNIQUE (correo)
);

-- Insertar datos en una tabla
-- Tienen que ser en el orden indicado
INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) values ("Ana", "anasolache@gmail.com", 25, "Feliz", "1997-04-29"),
("Sol", "anasolache22@gmail.com", 28, "Enojo", "1998-04-29");
-- modificar datos al interior

select * from persona;
-- ingresar dato con valor por defecto 
INSERT INTO persona(nombre, correo, edad, cumpleanios) values ('Toño',"toño@gmail.com",22,"1999-04-09");
select * from persona;

CREATE TABLE mascota(
	mascota_id int auto_increment,
    nombre VARCHAR(255) not null,
    edad int NOT NULL,
    fk1_persona int NOT NULL,
    PRIMARY KEY (mascota_id),
    FOREIGN KEY (fk1_persona) references persona(persona_id)
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

Select * from mascota;

INSERT INTO mascota (nombre, edad, fk1_persona) values 
("Patitas", 4,1);
INSERT INTO mascota (nombre, edad, fk1_persona) values 
("nena",12,2);
INSERT INTO mascota (nombre, edad, fk1_persona) values 
("Beni",12,2);

INSERT INTO mascotita (nombre, edadP, fk1_persona) values 
("nena",12,2),
("Beni",12,2);


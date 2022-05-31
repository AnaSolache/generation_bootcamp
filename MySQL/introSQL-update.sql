-- ACTUALIZAR

ALTER TABLE mascotita ADD COLUMN especie VARCHAR(255) NOT NULL;

-- agregar una columna en una posición específica

ALTER TABLE mascota ADD COLUMN cumpleanios DATE AFTER edad;

-- modificar las característica de una columna
ALTER TABLE mascota MODIFY cumpleanios VARCHAR(255) not null;

SELECT * from mascotita;
SELECT * from persona;

-- no podemos cambiar el nombre de una columna
ALTER TABLE mascota CHANGE COLUMN edad edadP int not null;
-- renombrar la tabla
ALTER TABLE mascota RENAME mascotita;

-- actualizar los datos de una fila

-- error no se puede si no seleccionas la llave primaria
UPDATE mascotita SET especie = "Perro" WHERE nombre = "nena";

-- forma correcta
UPDATE mascotita SET especie = "Perro" where mascota_id = 2;

UPDATE mascotita SET especie = "Gato", edadP =10 where mascota_id = 1;
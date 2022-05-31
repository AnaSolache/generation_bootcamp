SELECT * from mascotita;

-- borrar fila
DELETE FROM mascotita where mascota_id=1;

-- borrar columna
ALTER TABLE mascotita DROP COLUMN cumpleanios;

-- borrar una tabla
DROP TABLE mascotita;

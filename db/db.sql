CREATE DATABASE IF NOT EXISTS medicos;

USE medicos;

CREATE TABLE doctores (
	id INT(11) NOT NULL UNIQUE,
    apellido_paterno VARCHAR(45) NOT NULL,
    apellido_materno VARCHAR(45) NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    dni INT(8) NOT NULL UNIQUE,
    especialidad VARCHAR(80) NOT NULL,
    codigo_colegiado INT NOT NULL UNIQUE
);
ALTER TABLE doctores ADD PRIMARY KEY (id);
ALTER TABLE doctores MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

INSERT INTO doctores VALUES
	(1, 'Angoma', 'Vilchez', 'Arian', 73484356, 'Odontología', 123456789),
    (2, 'Ore', 'Soto', 'Vicse', 74185263, 'Dermatología', 852741963),
    (3, 'Tantahuilca', 'Torres', 'Josimar', 95175342, 'Traumatología', 789456123);

SELECT * FROM doctores;


CREATE DATABASE IF NOT EXISTS medicos;

USE medicos;

CREATE TABLE doctores (
	Id INT(11) NOT NULL UNIQUE,
    Apellido_paterno VARCHAR(45) NOT NULL,
    Apellido_materno VARCHAR(45) NOT NULL,
    Nombre VARCHAR(45) NOT NULL,
    Dni INT(8) NOT NULL UNIQUE,
    Especialidad VARCHAR(80) NOT NULL,
    Codigo_colegiado INT NOT NULL UNIQUE
);
ALTER TABLE doctores ADD PRIMARY KEY (Id);
ALTER TABLE doctores MODIFY Id INT(11) NOT NULL AUTO_INCREMENT;

INSERT INTO doctores VALUES
	(1, 'Angoma', 'Vilchez', 'Arian', 73484356, 'Odontología', 123456789),
    (2, 'Ore', 'Soto', 'Vicse', 74185263, 'Dermatología', 852741963),
    (3, 'Tantahuilca', 'Torres', 'Josimar', 95175342, 'Traumatología', 789456123);

SELECT * FROM doctores;


-- -- Base de datos: `materiales`
-- CREATE DATABASE IF NOT EXISTS `materiales` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
-- USE `materiales`;


-- Estructura de la tabla `material`
CREATE TABLE IF NOT EXISTS `material` (
  `id_material` int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `descripcion` varchar(50) NOT NULL
);

-- Estructura de la tabla `persona`
CREATE TABLE IF NOT EXISTS `persona` (
  `id_persona` int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(50) NOT NULL
);

-- Estructura de la tabla `lugar`
CREATE TABLE IF NOT EXISTS `lugar` (
  `id_lugar` int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `lugar` varchar(50) NOT NULL
);

-- Estructura de la tabla `prestamo`
CREATE TABLE IF NOT EXISTS `prestamo` (
  `id_prestamo` int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_material` int(4) NOT NULL,
  `id_persona` int(4) NOT NULL,
  `id_lugar` int(4) NOT NULL,
  `fecha_prestamo` DATE NOT NULL,
  `fecha_devolucion` DATE,
  FOREIGN KEY (id_material) REFERENCES material(id_material),
  FOREIGN KEY (id_persona) REFERENCES persona(id_persona),
  FOREIGN KEY (id_lugar) REFERENCES lugar(id_lugar)
);

-- Datos para la tabla `material`
insert into material (descripcion) values ("Cámara de video");
insert into material (descripcion) values ("Grabadora manual");
insert into material (descripcion) values ("Ordenador portátil");

-- Datos para la tabla `persona`
insert into persona (nombre) values ("Angel Fuentes Mirete");
insert into persona (nombre) values ("Alberto García Guillo");
insert into persona (nombre) values ("Manuel Tercero Soria");

-- Datos para la tabla `lugar`
insert into lugar (lugar) values ("ELCHE");
insert into lugar (lugar) values ("SAN JUAN");
insert into lugar (lugar) values ("ORIHUELA");
insert into lugar (lugar) values ("ALTEA");

-- Datos para la tabla `prestamo`

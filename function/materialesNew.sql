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

-- Estructura de la tabla `usuario`
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre_usuario` varchar(50) NOT NULL,
  `contrasena` varchar(200) NOT NULL
);

-- Estructura de la tabla `lugar`
CREATE TABLE IF NOT EXISTS `lugar` (
  `id_lugar` int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `lugar` varchar(50) NOT NULL
);

-- Estructura de la tabla `prestamo`
CREATE TABLE IF NOT EXISTS `prestamo` (
  `id_prestamo` int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_persona` int(4) NOT NULL,
  `id_lugar` int(4) NOT NULL,
  `fecha_prestamo` DATE NOT NULL,
  `fecha_devolucion` DATE,
  FOREIGN KEY (id_persona) REFERENCES persona(id_persona),
  FOREIGN KEY (id_lugar) REFERENCES lugar(id_lugar)
);

-- Estructura de la tabla `lineas_prestamo`
CREATE TABLE IF NOT EXISTS `lineas_prestamo` (
  `id_prestamo` int(4) NOT NULL PRIMARY KEY,
  `id_material` int(4) NOT NULL PRIMARY KEY,
  FOREIGN KEY (id_prestamo) REFERENCES prestamo(id_prestamo),
  FOREIGN KEY (id_material) REFERENCES material(id_material)
);

-- Datos para la tabla `material`
insert into material (descripcion) values ("Cámara de video");
insert into material (descripcion) values ("Grabadora manual");
insert into material (descripcion) values ("Ordenador portátil");
insert into material (descripcion) values ("Micrófono UMH");
insert into material (descripcion) values ("Cámara 4K");
insert into material (descripcion) values ("Trípode");
insert into material (descripcion) values ("Disco duro 1 TB");
insert into material (descripcion) values ("Disco duro 500 GB");
insert into material (descripcion) values ("Cascos Sennheiser");
insert into material (descripcion) values ("USB 16 GB");

-- Datos para la tabla `persona`
insert into persona (nombre) values ("Angel Fuentes Mirete");
insert into persona (nombre) values ("Alberto García Guillo");
insert into persona (nombre) values ("Manuel Tercero Soria");
insert into persona (nombre) values ("Néstor Dobrinov Edrev");
insert into persona (nombre) values ("Diego Velaochaga Villar");

-- Datos para la tabla `lugar`
insert into lugar (lugar) values ("Ed. Altabix - Elche");
insert into lugar (lugar) values ("Ed. Severo Ochoa - San Juan");
insert into lugar (lugar) values ("Salesas - Orihuela");
insert into lugar (lugar) values ("Campus de Altea");
insert into lugar (lugar) values ("Ed. La Galia - Elche");
insert into lugar (lugar) values ("Desamparados - Orihuela");

-- Datos para la tabla `prestamo`
insert into prestamo values (1, 1, 1, "2015-01-15", "2015-02-15");
insert into prestamo values (2, 2, 2, "2015-03-15", "2015-04-15");
insert into prestamo values (3, 3, 3, "2015-05-15", "2015-05-15");
insert into prestamo values (4, 4, 4, "2015-06-15", "2015-07-15");
insert into prestamo values (5, 5, 5, "2015-08-15", "2015-09-15");

-- Datos para la tabla `lineas_prestamo`
insert into lineas_prestamo values (1, 1);
insert into lineas_prestamo values (1, 2);
insert into lineas_prestamo values (2, 1);
insert into lineas_prestamo values (2, 4);
insert into lineas_prestamo values (2, 9);
insert into lineas_prestamo values (3, 3);
insert into lineas_prestamo values (4, 5);
insert into lineas_prestamo values (4, 6);
insert into lineas_prestamo values (4, 7);
insert into lineas_prestamo values (4, 9);
insert into lineas_prestamo values (5, 8);
insert into lineas_prestamo values (5, 10);
-- -- Base de datos: `materiales`
-- CREATE DATABASE IF NOT EXISTS `materiales` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
-- USE `materiales`;

drop table if exists lineas_prestamo;
drop table if exists prestamo;
drop table if exists persona;
drop table if exists lugar;
drop table if exists material;
drop table if exists usuario;

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
  `contrasena` varchar(200) NOT NULL,
  `admin` BOOLEAN NOT NULL
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
  `id_usuario` int(4) NOT NULL,
  `fecha_prestamo` DATETIME NOT NULL,
  `fecha_devolucion` DATETIME,
  `observaciones` varchar(500),
  `eliminado` BOOLEAN NOT NULL,
  FOREIGN KEY (id_persona) REFERENCES persona(id_persona),
  FOREIGN KEY (id_lugar) REFERENCES lugar(id_lugar),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Estructura de la tabla `lineas_prestamo`
CREATE TABLE IF NOT EXISTS `lineas_prestamo` (
  `id_prestamo` int(4) NOT NULL,
  `id_material` int(4) NOT NULL,
  PRIMARY KEY (id_prestamo, id_material),
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
insert into material (descripcion) values ("Pértiga");
insert into material (descripcion) values ("Camara 2K");
insert into material (descripcion) values ("Iphone 6");
insert into material (descripcion) values ("Trípode 1");
insert into material (descripcion) values ("Cámara 1");
insert into material (descripcion) values ("Micrófono de corbata");
insert into material (descripcion) values ("MAC 15");
insert into material (descripcion) values ("Trípode 2");
insert into material (descripcion) values ("Trípode 3");
insert into material (descripcion) values ("Cámara 2 ");
insert into material (descripcion) values ("Micrófono 1");
insert into material (descripcion) values ("Cámara 5");
insert into material (descripcion) values ("Peluca");


-- Datos para la tabla `persona`
insert into persona (nombre) values ("Angel Fuentes Mirete");
insert into persona (nombre) values ("Alberto García Guillo");
insert into persona (nombre) values ("Manuel Tercero Soria");
insert into persona (nombre) values ("Néstor Dobrinov Edrev");
insert into persona (nombre) values ("Diego Velaochaga Villar");
insert into persona (nombre) values ("Eva Corbalan");
insert into persona (nombre) values ("Maria");
insert into persona (nombre) values ("Maria Maria");
insert into persona (nombre) values ("Jesús Martínez");
insert into persona (nombre) values ("Rocio");
insert into persona (nombre) values ("Paco");
insert into persona (nombre) values ("Alan Norman");
insert into persona (nombre) values ("Paco Ortiz");
insert into persona (nombre) values ("Paco Ortiz Garcia");
insert into persona (nombre) values ("Roberto");
insert into persona (nombre) values ("Juan Antonio");
insert into persona (nombre) values ("Pepe");
insert into persona (nombre) values ("pepe111");
insert into persona (nombre) values ("pepito");
insert into persona (nombre) values ("manute");
insert into persona (nombre) values ("Paquito");
insert into persona (nombre) values ("Manolo");
insert into persona (nombre) values ("José Juan");
insert into persona (nombre) values ("Juan Antonio Muñoz");
insert into persona (nombre) values ("Raúl Carceles");

-- Datos para la tabla `lugar`
insert into lugar (lugar) values ("Ed. Altabix - Elche");
insert into lugar (lugar) values ("Ed. Severo Ochoa - San Juan");
insert into lugar (lugar) values ("Salesas - Orihuela");
insert into lugar (lugar) values ("Campus de Altea");
insert into lugar (lugar) values ("Ed. La Galia - Elche");
insert into lugar (lugar) values ("Desamparados - Orihuela");
insert into lugar (lugar) values ("Ed. Altet - Elche");
insert into lugar (lugar) values ("Ed. Rectorado y Consejo Social");
insert into lugar (lugar) values ("Ed. Atzavares - Elche");
insert into lugar (lugar) values ("Ed. Torretamarit - Elche");

-- Datos para la tabla `prestamo`
insert into prestamo values (1, 1, 1, 1, "2015-01-15 10:35:00", "2015-02-15 12:15:00", "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (2, 2, 2, 1, "2015-03-15 10:35:00", NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (3, 3, 3, 1, "2015-05-15 10:35:00", "2015-05-15 12:15:00", "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (4, 4, 4, 1, "2015-06-15 10:35:00", "2015-07-15 12:15:00", "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (5, 5, 5, 1, "2015-08-15 10:35:00", NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (6, 2, 1, 1, '2016-05-24 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (7, 2, 1, 1, '2016-05-24 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (8, 2, 1, 1, '2016-05-24 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (9, 2, 5, 1, '2016-05-25 10:35:00', '2016-05-25 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (10, 3, 8, 1, '2016-05-24 10:35:00', '2016-05-25 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (11, 4, 4, 1, '2016-05-24 10:35:00', '2016-05-25 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (12, 6, 6, 1, '2016-05-24 10:35:00', '2016-05-25 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (13, 2, 8, 1, '2016-05-24 10:35:00', '2016-05-31 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (14, 3, 3, 1, '2016-05-24 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (15, 9, 3, 1, '2016-05-25 10:35:00', '2016-05-25 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (16, 3, 8, 1, '2016-05-26 10:35:00', '2016-05-26 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (17, 4, 1, 1, '2016-05-26 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (18, 1, 2, 1, '2016-05-26 10:35:00', '2016-05-26 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (19, 3, 1, 1, '2016-05-26 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (20, 2, 3, 1, '2016-05-27 10:35:00', '2016-05-30 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (21, 2, 3, 1, '2016-05-30 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 1);
insert into prestamo values (22, 22, 10, 1, '2016-05-31 10:35:00', '2016-06-02 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (23, 2, 7, 1, '2016-05-31 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (24, 3, 8, 1, '2016-06-01 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (25, 4, 6, 1, '2016-06-01 10:35:00', '2016-06-01 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (26, 1, 4, 1, '2016-06-01 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (27, 5, 1, 1, '2016-06-03 10:35:00', '2016-06-01 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (28, 5, 1, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (29, 2, 3, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (30, 3, 3, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (31, 25, 6, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (32, 2, 5, 1, '2016-06-03 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (33, 4, 6, 1, '2016-06-22 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (34, 1, 7, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (35, 1, 5, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (36, 5, 3, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (37, 4, 8, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (38, 3, 10, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (39, 6, 2, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (40, 4, 5, 1, '2016-06-04 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (41, 9, 7, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (42, 3, 10, 1, '2016-06-04 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (43, 2, 10, 1, '2016-06-05 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (44, 9, 2, 1, '2016-06-05 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (45, 4, 2, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (46, 2, 1, 1, '2016-06-06 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (47, 2, 7, 1, '2016-06-02 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (48, 2, 4, 1, '2016-06-03 10:35:00', NULL, "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);
insert into prestamo values (49, 6, 2, 1, '2016-06-08 10:35:00', '2016-06-09 12:15:00', "Esto son las observaciones del préstamo, aquí se indicará el uso que se le va a dar al material o cualquier otro detalle que se crea necesario.", 0);

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
insert into lineas_prestamo values (6, 11);
insert into lineas_prestamo values (7, 11);
insert into lineas_prestamo values (8, 11);
insert into lineas_prestamo values (9, 5);
insert into lineas_prestamo values (10, 6);
insert into lineas_prestamo values (11, 2);
insert into lineas_prestamo values (12, 7);
insert into lineas_prestamo values (13, 8);
insert into lineas_prestamo values (14, 1);
insert into lineas_prestamo values (14, 6);
insert into lineas_prestamo values (14, 10);
insert into lineas_prestamo values (15, 9);
insert into lineas_prestamo values (16, 6);
insert into lineas_prestamo values (17, 3);
insert into lineas_prestamo values (18, 12);
insert into lineas_prestamo values (19, 2);
insert into lineas_prestamo values (19, 5);
insert into lineas_prestamo values (19, 6);
insert into lineas_prestamo values (20, 3);
insert into lineas_prestamo values (20, 10);
insert into lineas_prestamo values (21, 1);
insert into lineas_prestamo values (22, 14);
insert into lineas_prestamo values (22, 15);
insert into lineas_prestamo values (22, 17);
insert into lineas_prestamo values (23, 14);
insert into lineas_prestamo values (23, 17);
insert into lineas_prestamo values (25, 4);
insert into lineas_prestamo values (25, 5);
insert into lineas_prestamo values (26, 15);
insert into lineas_prestamo values (27, 6);
insert into lineas_prestamo values (28, 20);
insert into lineas_prestamo values (29, 9);
insert into lineas_prestamo values (30, 3);
insert into lineas_prestamo values (30, 7);
insert into lineas_prestamo values (31, 10);
insert into lineas_prestamo values (32, 19);
insert into lineas_prestamo values (33, 5);
insert into lineas_prestamo values (34, 8);
insert into lineas_prestamo values (34, 10);
insert into lineas_prestamo values (35, 12);
insert into lineas_prestamo values (35, 18);
insert into lineas_prestamo values (36, 14);
insert into lineas_prestamo values (36, 15);
insert into lineas_prestamo values (37, 1);
insert into lineas_prestamo values (37, 6);
insert into lineas_prestamo values (38, 9);
insert into lineas_prestamo values (38, 19);
insert into lineas_prestamo values (39, 5);
insert into lineas_prestamo values (39, 7);
insert into lineas_prestamo values (39, 9);
insert into lineas_prestamo values (40, 5);
insert into lineas_prestamo values (40, 6);
insert into lineas_prestamo values (41, 5);
insert into lineas_prestamo values (41, 11);
insert into lineas_prestamo values (41, 16);
insert into lineas_prestamo values (42, 9);
insert into lineas_prestamo values (42, 11);
insert into lineas_prestamo values (42, 12);
insert into lineas_prestamo values (43, 14);
insert into lineas_prestamo values (43, 15);
insert into lineas_prestamo values (43, 21);
insert into lineas_prestamo values (44, 11);
insert into lineas_prestamo values (44, 18);
insert into lineas_prestamo values (44, 20);
insert into lineas_prestamo values (45, 1);
insert into lineas_prestamo values (45, 6);
insert into lineas_prestamo values (45, 9);
insert into lineas_prestamo values (45, 11);
insert into lineas_prestamo values (46, 1);
insert into lineas_prestamo values (46, 14);
insert into lineas_prestamo values (47, 1);
insert into lineas_prestamo values (47, 6);
insert into lineas_prestamo values (47, 11);
insert into lineas_prestamo values (48, 1);
insert into lineas_prestamo values (48, 2);
insert into lineas_prestamo values (48, 14);
insert into lineas_prestamo values (49, 22);


-- Datos para la tabla `usuario`
insert into usuario (nombre_usuario, contrasena, admin) values ("oficina", "$2y$12$vL.iGaB4px1VCLZvsCUdIem.GGpGkvBy3hu2Pgct66Ty3zqQxH3j2", 0);
insert into usuario (nombre_usuario, contrasena, admin) values ("admin", "$2y$12$5AbSMFh3dBVRxH8Qd0nheuLPuBd/3fX1GQGAcFIWYJu5uHsYYDPBO", 1);
insert into usuario (nombre_usuario, contrasena, admin) values ("alberto", "$2y$12$fZ8zyCuITn8YD/xOHxSiVOINkAXRmbCEspGZ5y4sWBMuN2knT5Y8G", 1);
insert into usuario (nombre_usuario, contrasena, admin) values ("manu", "$2y$12$RtvlxdCgp6xRXE1jCnskNeU7RKjCdgxDRd71mwqkTgzGykp96/IS2", 1);

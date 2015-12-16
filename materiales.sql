-- Base de datos: `materiales`
CREATE DATABASE IF NOT EXISTS `materiales` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `materiales`;


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
  FOREIGN KEY (id_material, id_persona, id_lugar) REFERENCES material(id_material), persona(id_persona), lugar(id_lugar)
);
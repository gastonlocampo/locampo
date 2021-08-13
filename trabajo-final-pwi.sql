-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-08-2021 a las 03:08:42
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trabajo-final-pwi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(1000) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(2) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `eliminado`, `ts_create`, `ts_update`) VALUES
(15, 'Hamburguesas de autor', 'Sabrosas, contundentes y saludables. Dentro de pan árabe con miga, tostado y lleva rúcula, lechuga, tomates asados, mayo casera, medallón, queso, huevo a la plancha, aros de cebolla y hummus de garbanzo. Salen con papas rústicas y mayonesa casera.', 0, '2021-08-12 16:07:13', '2021-08-12 16:07:13'),
(16, 'Shawarmas', 'Támbien conocidos como \"lomitos árabes\" son una comida callejera del medio oriente que consiste en un pan pita sin miga relleno con verduras y carnes. Permite la cocina fusión, donde se aplican distintas técnicas de cocción y relleno, según la región.', 0, '2021-08-12 18:28:18', '2021-08-12 18:28:18'),
(17, 'Wraps', 'Son como una ensalada bien completa, envuelta en una tortilla grande de trigo tostada a la plancha. Hay opciones veggies o con pollo. Todos salen con grisines de salvado y hummus de garbanzos.', 0, '2021-08-12 18:31:47', '2021-08-12 18:31:47'),
(18, 'Medallones al plato', 'La opción perfecta para quienes deciden no comer pan! Incluye 2 medallones de autor y guarnición a elección.', 0, '2021-08-12 18:38:04', '2021-08-12 18:38:04'),
(19, 'Ensaladas', 'Opciones saludables de nuestro menú frío! Incluyen un dip a elección de mayonesa casera o mostaza con oliva y miel.', 0, '2021-08-12 18:39:54', '2021-08-12 18:39:54'),
(20, 'Extras', 'Nuestras opciones para picar!', 0, '2021-08-12 18:42:31', '2021-08-12 18:42:31'),
(21, 'Guarniciones', 'Los mejores acompañamientos para tus platos favoritos!', 0, '2021-08-12 18:48:50', '2021-08-12 18:48:50'),
(22, 'Combos', 'Combos seleccionados para compartir.', 0, '2021-08-12 18:51:00', '2021-08-12 18:51:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_imagenes`
--

CREATE TABLE `categorias_imagenes` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL,
  `ts_create` datetime DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categorias_imagenes`
--

INSERT INTO `categorias_imagenes` (`id`, `uid`, `id_categoria`, `eliminado`, `ts_create`, `ts_update`) VALUES
(5, '6aeea610-8c3a-4b11-a4b2-c7c7aa548f56.jpeg', 15, 0, '2021-08-12 16:07:13', '2021-08-12 16:07:13'),
(6, '32a3f712-2985-46e4-a294-7c20227e9b7b.jpeg', 16, 0, '2021-08-12 18:28:18', '2021-08-12 18:28:18'),
(7, 'f8d325bb-c72a-4e75-ad29-88483bd5ae5c.jpeg', 17, 0, '2021-08-12 18:31:47', '2021-08-12 18:31:47'),
(8, '181b9102-1dbf-48f0-85f6-f6d5e2e3d986.jpeg', 18, 0, '2021-08-12 18:38:04', '2021-08-12 18:38:04'),
(9, 'fd6ba604-0d6d-4691-b65b-baf56c79799c.jpeg', 19, 0, '2021-08-12 18:39:54', '2021-08-12 18:39:54'),
(10, 'b3f967c2-7001-42f5-aaa1-5657495eea63.jpeg', 20, 0, '2021-08-12 18:42:31', '2021-08-12 18:42:31'),
(11, 'c5ab6b47-dd08-4231-86bd-940f63e7e259.jpeg', 21, 0, '2021-08-12 18:48:50', '2021-08-12 18:48:50'),
(12, '5a391b4f-d5e3-429b-80fb-9f5cd8b86ac3.jpeg', 22, 0, '2021-08-12 18:51:00', '2021-08-12 18:51:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` int(255) NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellido`, `telefono`, `direccion`, `eliminado`, `ts_create`, `ts_update`) VALUES
(8, 'Gastón', 'Lo Cascio Ocampo', 2222222, 'Mariano Larra 3333', 0, '2021-08-12 21:55:58', '2021-08-12 21:59:20'),
(9, 'Ignacio', 'Lo Cascio Ocampo', 1111111, 'Julio Borda 2222', 0, '2021-08-12 21:58:46', '2021-08-12 21:58:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados_imagenes`
--

CREATE TABLE `empleados_imagenes` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados_imagenes`
--

INSERT INTO `empleados_imagenes` (`id`, `uid`, `id_empleado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(3, '2969273b-c354-427a-8f6b-bbbc282671f8.jpeg', 8, 0, '2021-08-12 21:55:58', '2021-08-12 21:55:58'),
(4, '71ad60d8-2e93-44ed-9bc2-ec5d1a5b520f.jpeg', 9, 0, '2021-08-12 21:58:46', '2021-08-12 21:58:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `asunto` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `contenido` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `nombre`, `apellido`, `mail`, `asunto`, `contenido`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Juan Bautista', 'Bustos', 'glocampoutn@gmail.com', 'Comida', 'Muy rica comida y excelente servicio! Muchas gracias por la atención! ', 0, '2021-08-09 22:33:18', '2021-08-12 22:00:20'),
(2, 'Tomás', 'Bobadilla', 'glocampoutn@gmail.com', 'Comida saludable', 'Tremenda comida!', 0, '2021-08-10 01:35:41', '2021-08-12 22:00:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `stock`, `id_categoria`, `eliminado`, `ts_create`, `ts_update`) VALUES
(44, 'Burger Ternera Gourmet', 'Medallón de ternera y verduras, acompañado de rúcula, lechuga, tomates asados, mayonesa casera, queso, huevo a la plancha, cebolla pre cocida y hummus de garbanzos.', 550, 30, 15, 0, '2021-08-12 20:37:31', '2021-08-12 20:37:31'),
(45, 'Burger Pollo Gourmet', 'Medallón de pollo y verduras, acompañado de lechuga y tomate, mayonesa casera, repollo morado, queso, huevo a la plancha y mostaza con oliva y miel.', 550, 30, 15, 0, '2021-08-12 20:38:53', '2021-08-12 20:38:53'),
(46, 'Burger Veggie Gourmet', 'Medallón relleno a elección (garbanzos, soja o lentejas) acompañado de rúcula y lechuga, tomates asados, zanahoria, cebolla pre cocida, mostaza con oliva y miel, queso, huevo a la plancha y hummus de garbanzos.', 550, 30, 15, 0, '2021-08-12 20:50:14', '2021-08-12 20:50:14'),
(47, 'Burger Clásica', 'Medallón a elección con lechuga fresca, tomate en dados, mayonesa casera y mostaza olivamiel.', 440, 30, 15, 0, '2021-08-12 20:52:11', '2021-08-12 20:52:11'),
(48, 'Shawarma Ternera', 'Carne cocinada al malbec, cortada en tiras, dentro de pan árabe, acompañada de lechuga fresca, tomates en dados, cebolla pre cocida, mayonesa casera, hummus de garbanzos y perejil.', 550, 30, 16, 0, '2021-08-12 20:55:24', '2021-08-12 20:55:24'),
(49, 'Shawarma Pollo al curry', 'Dados de pollo salteados en curry, dentro de pan árabe, con lechuga, tomate, zanahoria, hummus de garbanzo y mayonesa casera.', 550, 30, 16, 0, '2021-08-12 20:58:39', '2021-08-12 20:58:39'),
(50, 'Shawarma de Falafel', 'Bolitas de falafel veggie cocinados a la plancha, dentro de pan árabe, acompañado de lechuga y rúcula fresca, tomate en dados, cebolla pre cocida, repollo morado, zanahoria rallada, mayonesa casera, mostaza olivamiel y lluvia de perejil.', 550, 30, 16, 0, '2021-08-12 21:00:45', '2021-08-12 21:00:45'),
(51, 'Shawarma de Champignones', 'Champignones salteados en oliva, dentro de pan árabe, acompañado de rúcula, lechuga, tomate, cebolla pre cocida, hummus de garbanzos y mayonesa casera.', 550, 30, 16, 0, '2021-08-12 21:03:36', '2021-08-12 21:03:36'),
(52, 'Shawarma sin guarnición', 'Shawarma a elección (ternera, pollo al curry, falafel o champignones) sin guarnición. Sale envuelto en papel parafinado dentro de bolsa de papel.', 420, 30, 16, 0, '2021-08-12 21:05:34', '2021-08-12 21:05:34'),
(53, 'Wrap de pollo al limón', 'Relleno con pollo grillé, queso, lechuga fresca, tomate en dados, repollo morado, zanahoria rallada, cebolla pre cocida y mayonesa casera envuelto en tortilla grande de trigo.', 490, 30, 17, 0, '2021-08-12 21:08:31', '2021-08-12 21:08:31'),
(54, 'Wrap Aguacate', 'Relleno con palta del día, queso, huevo cocido, rúcula, lechuga fresca, tomate en dados, cebolla pre cocida y mayonesa casera envuelto en tortilla grande de trigo.', 490, 30, 17, 0, '2021-08-12 21:10:39', '2021-08-12 21:10:39'),
(55, 'Wrap Champignones salteados', 'Relleno de champignones al wok, rúcula, lechuga, repollo morado, tomate en dados, queso y mayonesa casera envuelto en tortilla grande de trigo.', 490, 30, 17, 0, '2021-08-12 21:12:58', '2021-08-12 21:12:58'),
(56, 'Wrap sin guarnición', 'Wrap Buen Lunes a elección (pollo al limón, aguacate, champignones salteados) sin guarnición. Sale envuelto en papel parafinado dentro de bolsa de papel.', 420, 30, 17, 0, '2021-08-12 21:14:51', '2021-08-12 21:14:51'),
(57, 'Medallones de ternera', 'Dos medallones caseros de ternera y verduras con guarnición a elección.', 500, 30, 18, 0, '2021-08-12 21:16:43', '2021-08-12 21:22:20'),
(58, 'Medallones de pollo', 'Dos medallones caseros de pollo y verduras con guarnición a elección.', 500, 30, 18, 0, '2021-08-12 21:17:47', '2021-08-12 21:22:36'),
(59, 'Medallones de garbanzos rellenos', 'Dos medallones de garbanzos rellenos con queso y tomate, cocinados con aceite de oliva. Incluyen guarnición a elección.', 500, 30, 18, 0, '2021-08-12 21:18:39', '2021-08-12 21:18:39'),
(60, 'Medallones de lentejas rellenos', 'Dos medallones de lentejas rellenos con queso y tomate, cocinados con aceite de oliva. Incluyen guarnición a elección.', 500, 30, 18, 0, '2021-08-12 21:19:57', '2021-08-12 21:22:53'),
(61, 'Medallones de soja rellenos', 'Dos medallones de soja rellenos con queso y tomate, cocinados con aceite de oliva. Incluyen guarnición a elección.', 500, 30, 18, 0, '2021-08-12 21:20:41', '2021-08-12 21:23:11'),
(62, 'Ensalada Buen Lunes', 'Colchón de hojas verdes, pollo grillé al limón, crutons, dados de queso, tomate en gajos y lluvia de perejil.', 450, 30, 19, 0, '2021-08-12 21:27:35', '2021-08-12 21:32:12'),
(63, 'Ensalada Variete', 'Palta del día, lechuga fresca, repollo morado, queso en tiras, huevo cocido, zanahoria rallada y semillas tostadas.', 450, 30, 19, 0, '2021-08-12 21:28:42', '2021-08-12 21:32:27'),
(64, 'Ensalada Gourmet', 'Colchón de rúcula y lechuga, champignones salteados en oliva, queso, aros de cebolla, tomates asados y maní tostado.', 450, 30, 19, 0, '2021-08-12 21:29:52', '2021-08-12 21:32:53'),
(65, 'Nuggets de pollo y avena', '4 redonditos de pollo, verduras y avena (total 250gr.) acompañados con papas rústicas y dip de mayonesa casera.', 550, 30, 20, 0, '2021-08-12 21:33:59', '2021-08-12 21:33:59'),
(66, 'Papas rústicas con huevos revueltos', 'Papas rústicas con 2 huevos revueltos. Incluye dips de salsa picante y mayonesa casera.', 400, 30, 20, 0, '2021-08-12 21:35:44', '2021-08-12 21:40:12'),
(67, 'Papas rústicas con DIPS', 'Una caja de papas con cáscara, cortadas en gajos, condimentadas con sal de campo y perejil. Incluye dips de salsa picante y mayonesa casera.', 350, 30, 20, 0, '2021-08-12 21:37:49', '2021-08-12 21:40:27'),
(68, 'Grisines de salvado con DIPS', 'Triple porción de grisines de salvado con salsas: mayonesa casera, hummus de garbanzos y mostaza con oliva y miel.', 300, 30, 20, 0, '2021-08-12 21:39:27', '2021-08-12 21:40:43'),
(69, 'Verduras salteadas y maní tostado', 'Guarnición', 160, 30, 21, 0, '2021-08-12 21:41:46', '2021-08-12 21:41:46'),
(70, 'Papas rústicas', 'Guarnición', 160, 30, 21, 0, '2021-08-12 21:42:22', '2021-08-12 21:42:22'),
(71, 'Ensalada de rúcula, tomates asados y queso	', 'Guarnición', 160, 30, 21, 0, '2021-08-12 21:43:29', '2021-08-12 21:43:29'),
(72, 'Ensalada de zanahoria, tomate y huevo', 'Guarnición', 160, 30, 21, 0, '2021-08-12 21:44:01', '2021-08-12 21:44:01'),
(73, 'COMBO 1 - 2 WRAPS + 1 PAPAS RÚSTICAS', '2 wraps iguales a elección (pollo al limón, aguacate o champignones salteados), más una caja de papas rústicas con dips de mayonesa y salsa picante caseras.', 1100, 30, 22, 0, '2021-08-12 21:44:45', '2021-08-12 21:48:40'),
(74, 'COMBO 2 - 2 SHAWARMAS + 1 PAPAS RÚSTICAS', '2 shawarmas iguales a elección (ternera, pollo al curry, falafel o champignones), más una caja de papas rústicas con dips de mayonesa y salsa picante caseras.', 1100, 30, 22, 0, '2021-08-12 21:46:06', '2021-08-12 21:48:52'),
(75, 'COMBO 3 - 2 WRAPS CON GRISINES Y DIPS', '2 wraps iguales a elección (pollo al limón, aguacate o champignones salteados) en una caja, con dips de mayonesa y hummus caseros y grisines de salvado.', 950, 30, 22, 0, '2021-08-12 21:47:17', '2021-08-12 21:47:17'),
(76, 'COMBO 4 - 2 WRAPS DE POLLO SIN GUARNICIÓN', '2 wraps de pollo al limón sin guarnición.', 790, 30, 22, 0, '2021-08-12 21:48:06', '2021-08-12 21:49:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_imagenes`
--

CREATE TABLE `productos_imagenes` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_producto` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `productos_imagenes`
--

INSERT INTO `productos_imagenes` (`id`, `uid`, `id_producto`, `eliminado`, `ts_create`, `ts_update`) VALUES
(4, '241d0148-78ac-4c73-9d7e-de9e141dde67.jpeg', 44, 0, '2021-08-12 20:37:31', '2021-08-12 20:37:31'),
(5, 'e0ceac4a-569d-45b5-8c26-4e8d9a466295.jpeg', 45, 0, '2021-08-12 20:38:53', '2021-08-12 20:38:53'),
(6, 'f0cefc8e-8fd9-4ef6-83e4-de5e5a191252.jpeg', 46, 0, '2021-08-12 20:50:14', '2021-08-12 20:50:14'),
(7, '251b3f75-9ea7-4a7c-82e9-35e033507f24.jpeg', 47, 0, '2021-08-12 20:52:11', '2021-08-12 20:52:11'),
(8, '12cfe9ca-2f3e-436e-a7bc-a6121358fbf3.jpeg', 48, 0, '2021-08-12 20:55:24', '2021-08-12 20:56:51'),
(9, 'e7eb469e-61b9-4841-9e17-e63bcead5da8.jpeg', 49, 0, '2021-08-12 20:58:39', '2021-08-12 20:58:39'),
(10, 'c1f44aa0-1b2c-4cca-be30-6947bc559756.jpeg', 50, 0, '2021-08-12 21:00:45', '2021-08-12 21:00:45'),
(11, 'bc6af5cf-a896-4eeb-8968-7cc5f23652a3.jpeg', 51, 0, '2021-08-12 21:03:36', '2021-08-12 21:03:36'),
(12, '4f15c6af-6817-42d4-b384-76865f301439.jpeg', 52, 0, '2021-08-12 21:05:34', '2021-08-12 21:05:34'),
(13, '036fd1cf-76b5-4044-9da3-775c0e22e8c9.jpeg', 53, 0, '2021-08-12 21:08:31', '2021-08-12 21:08:31'),
(14, '1aab714c-ccec-43c0-beb0-b014c2f068f9.jpeg', 54, 0, '2021-08-12 21:10:39', '2021-08-12 21:10:39'),
(15, '18ed4fd2-9697-47cd-a1d2-36b006fabcd7.jpeg', 55, 0, '2021-08-12 21:12:58', '2021-08-12 21:12:58'),
(16, '6bb87861-6b9b-41b1-9fab-b80d4c054d4f.jpeg', 56, 0, '2021-08-12 21:14:51', '2021-08-12 21:14:51'),
(17, '4477461b-0d22-4795-8cb0-bc547067c44a.jpeg', 65, 0, '2021-08-12 21:33:59', '2021-08-12 21:33:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `confirmacionCorreo` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` int(255) NOT NULL,
  `admin` tinyint(4) NOT NULL DEFAULT 0,
  `habilitado` tinyint(4) NOT NULL DEFAULT 0,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `username`, `pass`, `mail`, `confirmacionCorreo`, `telefono`, `admin`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Florencia', 'Lo Cascio', 'florlocascio', '83593559b75a2003da96e9953c6b9d8872640083', 'glocampoutn@gmail.com', '0cbedfe3-242b-4273-bb14-86deaff7cc0b', 3333333, 1, 1, 0, '2021-08-04 18:32:03', '2021-08-12 22:03:06'),
(2, 'Franco', 'González', 'francogonzalez', 'c44d09f5bb2901c109bdcf427171d9d9c6262800', 'glocampoutn@gmail.com', 'b2ebc05e-587c-448b-a1f7-ace8e49c0b77', 4444444, 0, 1, 0, '2021-08-04 18:33:20', '2021-08-12 22:03:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_imagenes`
--

CREATE TABLE `usuarios_imagenes` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias_imagenes`
--
ALTER TABLE `categorias_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados_imagenes`
--
ALTER TABLE `empleados_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `usuarios_imagenes`
--
ALTER TABLE `usuarios_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `categorias_imagenes`
--
ALTER TABLE `categorias_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `empleados_imagenes`
--
ALTER TABLE `empleados_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios_imagenes`
--
ALTER TABLE `usuarios_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias_imagenes`
--
ALTER TABLE `categorias_imagenes`
  ADD CONSTRAINT `categorias_imagenes_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `empleados_imagenes`
--
ALTER TABLE `empleados_imagenes`
  ADD CONSTRAINT `empleados_imagenes_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD CONSTRAINT `productos_imagenes_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `usuarios_imagenes`
--
ALTER TABLE `usuarios_imagenes`
  ADD CONSTRAINT `usuarios_imagenes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

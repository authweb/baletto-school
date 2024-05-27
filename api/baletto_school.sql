-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Май 27 2024 г., 10:30
-- Версия сервера: 5.7.11
-- Версия PHP: 7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `baletto_school`
--

-- --------------------------------------------------------

--
-- Структура таблицы `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `submitted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `email`, `message`, `submitted_at`) VALUES
(1, 'Valery', 'gooldg@mail.ru', 'fdgsdfg', '2024-05-27 09:16:00');

-- --------------------------------------------------------

--
-- Структура таблицы `group_members`
--

CREATE TABLE `group_members` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `day_of_week` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trainer_id` int(11) DEFAULT NULL,
  `time_start` time NOT NULL,
  `student_group` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direction` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `schedule`
--

INSERT INTO `schedule` (`id`, `day_of_week`, `trainer_id`, `time_start`, `student_group`, `direction`) VALUES
(105, 'Понедельник', 1, '09:30:00', 'Группа 9-14 лет', 'Балет'),
(106, 'Понедельник', 2, '18:00:00', 'Группа 5-8 лет', 'Актерское мастерство'),
(107, 'Понедельник', 3, '18:00:00', 'Группа 9-15 лет', 'Актерское мастерство'),
(108, 'Вторник', 3, '11:00:00', 'Группа 6-9 лет', 'Балет'),
(109, 'Вторник', 2, '15:00:00', 'Группа 9-11 лет', 'Балет'),
(110, 'Вторник', 1, '17:00:00', 'Группа 7-9 лет', 'Балет'),
(111, 'Вторник', 1, '18:00:00', 'Группа 3-4 года', 'Балет'),
(112, 'Вторник', 1, '19:00:00', 'Группа 5-6 лет', 'Балет'),
(113, 'Среда', 1, '09:30:00', 'Группа 9-14 лет', 'Балет'),
(114, 'Среда', 2, '11:00:00', 'Группа 3-4 года', 'Балет'),
(115, 'Среда', 3, '16:00:00', 'Группа 5-6 лет', 'Балет'),
(116, 'Среда', 1, '17:00:00', 'Группа 3-4 года', 'Балет'),
(117, 'Среда', 2, '18:00:00', 'Группа 7-9 лет', 'Балет'),
(118, 'Среда', 3, '19:10:00', 'Группа 10-15 лет', 'Балет'),
(119, 'Четверг', 1, '11:00:00', 'Группа 6-9 лет', 'Балет'),
(120, 'Четверг', 3, '17:00:00', 'Группа 7-9 лет', 'Балет'),
(121, 'Четверг', 2, '18:00:00', 'Группа 3-4 года', 'Балет'),
(122, 'Четверг', 3, '19:00:00', 'Группа 5-6 лет', 'Балет'),
(123, 'Пятница', 2, '15:00:00', 'Группа 9-11 лет', 'Балет'),
(124, 'Пятница', 1, '16:00:00', 'Группа 5-6 лет', 'Балет'),
(125, 'Пятница', 3, '17:00:00', 'Группа 3-4 года', 'Балет'),
(126, 'Пятница', 1, '18:00:00', 'Группа 7-9 лет', 'Балет'),
(127, 'Пятница', 2, '19:10:00', 'Группа 10-15 лет', 'Балет'),
(128, 'Суббота', 1, '11:00:00', 'Группа 3-4 года', 'Балет'),
(129, 'Суббота', 3, '12:00:00', 'Группа 6-9 лет', 'Растяжка'),
(130, 'Суббота', 2, '13:30:00', 'Группа 10-15 лет', 'Растяжка');

-- --------------------------------------------------------

--
-- Структура таблицы `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_date` date NOT NULL,
  `parent_contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registration_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `students`
--

INSERT INTO `students` (`id`, `first_name`, `last_name`, `birth_date`, `parent_contact`, `email`, `phone`, `address`, `registration_date`) VALUES
(1, 'Иван', 'Иванов', '2010-05-14', 'Мария Иванова', 'ivanov@example.com', '+79161234567', 'Москва, ул. Ленина, д. 1', '2024-05-26 13:43:26'),
(2, 'Алексей', 'Петров', '2011-08-20', 'Петр Петров', 'petrov@example.com', '+79161234568', 'Санкт-Петербург, пр. Невский, д. 2', '2024-05-26 13:43:26'),
(3, 'Ольга', 'Смирнова', '2009-12-01', 'Анна Смирнова', 'smirnova@example.com', '+79161234569', 'Новосибирск, ул. Советская, д. 3', '2024-05-26 13:43:26'),
(4, 'Мария', 'Кузнецова', '2012-03-15', 'Светлана Кузнецова', 'kuznetsova@example.com', '+79161234570', 'Екатеринбург, ул. Мира, д. 4', '2024-05-26 13:43:26'),
(5, 'Анна', 'Попова', '2010-07-25', 'Елена Попова', 'popova@example.com', '+79161234571', 'Казань, ул. Баумана, д. 5', '2024-05-26 13:43:26'),
(6, 'Дмитрий', 'Соколов', '2011-01-30', 'Николай Соколов', 'sokolov@example.com', '+79161234572', 'Челябинск, ул. Ленина, д. 6', '2024-05-26 13:43:26'),
(7, 'Екатерина', 'Лебедева', '2009-09-10', 'Марина Лебедева', 'lebedeva@example.com', '+79161234573', 'Омск, ул. Карла Маркса, д. 7', '2024-05-26 13:43:26'),
(8, 'Максим', 'Козлов', '2010-11-05', 'Александра Козлова', 'kozlov@example.com', '+79161234574', 'Самара, ул. Гагарина, д. 8', '2024-05-26 13:43:26'),
(9, 'Алина', 'Новикова', '2011-04-22', 'Ольга Новикова', 'novikova@example.com', '+79161234575', 'Уфа, ул. Комсомольская, д. 9', '2024-05-26 13:43:26'),
(10, 'Владимир', 'Морозов', '2012-02-18', 'Ирина Морозова', 'morozov@example.com', '+79161234576', 'Ростов-на-Дону, ул. Пушкина, д. 10', '2024-05-26 13:43:26');

-- --------------------------------------------------------

--
-- Структура таблицы `student_groups`
--

CREATE TABLE `student_groups` (
  `id` int(11) NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `description` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `trainers`
--

CREATE TABLE `trainers` (
  `id` int(11) NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `patronymic` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` mediumtext COLLATE utf8mb4_unicode_ci,
  `hire_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `trainers`
--

INSERT INTO `trainers` (`id`, `last_name`, `first_name`, `patronymic`, `email`, `phone`, `bio`, `hire_date`, `created_at`, `image_path`) VALUES
(1, 'Шпак', 'Надежда', 'Андреевна', 'ivan@example.com', '123-456-7890', 'Руководитель школы BALLETTO. Окончила Красноярский хореографический колледж по специальности «Артист балета», имею первый разряд по художественной и по эстетической гимнастике. В настоящее время являюсь преподавателем Красноярского хореографического колледжа.', '2020-05-15', '2024-05-27 04:44:02', 'train1.jpeg'),
(2, 'Медведев', 'Александр', 'Андреевич', 'elena@example.com', '456-789-0123', 'В 2013 году окончил Красноярский хореографический колледж, успешно и плодотворно работал в различных театрах России. Был солистом балета в Северском музыкальном театр, Санкт-Петербургском театре музыкальной комедии, а также в труппе Классического русского балета п/р Х. Усманова \n\nРаботу в театре совмещал с педагогической деятельностью. Активно преподавал в России и Китае. Работает с детьми в возрасте от 3х лет, взрослыми в возрасте от 7лет . Занимается профессиональной подготовкой к поступлению в хореографические училища, подготовкой детей к выступлению на всероссийских и международных конкурсах.', '2019-10-20', '2024-05-27 04:44:02', 'train2.jpeg'),
(3, 'Угай', 'Максима', 'Михайловна', 'mikhail@example.com', '789-012-3456', 'Преподаватель с 20-летним стажем. Окончила Красноярский хореографический колледж. Действующая артистка балета в труппе Красноярского театра оперы и балета. Есть высшее образование - дошкольная педагогика и психология.', '2021-02-28', '2024-05-27 04:44:02', 'train3.jpeg'),
(4, 'Ваккер', 'Мария', 'Александровна', NULL, NULL, 'Мария Александровна 6 лет работает с детками. Окончила Красноярское хореографического училище в 2007 году по специальности «Артист балета».\r\n\r\nС 2007 до 2016 год работала в Красноярском государственном театре оперы и балета.\r\n\r\nС 2017 года начала педагогическую деятельность с детьми 2х лет и старше. Подготовила учеников к поступлению в Красноярский хореографический колледж, которые успешно прошли вступительные экзамены. Так же, её ученицы показывают хорошие результаты на конкурсах и занимают призовые места. Дополнительно даёт хореографию фигуристам, гимнасткам и бальным танцорам.', NULL, '2024-05-27 06:05:19', 'train4.jpeg'),
(5, 'Кузнецова', 'Анна', 'Александровна', NULL, NULL, 'Закончила Красноярское хореографическое училище. Работала в театре оперы и балета. Ездила на гастроли в Англию, Францию, Италию, Испанию, Мексику и т.д. \n\nЕе преподавательский стаж составляет 11 лет. \n\nАнна Александровна танцевала больших и маленьких лебедей, подруг из Дон Кихота, трио из балета Баядерка. \n\nСчитает, что обучение классической хореографии помогает гармонично взаимодействовать с окружающим миром и с самим собой, а на уроках старается не только улучшить технику танца, но и сформировать в каждом ученике творческую личность!', NULL, '2024-05-27 07:58:07', NULL),
(6, 'Скалюн', 'Карина', 'Васильевна', NULL, NULL, 'Окончила Новосибирский Государственный Хореографический Колледж в 2012г\r\nСразу после окончания была принята в труппу Новосибирского Государственного Академического театра оперы и балета. \r\nС 2014 по 2016 работала в театре оперы и балета г.Владивосток \r\nС 2016г по 2021г продолжает работу во Владивостоке , но театр получает статус Мариинского театра «приморская сцена»\r\nС 2021г  работает в Красноярском театре оперы и балета им. Хворостовского. \r\n \r\nПреподавала детям хореографию с 5 лет. С женщинами занималась Боди балетом . И вела хореографию у гимнастов. Преподавательский стаж 5 лет', NULL, '2024-05-27 07:58:07', NULL),
(7, 'Корень', 'Зоя', 'Олеговна', NULL, NULL, 'Педагог по ораторскому и актерскому мастерству, режиссёр-постановщик спектаклей и мама. Выпускница речевой школы «Скажи Это» и Арт-лаборатории Сибирского государственного института искусств имени Дмитрия Хворостовского. \r\nБлагодаря сочетанию классической хореографии и занятий актёрским мастерством, каждый ребёнок может стать более раскрепощенным и уверенным в себя, улучшить навыки общения и стать настоящим маленьким артистом. \r\n\r\nЗадача школы – помочь ребенку раскрыть свой внутренний потенциал. В лёгкой игровой форме дети с детства учатся лучше понимать себя, свои эмоции, учиться не бояться их проявлять, чего к сожалению, часто не хватает нам взрослым в современной жизни.\r\n⠀\r\nКаждое занятие по актерскому мастерству – это настоящее театральное действо.', NULL, '2024-05-27 07:58:35', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('user','trainer','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Valery', 'dsfsdf@gsdf.ru', '$2b$10$nymoZ4dNsvP2t41LjkqmX.3h0cRc/uF/z5YRvNgR9z2mfjj4lWeSq', NULL),
(2, 'Valery', 'demo@refine.dev', '$2b$10$fXLXFQ7/w98oPxaNtQ00hOPlq6Xn/Q1Qs6UCWkdAxRBTGC2kp2rOO', 'admin'),
(3, 'Evgeni', 'evgen@mail.ru', '$2b$10$A01Pby.0uxNBqcOlh9rJV.qGHOmJ6O6n13pAKANk6DqscyI86XbmS', 'admin'),
(4, '123', '123@123.ru', '$2b$10$8t/EWTYgJeqU2hI2q3GJFO3F6.Jw9UB5MTZkafIraB/ONYqt4oDta', 'admin'),
(6, '123123', '123123@123.ru', '$2b$10$aAB2rL/Fw/QiURwBtkaoOe/aDNVHihBpS81ebyRyJk.KClm9YQ.pO', 'user');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `group_members`
--
ALTER TABLE `group_members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `group_id` (`group_id`);

--
-- Индексы таблицы `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `schedule_ibfk_1` (`trainer_id`);

--
-- Индексы таблицы `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Индексы таблицы `student_groups`
--
ALTER TABLE `student_groups`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `trainers`
--
ALTER TABLE `trainers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `group_members`
--
ALTER TABLE `group_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;
--
-- AUTO_INCREMENT для таблицы `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT для таблицы `student_groups`
--
ALTER TABLE `student_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `trainers`
--
ALTER TABLE `trainers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `group_members`
--
ALTER TABLE `group_members`
  ADD CONSTRAINT `group_members_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `group_members_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `student_groups` (`id`);

--
-- Ограничения внешнего ключа таблицы `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`trainer_id`) REFERENCES `trainers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

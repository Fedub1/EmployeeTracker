USE employee_db;

INSERT INTO department (name)

VALUES
("Tennis Professional League "),
("Tennis Amateur League "),
("Training and Fitness"),
("Health & Wellness "),
("Marketing and Media"),


INSERT INTO role (title, salary, department_id)

VALUES
("Pro Coach", 120000, 1);
("Pro Assistant Coach", 95000, 1);
("International Pro League Director", 145000, 1);
("Amateur Coaching Director", 70000, 2);
("Amateur Coach Trainee", 50000, 2);
("Conditioning Coach", 80000, 3);
("International Nutrition Coach", 80000, 4);
("Media Director", 50000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES
("Serena", "Williams", 1, 1,
("Venus", "Williams", 2, 2),
("Chris", "Everet", 3, NULL),
("Martina", "Navratilova", 4, 3),
("Steffi", "Graf", 5, 4),
("Maria", "Sharapova", 6, 5),
("Naomi", "Osaka", 7, NULL),
("Jennifer", "Capriati", 8, 6),
("Rafael", "Nadal", 9, NULL),
("Rodger", "Federer", 10, 7),
("Andy", "Murray", 11, NULL),
("Novak", "Djokovic", 12, NULL),
("John", "McEnroe", 13, 8),
("Andy", "Roddick", 14, 9),
("Ivan", "Lendl", 15, NULL),
("Andre", "Agassi", 16, 10),


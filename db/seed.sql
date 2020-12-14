USE employee_db;

INSERT INTO department (name)

VALUES
("Tennis Professional League "),
("Tennis Amateur League "),
("Training and Fitness"),
("Health & Wellness "),
("Marketing and Media");


INSERT INTO role (title, salary, department_id)

VALUES
("Pro Coach", 120000, 1),
("Pro Assistant Coach", 95000, 1),
("International Pro League Director", 145000, 1),
("Amateur Coaching Director", 70000, 2),
("Amateur Coach Trainee", 50000, 2),
("Conditioning Coach", 80000, 3),
("International Nutrition Coach", 80000, 4),
("Media Director", 50000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES
("Serena", "Williams", 1, 1),
("Venus", "Williams", 2, 2),
("Chris", "Everet", 3, NULL),
("Martina", "Navratilova", 4, 3),
("Steffi", "Graf", 4, 4),
("Maria", "Sharapova", 4, 5),
("Naomi", "Osaka", 3, NULL),
("Jennifer", "Capriati", 1, 4),
("Rafael", "Nadal",3, NULL),
("Rodger", "Federer", 2, 4),
("Andy", "Murray", 2, NULL),
("Novak", "Djokovic", 2, NULL),
("John", "McEnroe", 5, 5),
("Andy", "Roddick", 4, 1),
("Ivan", "Lendl", 4, NULL),
("Andre", "Agassi", 4, 2);




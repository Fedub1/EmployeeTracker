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


INSERT INTO employee (first_name, last_name, role_id, department_id)

VALUES
("Serena", "Williams", 1, 1),
("Venus", "Williams", 2, 2),
("Chris", "Everet", 3, 2),
("Martina", "Navratilova", 4, 3),
("Steffi", "Graf", 4, 4),
("Maria", "Sharapova", 4, 5),
("Naomi", "Osaka", 3, 5),
("Jennifer", "Capriati", 1, 4),
("Rafael", "Nadal",3, 4),
("Rodger", "Federer", 2, 1),
("Andy", "Murray", 2, 3),
("Novak", "Djokovic", 2, 3),
("John", "McEnroe", 5, 5),
("Andy", "Roddick", 4, 4),
("Ivan", "Lendl", 4, 2),
("Andre", "Agassi", 4, 2);




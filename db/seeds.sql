USE teachhub_db;

##INSERT TEACHER
INSERT INTO `teachhub_db`.`Teachers`
(`name`,
`email`,
`avgRating`,
`createdAt`,
`updatedAt`)
VALUES
(
"asfd asdfas",
"austiadsf@ads.vom",
"5",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP);

##INSERT LESSONS

INSERT INTO lessons (name, subject, `teacherId`, gradeLevel, avgRating, ratingQuantity, createdAt, updatedAt)
VALUES ("Junior Precalc", "math",1, 11, 4, 200, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Algorithms 2: electric boogaloo", "compsci",1, 11, 5, 20, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
   ("Homeconomics: The Budgeting", "homec",1, 11, 3, 40, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
   ("Musical Theory", "music",1, 11, 2, 500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

##INSERT REVIEWS
INSERT INTO `teachhub_db`.`Ratings`
(`stars`,
`comments`,
`createdAt`,
`updatedAt`,
`teacherId`,
`LessonId`)
VALUES(
5,
"AMAZING",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP,
1,
1),
(
1,
"BOOOO",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP,
1,
1);
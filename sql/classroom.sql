-- CREATE TABLE classroom
CREATE TABLE `classroom` (
    `cr_cnt` int NOT NULL AUTO_INCREMENT,
	`cr_eng` varchar(10) NOT NULL,
  	`cr_building` varchar(10) NOT NULL,
  	`cr_classroom` varchar(45) NOT NULL,
  	PRIMARY KEY (`cr_cnt`),
  	KEY `idx_cr_building` (`cr_building`),
  	KEY `idx_cr_classroom` (`cr_classroom`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO classroom (cr_building, cr_classroom) VALUES ('건물명', '강의실이름');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('tj', '태전관', '1강의실');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('tj', '태전관', '2강의실');

INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('ydm', '역동관(본관)', '1강의실');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('ydm', '역동관(본관)', '3강의실');

INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('yd1', '역동관(1관)', '1강의실');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('yd1', '역동관(1관)', '4강의실');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('yd1', '역동관(1관)', '2강의실');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('yd1', '역동관(1관)', '3강의실');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('yd1', '역동관(1관)', '6강의실');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('yd1', '역동관(1관)', '5강의실');

INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('yd3', '역동관(3관)', '7강의실');
INSERT INTO classroom (cr_eng, cr_building, cr_classroom) VALUES ('yd3', '역동관(3관)', '8강의실');

-- SELECT
SELECT * FROM classroom;

-- DROP
DROP TABLE classroom;

SELECT cr_eng, cr_building FROM classroom GROUP BY cr_building, cr_eng;
SELECT cr_eng, cr_building, COUNT(cr_classroom) AS cr_classroom_count FROM classroom GROUP BY cr_building, cr_eng ORDER BY cr_building ASC;

SELECT cr_eng, COUNT(cr_classroom) AS cr_classroom_count FROM classroom WHERE cr_eng = 'tj' GROUP BY cr_eng;

SELECT * FROM classroom WHERE cr_eng = 'yd1' ORDER BY cr_classroom ASC;
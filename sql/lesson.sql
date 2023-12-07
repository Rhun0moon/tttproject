-- CREATE TABLE lesson
CREATE TABLE `lesson` (
  	`l_id` int NOT NULL AUTO_INCREMENT,
  	`l_building` varchar(10) DEFAULT NULL,
  	`l_teacher` varchar(10) DEFAULT NULL,
  	`l_classroom` varchar(45) DEFAULT NULL,
  	`l_grade` varchar(10) DEFAULT NULL,
  	`l_subject` varchar(20) DEFAULT NULL,
	`l_week` varchar(10) DEFAULT NULL,
  	`l_firsttime` int DEFAULT NULL,
  	`l_secondtime` int DEFAULT NULL,
  	`l_student` int DEFAULT NULL,
  	PRIMARY KEY (`l_id`),
	KEY `l_building_idx` (`l_building`),
	KEY `l_teacher_idx` (`l_teacher`),
	KEY `l_classroom_idx` (`l_classroom`),
  	CONSTRAINT `l_building` FOREIGN KEY (`l_building`) REFERENCES `classroom` (`cr_building`),
  	CONSTRAINT `l_classroom` FOREIGN KEY (`l_classroom`) REFERENCES `classroom` (`cr_classroom`),
  	CONSTRAINT `l_teacher` FOREIGN KEY (`l_teacher`) REFERENCES `teach` (`t_teacher`),
	CONSTRAINT `fk_lesson_week` FOREIGN KEY (`l_week`) REFERENCES `week` (`w_eng`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO lesson (l_building, l_teacher, l_classroom, l_grade, l_subject, l_week, l_firsttime, l_secondtime, l_student) 
-- VALUES ('건물', '강사이름', '강의실', '학년', '과목', '요일', '시작시간', '끝시간', '인원');
INSERT INTO lesson (l_building, l_teacher, l_classroom, l_grade, l_subject, l_week, l_firsttime, l_secondtime, l_student)
VALUES ('태전관', '김선희T', '1강의실', '1학년', '수학', 'mon', 13, 14, 30);
INSERT INTO lesson (l_building, l_teacher, l_classroom, l_grade, l_subject, l_week, l_firsttime, l_secondtime, l_student)
VALUES ('태전관', '이정빈T', '2강의실', '2학년', '영어', 'tue', 13, 14, 25);
INSERT INTO lesson (l_building, l_teacher, l_classroom, l_grade, l_subject, l_week, l_firsttime, l_secondtime, l_student)
VALUES ('역동관(본관)', '최영숙T', '1강의실', '3학년', '과학', 'mon', 15, 16, 28);
INSERT INTO lesson (l_building, l_teacher, l_classroom, l_grade, l_subject, l_week, l_firsttime, l_secondtime, l_student)
VALUES ('역동관(본관)', '김찬유T', '3강의실', '1학년', '역사', 'tue', 17, 18, 32);
INSERT INTO lesson (l_building, l_teacher, l_classroom, l_grade, l_subject, l_week, l_firsttime, l_secondtime, l_student)
VALUES ('역동관(1관)', '유진선T', '4강의실', '2학년', '국어', 'tue', 19, 20, 20);
INSERT INTO lesson (l_building, l_teacher, l_classroom, l_grade, l_subject, l_week, l_firsttime, l_secondtime, l_student)
VALUES ('역동관(1관)', '이정빈T', '1강의실', '1학년', '국어', 'mon', 13, 16, 10);

-- SELECT
SELECT * FROM lesson;

-- DELETE
DELETE FROM lesson;

-- DROP
DROP TABLE lesson;

-- 필요한 데이터 출력

SELECT le.* FROM lesson as le JOIN classroom as cr ON le.l_building = cr.cr_building WHERE cr.cr_eng = 'yd1' GROUP BY le.l_id;

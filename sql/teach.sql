-- CREATE TABLE teach
CREATE TABLE `teach` (
    `t_id` int NOT NULL AUTO_INCREMENT,
    `t_teacher` varchar(10) NOT NULL,
    `t_color` varchar(45) NOT NULL,
    PRIMARY KEY (`t_id`,`t_teacher`),
    KEY `idx_t_teacher` (`t_teacher`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT INTO teach (t_teacher, t_color) VALUES ('강사명', '#색상코드');
INSERT INTO teach (t_teacher, t_color) VALUES ('김선희T', '#644CA2');
INSERT INTO teach (t_teacher, t_color) VALUES ('이정빈T', '#3E77E9');
INSERT INTO teach (t_teacher, t_color) VALUES ('최영숙T', '#FF5952');
INSERT INTO teach (t_teacher, t_color) VALUES ('김찬유T', '#4FC775');
INSERT INTO teach (t_teacher, t_color) VALUES ('유진선T', '#FFD656');

-- SELECT
SELECT * FROM teach;

-- DROP
DROP TABLE teach;
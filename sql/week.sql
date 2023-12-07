-- CREATE TABLE week
CREATE TABLE `week` (
	`w_id` INT NOT NULL AUTO_INCREMENT,
	`w_eng` varchar(10) NOT NULL,
  	`w_ko` varchar(10) NOT NULL,
  	PRIMARY KEY (`w_id`),
    KEY `idx_w_eng` (`w_eng`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- INSERT INTO week (w_eng, w_ko) VALUES ('영어', '한글');
INSERT INTO week (w_eng, w_ko) VALUES ('mon', '월요일');
INSERT INTO week (w_eng, w_ko) VALUES ('tue', '화요일');
INSERT INTO week (w_eng, w_ko) VALUES ('wed', '수요일');
INSERT INTO week (w_eng, w_ko) VALUES ('thu', '목요일');
INSERT INTO week (w_eng, w_ko) VALUES ('fri', '금요일');
INSERT INTO week (w_eng, w_ko) VALUES ('sat', '토요일');
INSERT INTO week (w_eng, w_ko) VALUES ('sun', '일요일');

-- SELECT
SELECT * FROM week;

-- DROP
DROP TABLE week;

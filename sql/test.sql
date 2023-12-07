<학생선택>
SELECT c_student FROM ttt.class WHERE '~~~';

<강의실 추가하기>
INSERT INTO `ttt`.`classroom` (`cr_building`, `cr_classroom`) VALUES ('안녕하세요', '2호실');

<강의실 삭제하기>
DELETE FROM `ttt`.`classroom` WHERE (`cr_building` = '안녕하세요') and (`cr_classroom` = '22');

<강의실 수정하기>
UPDATE `ttt`.`classroom` SET `cr_classroom` = '' WHERE (`cr_building` = '안녕하세요') and (`cr_classroom` = '2호실');

UPDATE `ttt`.`classroom` SET `cr_building` = '', `cr_classroom` = '' WHERE (`cr_building` = '안녕하세요') and (`cr_classroom` = '22');

<강사 추가하기>
INSERT INTO 'ttt','teach' (t_teacher) VALUES ('선생님 이름');

<강사 삭제하기>
DELETE FROM `ttt`.`teach` WHERE (`t_teacher` = '선생님 이름');

<색상 추가하기>
UPDATE `ttt`.`teach` SET `t_teacher` = '선생님 이름' WHERE (`t_teacher` = '기본값') and (`t_id` = '1~13');


<수업 추가하기>
SELECT c_week, c_firsttime, c_secondtime, c_classroom, c_teacher FROM ttt.class WHERE c_week ='월'AND c_teacher='김선희T'; 

INSERT INTO ttt.class (c_grade, c_subject, c_student) VALUES ('학년','과목','7');

<수업 삭제하기>
DELETE FROM `ttt`.`class` WHERE (`c_id` = '17');

<수업 상세보기>
SELECT c_week, c_firsttime, c_secondtime, c_classroom, c_teacher FROM ttt.class WHERE c_week ='월'AND c_teacher='김선희T';
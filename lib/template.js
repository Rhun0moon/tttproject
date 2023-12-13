var sanitizeHtml = require('sanitize-html');
module.exports = {
	HTML:function(title, nav, schedule, cate){
		return`
			<!DOCTYPE html>  
			<html lang="ko">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link rel="stylesheet" href="./css/reset.css">
				<link rel="stylesheet" href="./css/style2.css">
				<title>${title}</title>
			</head>
			<body>
				<!-- header -->
				<header>
					<a href="/"><img src="./img/logo.png" alt="로고 이미지"></a>
				</header>
				
				<!-- 카테고리 -->
				<nav id="nav">
					${nav}
				</nav>
				
				<!-- 메인 -->
				<div id="main">
					<div id="table" class="main-content-70">
						${schedule}
					</div>
				
					<div id="cate" class="main-content-30">
						${cate}
					</div>
				</div>
			
				<!-- footer -->
				<footer>
					<p>&copy; 2023 교사 시간표 웹사이트</p>
				</footer>
				
			</body>
			</html>
		`;
	}, list:function(classrooms, target){
		var list = `<ul>`;
		var i = 0;
		while(i < classrooms.length){
			if(target == classrooms[i].cr_eng){ list = list + `<li class="nav1">`;}
			else { list = list + `<li class="">`; }
            list = list + `<a href="/${classrooms[i].cr_eng}">${sanitizeHtml(classrooms[i].cr_building)}</a></li>`;
            i = i + 1;
        }
        list = list+`</ul>`;
        return list;
	}, table:function(weeks){
		var html = ``;
		var i=0;
		while(i < weeks.length){
			html =  html + `
				<div id="${weeks[i].w_eng}-sc" class="day-schedule">
					<h2>${weeks[i].w_ko} 시간표</h2>
					<table>
						<thead>
							<tr>
								<th>시간</th>
								<th>1강의실</th>
								<th>2강의실</th>
								<th>3강의실</th>
								<th>4강의실</th>
								<th>5강의실</th>
								<th>6강의실</th>
								<th>7강의실</th>
								<th>8강의실</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>13:00-14:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
							<tr>
								<td>14:00-15:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
							<tr>
								<td>15:00-16:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
							<tr>
								<td>16:00-17:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
							<tr>
								<td>17:00-18:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
							<tr>
								<td>18:00-19:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
							<tr>
								<td>19:00-20:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
							<tr>
								<td>20:00-21:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
							<tr>
								<td>21:00-22:00</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
								<td>강의 내용</td>
							</tr>
						</tbody>
					</table>
				</div>
			`;
			i = i+1;
		}
		return html;
	}, tableex:function(weeks, classrooms, lessons, teachs){
		var html = ``;
		var i=0, j=0, x=0, hour=13;
		while(i < weeks.length){
			html =  html + `
				<div id="${weeks[i].w_eng}-sc" class="day-schedule">
					<h2>${weeks[i].w_ko} 시간표</h2>
					<table>
						<thead>
							<tr>
								<th>시간</th>
			`;
			while(x < classrooms.length){
				html =  html + ` <th>${classrooms[x].cr_classroom}</th> `;
				x = x+1;
			}
			x=0;
			html =  html + `
							</tr>
						</thead>
						<tbody>
			`;
			while(hour<22){
				html = html + ` <tr> <td>${hour}:00-${hour+1}:00</td> `;
				while(j < classrooms.length){
					var lesson = lessons && lessons.find(item => item.l_week === weeks[i].w_eng && item.l_firsttime <= hour && item.l_secondtime > hour && item.l_classroom === classrooms[j].cr_classroom);
					var teach = (lesson && teachs && teachs.length > 0) ? teachs.find(item => lesson.l_teacher === item.t_teacher) : undefined;
					//var teach = teachs.find(item => lesson.l_teacher === item.t_teacher);
					if(lesson && teach){
						if(lesson.l_firsttime === hour){
							html = html + `<td style="background-color: ${teach.t_color}">${lesson.l_teacher}</br>${lesson.l_grade} - ${lesson.l_subject}</td>`;
						}else{
							html = html + `<td style="background-color: ${teach.t_color}"></td>`;
						}
						//html = html + `<td>${lesson.l_teacher} - ${lesson.l_grade}- ${lesson.l_subject}</td>`;
					}else{
						html = html + `<td></td>`;
					}
					// html =  html + ` <td id=${weeks[i].w_eng}-${hour}-${classrooms[j].cr_cnt}></td> `;
					j = j+1;
				}
				j=0;
				html = html + ` </tr> `;
				hour=hour+1;
			}
			hour=13;

			html =  html + `
						</tbody>
					</table>
				</div>
			`;
			i = i+1;
		}
		return html;

	}, cate:function(){
		return `
			<!-- 1. 검색하기 -->
			<div id="search" class="content-cate box1">
				<h2>검색하기</h2>
				<form action="/search_process" method="post" id="searchForm">
					<label for="searchInput">검색어:</label>
					<input type="text" id="searchInput" name="searchInput">
					<input type="submit" value="검색하기">
				</form>
			</div>

			<!-- 2. 카테고리별로 보기 -->
			<div id="categoryView" class="content-cate box1">
				<h2>카테고리별로 보기</h2>

			</div>

			<!-- 3. 강의실 관리 -->
			<div id="classroomManagement" class="content-cate box1">
				<h2>강의실 관리</h2>
				<form id="classroomForm">
					<label for="buildingInput">건물:</label>
					<input type="text" id="buildingInput" required> <br/>
					<label for="classroomInput">강의실:</label>
					<input type="text" id="classroomInput" required> <br/>
					<input type="submit" value="추가하기">
				</form>
			
				<div id="classroomList">
					<h3>저장된 강의실</h3>
					<ul id="classroomUl"></ul>
					<button type="button" onclick="deleteClassroom()">삭제하기</button>
				</div>
			</div>

			<!-- 4. 강사 관리 -->
			<div id="instructorManagement" class="content-cate box1">
				<h2>강사 관리</h2>
				
				<p>추가하기</p>
				<form id="instructorForm">
					<label for="nameInput">이름:</label>
					<input type="text" id="nameInput" required> <br/>
					<label for="colorInput">색상:</label>
					<input type="color" id="colorInput" required> <br/>
					<button type="button" onclick="addInstructor()">추가하기</button>
				</form>
			
				<p>삭제하기</p>
				<div id="classroomList">
					<h3>저장된 강사</h3>
					<ul id="classroomUl"></ul>
					<button type="button" onclick="deleteClassroom()">삭제하기</button>
				</div>
			</div>

			<!-- 5. 수업 추가 -->
			<div id="addClass" class="content-cate box1">
				<h2>수업 추가</h2>
				<!-- 입력 폼 -->
				<form id="classForm">
					<label for="dayInput">요일:</label>
					<input type="text" id="dayInput" required> <br/>
					<label for="timeInput">시간:</label>
					<input type="text" id="timeInput" required> <br/>
					<label for="classroomInput">강의실:</label>
					<input type="text" id="classroomInput" required> <br/>
					<label for="instructorInput">강사:</label>
					<input type="text" id="instructorInput" required> <br/>
					<label for="gradeInput">학년:</label>
					<input type="text" id="gradeInput" required> <br/>
					<label for="subjectInput">과목:</label>
					<input type="text" id="subjectInput" required> <br/>
					<label for="capacityInput">수강인원:</label>
					<input type="text" id="capacityInput" required> <br/>
					<button type="button" onclick="addClass()">추가하기</button>
				</form>
			</div>

			<!-- 6. 상세보기 -->
			<div id="detailView" class="content-cate box1">
				<h2>상세보기</h2>
			
				<!-- 수정 및 삭제 폼 -->
				<form id="detailsForm">
					<label for="updateDayInput">요일:</label>
					<input type="text" id="updateDayInput" required>
					<label for="updateTimeInput">시간:</label>
					<input type="text" id="updateTimeInput" required>
					<label for="updateClassroomInput">강의실:</label>
					<input type="text" id="updateClassroomInput" required>
					<label for="updateInstructorInput">강사:</label>
					<input type="text" id="updateInstructorInput" required>
					<label for="updateGradeInput">학년:</label>
					<input type="text" id="updateGradeInput" required>
					<label for="updateSubjectInput">과목:</label>
					<input type="text" id="updateSubjectInput" required>
					<label for="updateCapacityInput">수강인원:</label>
					<input type="text" id="updateCapacityInput" required>
					<button type="button" onclick="updateClass()">수정하기</button>
					<button type="button" onclick="deleteClass()">삭제하기</button>
				</form>
			</div>
		`;
	}, onetable:function(w_eng, w_ko, classrooms, teachs, lessons){
		var html = ``;
		var i=0, hour=13;
		html +=`
			<div id="${w_eng}-sc" class="day-schedule">
				<h2>${w_ko} 시간표</h2>
				<table>
					<thead>
						<tr>
							<th>시간</th>
		`;
		for (const classroom of classrooms) {
			html += `<th>${classroom.cr_classroom}</th>`;
		}
	
		html += `
						</tr>
					</thead>
					<tbody>
		`;
		while(hour<22){
			html = html + ` <tr> <td>${hour}:00-${hour+1}:00</td> `;
			for (const classroom of classrooms) {
				var lesson = lessons && lessons.find(item => item.l_firsttime <= hour && item.l_secondtime > hour && item.l_classroom === classroom.cr_classroom);
				var teach = (lesson && teachs && teachs.length > 0) ? teachs.find(item => lesson.l_teacher === item.t_teacher) : undefined;
	
				//var teach = teachs.find(item => lesson.l_teacher === item.t_teacher);
				if(lesson && teach){
					if(lesson.l_firsttime === hour){
						html = html + `<td style="background-color: ${teach.t_color}">${lesson.l_teacher}</br>${lesson.l_grade} - ${lesson.l_subject}- ${lesson.l_student}명</td>`;
					}else{
						html = html + `<td style="background-color: ${teach.t_color}"></td>`;
					}
				}else{
					html = html + `<td></td>`;
				}
			}
			html = html + ` </tr> `;
			hour=hour+1;
		}
		hour=13;
		html =  html + `
					</tbody>
				</table>
			</div>
		`;
		return html;
	}
}
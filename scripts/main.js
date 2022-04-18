import { Student, EducationLevel } from './student.js';
import { Course } from './course.js';
let courses = [
    new Course("Design and Architecture Principles", 400, 94, true, 2022),
    new Course("Agile in software engineering", 200, 94, true, 2022),
    new Course("Biology", 200, 85, true, 2022),
    new Course("Math", 180, 90, true, 2022),
    new Course("Logic", 140, 50, false, 2022),
    new Course("Signals and Systems", 200, 58, false, 2022),
];
export const st = new Student("Andru", "Lopez", "avatar.png", 25, EducationLevel.POSTGRADUATE, courses);
console.log(st);
let studentTable = document.getElementById("student");
let statsTable = document.getElementById('stats');
let coursesTable = document.getElementById('courses');
let btnFilter = document.getElementById('button-filter');
let searchText = document.getElementById('search-text');
btnFilter.onclick = filterByName;
showStudentData(st);
showStats(st);
showCourses(st.courses);
function filterByName() {
    let text = searchText.value;
    text = (text == null) ? "" : text;
    coursesTable.getElementsByTagName("tbody")[0].remove();
    let filteredCourses = st.courses.filter(c => c.name.match(text));
    showCourses(filteredCourses);
}
function showStudentData(student) {
    let tbodyStudent = document.createElement("tbody");
    tbodyStudent.innerHTML = `<tr><td colspan=2><img src="./${student.avatar}" height="100"></td></tr>
    <tr><td><b>Name:</b></td><td>${student.names}</td></tr>
    <tr><td><b>Last Name:</b></td><td>${student.lastname}</td></tr>
    <tr><td><b>Education level:</b></td><td>${student.educationLevel}</td></tr>
    <tr><td><b>Age:</b></td><td>${student.age}</td></tr>`;
    studentTable.appendChild(tbodyStudent);
}
function showStats(student) {
    let certifiedNumber = student.giveCertifiedCourses();
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Certified courses:</b></td><td>${certifiedNumber}</td>`;
    statsTable.appendChild(trElement);
}
function showCourses(courses) {
    let coursesTbody = document.createElement("tbody");
    let state = courses.map(c => c.score > 60 ? 'green' : 'red');
    let index = 0;
    for (let course of courses) {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${course.name}</td>
        <td>${course.hours}</td>
        <td style=color:${state[index]}>${course.score}</td>
        <td>${course.certified}</td>
        <td>${course.year}</td>`;
        coursesTbody.appendChild(trElement);
        index++;
    }
    coursesTable.appendChild(coursesTbody);
}
